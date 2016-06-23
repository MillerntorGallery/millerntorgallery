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

		$frontendController = self::getFrontendController();

		$pageId = $frontendController->id;

		$flexconf = [];

		$flexformService = GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Service\\FlexFormService');
		$flexconf = $flexformService->convertFlexFormContentToArray($processedData['data']['tx_t3sbootstrap_flexform']);

		if ($processedData['data']['CType'] == 'gridelements_pi1') {
			$class = 'gridelement ge_'. $processedData['data']['tx_gridelements_backend_layout'];

			// gridelements w/o frame
			if ( $processedData['data']['tx_gridelements_backend_layout'] == 'background_wrapper'
			  || $processedData['data']['tx_gridelements_backend_layout'] == 'parallax_wrapper') 
			{
			  	$flexconf['frame'] = NULL;
			}
		} else {			
			$class = 'fsc-default '. $processedData['data']['CType'];

			if ($processedData['data']['CType'] == 'table') 
			{
				$processedData['tableClass'] = $flexconf['table_class'];
			}
	
			if ($processedData['data']['CType'] == 't3sbs_panel') 
			{
				$processedData['panelState'] = $flexconf['panel_state'] ?: 'default';
			}
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

		if ($processedData['data']['layout']) {
			$pagesTSconfig = $frontendController->pagesTSconfig;			
			if (isset($pagesTSconfig['TCEFORM.']['tt_content.']['layout.']['classes.'])) {
				$layoutLabels = $pagesTSconfig['TCEFORM.']['tt_content.']['layout.']['classes.'];
				$class .= ' '.strtolower($layoutLabels[(int)$processedData['data']['layout']]);
			} elseif (isset($pagesTSconfig['TCEFORM.']['tt_content.']['layout.']['altLabels.'])) {
				$layoutLabels = $pagesTSconfig['TCEFORM.']['tt_content.']['layout.']['altLabels.'];
				$class .= ' '.str_replace(' ', '-', strtolower($layoutLabels[(int)$processedData['data']['layout']]));
			} else {
				$class .= ' layout-'.(int)$processedData['data']['layout'];
			}
		}

		if ($processedData['data']['tx_t3sbootstrap_animateCss'] && $contentObjectConfiguration['settings.']['animateCss']) {
			$class .= ' animated invisible '.$processedData['data']['tx_t3sbootstrap_animateCss'];
		}

		$processedData['class'] = trim($class);

		$style = $flexconf['topMargin'] ? 'margin-top: '.$flexconf['topMargin'].'px;':'';
		$style .= $flexconf['bottomMargin'] ? ' margin-bottom: '.$flexconf['bottomMargin'].'px;':'';

		if ($processedData['data']['tx_t3sbootstrap_animateCssDuration'] && $contentObjectConfiguration['settings.']['animateCss']) {
			$style .= ' animation-duration: '.$processedData['data']['tx_t3sbootstrap_animateCssDuration'].'s;';
		}

		$processedData['style'] = trim($style);

		$colPos = (int)$processedData['data']['colPos'];
		$beLayout = $processedData['be_layout'];		
		$containerFluid = $processedData['container-fluid'];
		$container = FALSE; 
		$containerWrapping = TRUE;

		if (GeneralUtility::inList($processedData['preventFromContainerWrapping'], $pageId) || ($processedData['preventFromContainerWrapping'] == 'all')) {
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
				 || $beLayout == 'pagets__t3sbootstrap_10') 
				{
					if ($containerWrapping)
					$container = $containerFluid ? 'container-fluid' : 'container';	
				}

			}
		}
		
		$processedData['container'] = $flexconf['containerOverride'] ? $flexconf['containerOverride'] : $container;
		// no classes and container for shortcut references
		if ($pageId !== (int)$processedData['data']['pid']) {
			$processedData['class'] = FALSE;
			$processedData['container'] = FALSE;
		}
				
		return $processedData;
	}


    /**
     * Returns the frontend controller
     *
     * @return TypoScriptFrontendController
     */
    protected function getFrontendController()
    {
        return $GLOBALS['TSFE'];
    }


}
