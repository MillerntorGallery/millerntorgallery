<?php
namespace T3SBS\T3sbootstrap\DataProcessing;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\ContentObject\DataProcessorInterface;



/**
 * This data processor can be used for processing data from pi_flexform
 */
class BootstrapProcessor implements DataProcessorInterface
{


	/**
	 * Process data of a record to resolve File objects to the view
	 *
	 * @param ContentObjectRenderer $cObj The data of the content element or page
	 * @param array $contentObjectConfiguration The configuration of Content Object
	 * @param array $processorConfiguration The configuration of this processor
	 * @param array $processedData Key/value store of processed data (e.g. to be passed to a Fluid View)
	 * @return array the processed data as key/value store
	 */
	public function process(ContentObjectRenderer $cObj, array $contentObjectConfiguration, array $processorConfiguration,  array $processedData)
	{

		$flexconf = array();

		if ($processedData['data']['CType'] == 'gridelements_pi1') {
			if ( $processedData['data']['tx_gridelements_backend_layout'] == 'background_wrapper'
			  || $processedData['data']['tx_gridelements_backend_layout'] == 'collapsible_accordion' 
			  || $processedData['data']['tx_gridelements_backend_layout'] == 'tabs_tab') {
			  	// do nothing!
			} else {
				$flexconf['frame'] = $processedData['data']['flexform_frame'];
			}
			$flexconf['hiddenXs'] = $processedData['data']['flexform_hiddenXs'];
			$flexconf['hiddenSm'] = $processedData['data']['flexform_hiddenSm'];
			$flexconf['hiddenMd'] = $processedData['data']['flexform_hiddenMd'];
			$flexconf['hiddenLg'] = $processedData['data']['flexform_hiddenLg'];
			$flexconf['hiddenPrint'] = $processedData['data']['flexform_hiddenPrint'];  
			$flexconf['rulerAfter'] = $processedData['data']['flexform_rulerAfter'];
			$flexconf['rulerBefore'] = $processedData['data']['flexform_rulerBefore'];
			$flexconf['indent'] = $processedData['data']['flexform_indent'];  
			$flexconf['topMargin'] = $processedData['data']['flexform_topMargin'];
			$flexconf['bottomMargin'] = $processedData['data']['flexform_bottomMargin'];  
			$flexconf['containerOverride'] = $processedData['data']['flexform_containerOverride'];  

		} else {

			$this->readFlexformIntoConf($processedData['data']['tx_t3sbootstrap_flexform'], $flexconf); 

		}

		if ($processedData['data']['CType'] == 'table') {
			$processedData['tableClass'] = $flexconf['table_class'];
		}
		if ($processedData['data']['CType'] == 't3sbs_panel') {
			$processedData['panelState'] = $flexconf['panel_state'] ?: 'default';
		}

		$class = '';

		if ($processedData['data']['CType'] == 'gridelements_pi1') {
			$class = ' gridelement ge_'. $processedData['data']['tx_gridelements_backend_layout'];
		} else {
			$class = ' fsc-default '. $processedData['data']['CType'];
		}

		if ($processedData['data']['layout']) {
			$class .= ' layout-'.$processedData['data']['layout'];
		}

		$class .= $flexconf['frame'] ? ' '.$flexconf['frame']:'';
		$class .= $flexconf['hiddenXs'] ? ' hidden-xs':'';
		$class .= $flexconf['hiddenSm'] ? ' hidden-sm':'';
		$class .= $flexconf['hiddenMd'] ? ' hidden-md':'';
		$class .= $flexconf['hiddenLg'] ? ' hidden-lg':'';
		$class .= $flexconf['hiddenPrint'] ? ' hidden-print':'';
		
		$class .= $flexconf['rulerAfter'] ? ' rulerAfter':'';
		$class .= $flexconf['rulerBefore'] ? ' rulerBefore':'';
		$class .= $flexconf['indent'] ? ' indent':'';

		$processedData['class'] = trim($class);

		$style = '';
		$style = $flexconf['topMargin'] ? 'margin-top: '.$flexconf['topMargin'].'px;':'';
		$style .= $flexconf['bottomMargin'] ? ' margin-bottom: '.$flexconf['bottomMargin'].'px;':'';

		$processedData['style'] = trim($style);
		$colPos = (int)$processedData['data']['colPos'];
		$beLayout = $processedData['be_layout'];		
		$containerFluid = $processedData['container-fluid'];
		$container = FALSE; 
		$containerWrapping = TRUE;
		// set in constatnts: List of PIDs
		$preventFromContainerWrappingList = $processedData['preventFromContainerWrapping'];

		if (GeneralUtility::inList($preventFromContainerWrappingList, $GLOBALS['TSFE']->id) || ($preventFromContainerWrappingList == 'all')) {
			$containerWrapping = FALSE;	
		}

		// if jumbotron (3), footer (4) or slider (10 in BE-Layout:special slider)
		if ( $colPos === 3 || $colPos === 4 || $colPos === 10 ) {
			// do nothing - maybe later!
		} else {
			// if parentgrid
			if ($processedData['data']['parentgrid_uid']) {
				// do nothing - maybe later!
			} else {				

				# if full-width-layout
				if ($beLayout == 'pagets__t3sbootstrap_1' 
				|| $beLayout == 'pagets__t3sbootstrap_4' 
				|| $beLayout == 'pagets__t3sbootstrap_6' 
				|| $beLayout == 'pagets__t3sbootstrap_10') {
					if ($containerWrapping)
					$container = $containerFluid ? 'container-fluid' : 'container';	
				}

			}
		}

		$processedData['container'] = $flexconf['containerOverride'] ? $flexconf['containerOverride'] : $container;
		
		return $processedData;
	}


	/**
	 * Converts a given config in Flexform to a conf-Array
	 * @param	string		 Flexform data
	 * @param	array		 Array to write the data into, by reference
	 * @param	boolean		is set if called recursive. Don't call function with this parameter, it's used inside the function only
	 * @access	 public
	 *
	 */
	public function readFlexformIntoConf($flexData, &$conf, $recursive=FALSE) {
		if ($recursive === FALSE) {
			$flexData = GeneralUtility::xml2array($flexData, 'T3');
		}

		if (is_array($flexData)) {
			if (isset($flexData['data']['sDEF']['lDEF'])) {
				$flexData = $flexData['data']['sDEF']['lDEF'];
			}

			foreach ($flexData as $key => $value) {
				if (is_array($value['el']) && count($value['el']) > 0) {
					foreach ($value['el'] as $ekey => $element) {
						if (isset($element['vDEF'])) {
							$conf[$ekey] =  $element['vDEF'];
						} else {
							if(is_array($element)) {
								$this->readFlexformIntoConf($element, $conf[$key][key($element)][$ekey], TRUE);
							} else {
								$this->readFlexformIntoConf($element, $conf[$key][$ekey], TRUE);
							}
						}
					}
				} else {
					$this->readFlexformIntoConf($value['el'], $conf[$key], TRUE);
				}
				if ($value['vDEF']) {
					$conf[$key] = $value['vDEF'];
				}
			}
		}
	} 

}
