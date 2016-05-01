<?php

namespace SGalinski\Lfeditor\Service;

/***************************************************************
 *  Copyright notice
 *
 *  (c) sgalinski Internet Services (http://www.sgalinski.de)
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

use SGalinski\Lfeditor\Exceptions\LFException;
use SGalinski\Lfeditor\Utility\SgLib;
use SGalinski\Lfeditor\Utility\Typo3Lib;

/**
 * FileOverrideService
 */
class FileOverrideService extends FileBaseXMLService {
	/**
	 * Object which represents original (overridden) language file.
	 *
	 * @var \SGalinski\Lfeditor\Service\FileService
	 */
	protected $originalFileObject;

	/**
	 * Initialises fileObject of override language file.
	 *
	 * @param FileService $originalFileObject
	 * @return void
	 */
	public function init(FileService $originalFileObject) {
		try {
			$typo3ExtRelativeFilePath = Typo3Lib::transTypo3File($originalFileObject->getAbsFile(), FALSE);
		} catch (\Exception $e) {
			$typo3ExtRelativeFilePath = '';
		}
		$overrideFileAbsolutePath = Typo3Lib::fixFilePath(
			PATH_site . '/' .
			$GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride'][$typo3ExtRelativeFilePath][0]
		);

		if (!is_file($overrideFileAbsolutePath)) {
			$extRelativeFilePath = SgLib::trimPath('EXT:', $typo3ExtRelativeFilePath);
			$extRelativeFilePath = substr($extRelativeFilePath, 0, strrpos($extRelativeFilePath, '.')) . '.xml';

			/** @var ConfigurationService $configurationService */
			$configurationService = $this->objectManager->get('SGalinski\Lfeditor\Service\ConfigurationService');
			$extConfig = $configurationService->getExtConfig();
			$overrideFileAbsolutePath = $extConfig['pathOverrideFiles']
				. $extRelativeFilePath;
		}

		$this->originalFileObject = $originalFileObject;
		parent::init(basename($overrideFileAbsolutePath), dirname($overrideFileAbsolutePath));
	}

	/**
	 * Calls the parent function and convert all values from utf-8 to the original charset
	 *
	 * @throws LFException raised if the parent read file method fails
	 * @return void
	 */
	public function readFile() {
		if (is_file($this->absFile)) {
			parent::readFile();
			if (!Typo3Lib::isTypo3BackendInUtf8Mode()) {
				$this->localLang = Typo3Lib::utf8($this->localLang, FALSE, array('default'));
			}
		}

		$this->originalFileObject->readFile();
		$this->mergeOriginalWidthOverrideLangData();
	}

	/**
	 * Merges Language data from original and override files, so all data can e presented to user.
	 *
	 * @return void
	 */
	protected function mergeOriginalWidthOverrideLangData() {
		foreach ($this->originalFileObject->getLocalLang() as $lang => $langData) {
			if (empty($langData)) {
				continue;
			}
			foreach ($langData as $costKey => $constValue) {
				if (isset($this->localLang[$lang][$costKey]) && $this->localLang[$lang][$costKey] !== $constValue) {
					continue;
				}
				$this->localLang[$lang][$costKey] = $constValue;
			}
		}

		foreach ($this->originalFileObject->getMeta() as $metaTag => $metaTagValue) {
			if ($metaTag === '@attributes') {
				foreach ($metaTagValue as $attributeKey => $attributeValue) {
					if (isset($this->meta[$metaTag][$attributeKey])
						&& $this->meta[$metaTag][$attributeKey] !== $attributeValue
					) {
						continue;
					}
					$this->meta[$metaTag][$attributeKey] = $attributeValue;
				}
			} else {
				if (isset($this->meta[$metaTag]) && $this->meta[$metaTag] !== $metaTagValue) {
					continue;
				}
				$this->meta[$metaTag] = $metaTagValue;
			}
		}
	}

	/**
	 * Writes language override files.
	 *
	 * @param array|null $editedLanguages
	 * @throws LFException raised if a file cant be written
	 * @throws \Exception
	 * @return void
	 */
	public function writeFile($editedLanguages = NULL) {
		$this->deleteDuplicates();
		if (!$this->langDataExists() && !is_file($this->absFile)) {
			return;
		}

		try {
			SgLib::createDir($this->absPath, PATH_site);
		} catch (\Exception $exception) {
			throw new LFException('failure.failure', 0, '(' . $exception->getMessage() . ')');
		}

		parent::writeFile();

		// Set only new values in GlobalConfiguration if something changed
		$typo3ExtRelativeFilePath = Typo3Lib::transTypo3File($this->originalFileObject->getAbsFile(), FALSE);
		$relativeOverrideFilePath = SgLib::trimPath(PATH_site, $this->absFile);
		$locallangXMLOverride = &$GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride'];
		if ($locallangXMLOverride[$typo3ExtRelativeFilePath][0] === $relativeOverrideFilePath) {
			return;
		}

		try {
			$addLine = '$GLOBALS[\'TYPO3_CONF_VARS\'][\'SYS\'][\'locallangXMLOverride\'][\''
				. $typo3ExtRelativeFilePath . '\'][0] = \'' . $relativeOverrideFilePath . '\';';
			Typo3Lib::writeLineToAdditionalConfiguration($addLine);
			$GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride'][$typo3ExtRelativeFilePath][0]
				= $relativeOverrideFilePath;
		} catch (\Exception $exception) {
			throw new LFException('failure.failure', 0, '(' . $exception->getMessage() . ')');
		}
	}

	/**
	 * Deletes duplicated language data (data that exist in both files - original file and override file),
	 * so that only changed data will be saved in override file.
	 *
	 * @return void
	 */
	public function deleteDuplicates() {
		foreach ($this->localLang as $language => $languageData) {
			if (!is_array($languageData)) {
				continue;
			}
			foreach ($languageData as $constKey => $constValue) {
				$localLangData = $this->originalFileObject->getLocalLangData($language);
				if (SgLib::strCmpIgnoreCR($constValue, $localLangData[$constKey])) {
					unset($this->localLang[$language][$constKey]);
				}
			}
		}

		foreach ($this->meta as $metaTag => $metaValue) {
			if (SgLib::strCmpIgnoreCR($metaValue, $this->originalFileObject->getMetaData($metaTag))) {
				unset($this->meta[$metaTag]);
			}
		}
	}

	/**
	 * Checks is there any lang data (constants in $localLang and meta data).
	 *
	 * @return bool Returns true if any constant or meta data exist.
	 */
	protected function langDataExists() {
		foreach ($this->meta as $metaTag => $metaValue) {
			if (isset($this->meta[$metaTag]) && $metaTag !== '@attributes') {
				return TRUE;
			}
		}

		foreach ($this->localLang as $language => $languageData) {
			if (!is_array($languageData)) {
				continue;
			}
			foreach ($languageData as $constKey => $constValue) {
				if (isset($languageData[$constKey])) {
					return TRUE;
				}
			}
		}
		return FALSE;
	}

	/**
	 * Writes generator meta tag.
	 *
	 * @return void
	 */
	protected function addGeneratorString() {
		if ($this->originalFileObject->getMetaData('generator') !== 'LFEditor') {
			$this->meta['generator'] = 'LFEditor';
		}
	}
}