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
 *
 * @package TYPO3
 * @subpackage T3S\T3sbootstrap;
 */
class BgImageSizeViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * @var \TYPO3\CMS\Core\Resource\FileRepository
	 * @inject
	 */
	protected $fileRepository;

    /**
     * @var \TYPO3\CMS\Extbase\Service\ImageService
     * @inject
     */
    protected $imageService;


	/**
	 * Find FileReference objects by relation to other records
	 *
	 * @param int $uid The UID of the related record (needs to be the localized uid, as translated IRRE elements relate to them)
	 * @param string $as The alias to use for the found files
	 * @param string $tableName Table name of the related record
	 * @param string $fieldName Field name of the related record
	 * @param array $data
	 *
	 * @return string The render template
	 */
	public function render($uid, $as = 'objects', $tableName = 'tt_content', $fieldName = 'assets', $data = []) {

		$filesFromRepository = $this->fileRepository->findByRelation($tableName, $fieldName, $uid);

		if ($filesFromRepository) {

			$fileFromRepository = $filesFromRepository[0];
			$image = $this->imageService->getImage($fileFromRepository->getOriginalFile()->getUid(), $fileFromRepository->getOriginalFile(), 1);
			$imageUri_orig = $this->imageService->getImageUri($image, false);
	
			$bgImages = [];
			$mediaQueries = [768,992,1200];
	
			foreach ($mediaQueries as $key=>$querie) {
		
				$processedImage = $this->imageService->applyProcessingInstructions($image, ['width' => $querie]);
				$bgImages[$querie] = $this->imageService->getImageUri($processedImage, false);
	
				if ($key === 0) {
					$imageUri_mobile = $bgImages[$querie];	
				}
			}
			$bgImages['orig'] = $imageUri_orig;
	
			$pageRenderer = GeneralUtility::makeInstance(PageRenderer::class);
			
			$pageRenderer->addInlineSetting('T3SBS',$data['uid'], json_encode($bgImages));
			
			$jsFooterFile = 'EXT:t3sbootstrap/Resources/Public/Scripts/bgImageSize.js';
			$jsFooterFile = $GLOBALS['TSFE']->tmpl->getFileName($jsFooterFile);
			$pageRenderer->addJsFooterFile($jsFooterFile);	

		} else {
			$imageUri_mobile = '';	
		}
		
		$this->templateVariableContainer->add($as, $imageUri_mobile);
		$content = $this->renderChildren();
		$this->templateVariableContainer->remove($as);

		return $content;
	}
}
