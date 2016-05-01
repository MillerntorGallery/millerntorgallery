<?php
namespace T3SBS\T3sbootstrap\ViewHelpers;

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
 
use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Core\Utility\GeneralUtility;


/**
 * ViewHelper to include inlineJs
 *
 * @package TYPO3
 * @subpackage T3S\T3sbootstrap;
 */
class InlineJsViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * include inlineJs
	 *
	 * @param string $inlineJS
	 * @param int $currentCeUid
	 * @return void
	*/
	public function render( $inlineJS, $currentRow ) {

		$block = 'jQuery(function(){'.$inlineJS.'});';
		$name='t3sbootstrap-thumbnailrow-'.$currentRow;

		$pageRenderer = GeneralUtility::makeInstance(PageRenderer::class);
		$pageRenderer->addJsFooterInlineCode($name,$block);

	}
}
