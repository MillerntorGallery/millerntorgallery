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

use TYPO3\CMS\Core\Resource\FileReference;

use TYPO3\CMS\Core\Resource\FileInterface;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Service\TypoScriptService;
use TYPO3\CMS\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;

/**
 * A view helper for creating a link for an image popup.
 *
 * = Example =
 *
 * <code title="enlarge image on click">
 * <ce:link.clickEnlarge image="{image}" configuration="{settings.images.popup}"><img src=""></ce:link.clickEnlarge>
 * </code>
 *
 * <output>
 * <a href="url" onclick="javascript" target="thePicture"><img src=""></a>
 * </output>
 */
class ClickEnlargeViewHelper extends AbstractViewHelper
{
    /**
     * Initialize ViewHelper arguments
     *
     * @return void
     */
    public function initializeArguments()
    {
        $this->registerArgument('image', '', 'The original image file', true);
        $this->registerArgument(
            'configuration',
            'mixed',
            'String, \TYPO3\CMS\Core\Resource\File or \TYPO3\CMS\Core\Resource\FileReference with link configuration',
            true
        );
        $this->registerArgument(
            'uid',
            'int',
            'Integer, uid',
            true
        );
        $this->registerArgument(
            'lightboxGroup',
            'int',
            'Integer,enable lightbox group',
            false
        );
    }

    /**
     * Render the view helper
     *
     * @return string
     */
    public function render()
    {	    
        return self::renderStatic(
            $this->arguments,
            $this->buildRenderChildrenClosure(),
            $this->renderingContext
        );
    }

    /**
     * @param array $arguments
     * @param \Closure $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     * @return string
     */
    public static function renderStatic(array $arguments, \Closure $renderChildrenClosure, RenderingContextInterface $renderingContext)
    {

        $image = $arguments['image'];

        if ($image instanceof FileInterface) {
            self::getContentObjectRenderer()->setCurrentFile($image);

        } else {
	        // works with images from news media
			$image = \TYPO3\CMS\Core\Resource\ResourceFactory::getInstance()->getFileReferenceObject($image->getUid());	        
	        if ($image instanceof FileInterface) {
	            self::getContentObjectRenderer()->setCurrentFile($image);
	        }
        }

        $configuration = self::getTypoScriptService()->convertPlainArrayToTypoScriptArray($arguments['configuration']);

		if ($arguments['lightboxGroup']){ 
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['97'] = 'TEXT';
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['97.']['value'] = 'data-'.$arguments['configuration']['dataAttribute'].'="lightboxGroup-'.$arguments['uid'].'"';
		} else {			
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['97'] = 'TEXT';
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['97.']['value'] = 'data-'.$arguments['configuration']['dataAttribute'].'="image-'.$image->getUid().'"';
		}

		if ($image instanceof FileReference) {
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['98'] = 'TEXT';
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['98.']['value'] = 'data-title="'.$image->getTitle().'"';
		} else {
			$imageProperties = $image->getProperties();
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['98'] = 'TEXT';
			$configuration['linkParams.']['ATagParams.']['stdWrap.']['cObject.']['98.']['value'] = 'data-title="'.$imageProperties['title'].'"';
		}
		
        $content = $renderChildrenClosure();
        $configuration['enable'] = true;

        return self::getContentObjectRenderer()->imageLinkWrap($content, $image, $configuration);
    }

    /**
     * @return ContentObjectRenderer
     */
    protected static function getContentObjectRenderer()
    {
        return $GLOBALS['TSFE']->cObj;
    }

    /**
     * @return TypoScriptService
     */
    protected static function getTypoScriptService()
    {
        static $typoScriptService;
        if ($typoScriptService === null) {
            $typoScriptService = GeneralUtility::makeInstance(TypoScriptService::class);
        }
        return $typoScriptService;
    }    
    
}