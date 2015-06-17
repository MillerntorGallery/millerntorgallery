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
use TYPO3\CMS\Core\Localization\Locales;
use TYPO3\CMS\Core\Utility\ArrayUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * base workspace class
 */
abstract class FileBaseService extends FileService {
	/**
	 * @param string $content
	 * @param string $lang
	 * @return mixed
	 */
	abstract protected function getLocalizedFile($content, $lang);

	/**
	 * @param string $filename
	 * @param string $langKey
	 * @return mixed
	 */
	abstract public function checkLocalizedFile($filename, $langKey);

	/**
	 * @param string $langKey
	 * @return mixed
	 */
	abstract public function nameLocalizedFile($langKey);

	/**
	 * @param string $file
	 * @param string $langKey
	 * @return mixed
	 */
	abstract protected function readLLFile($file, $langKey);

	/**
	 * extended init
	 *
	 * @throws LFException
	 * @param string $file name of the file (can be a path, if you need this (no check))
	 * @param string $path path to the file
	 * @return void
	 */
	public function init($file, $path) {
		if (class_exists('TYPO3\CMS\Core\Localization\Locales')) {
			/** @var $locales Locales */
			$locales = GeneralUtility::makeInstance('TYPO3\CMS\Core\Localization\Locales');
			$availableLanguages = implode('|', $locales->getLocales());
		} else {
			$availableLanguages = TYPO3_languages;
		}

		// localization files should not be edited
		if ($this->checkLocalizedFile(basename($file), $availableLanguages)) {
			throw new LFException('failure.langfile.notSupported');
		}

		$this->setWorkspace('base');
		parent::init($file, $path);
	}

	/**
	 * reads the absolute language file with all localized sub files
	 *
	 * @throws LFException
	 * @return void
	 */
	public function readFile() {
		// read absolute file
		$localLang = $this->readLLFile($this->absFile, 'default');
		// loop all languages
		$languages = SgLib::getSystemLanguages();
		$originLang = array();
		foreach ($languages as $lang) {
			$originLang[$lang] = $this->absFile;
			if ((is_array($localLang[$lang]) && count($localLang[$lang])) || $lang === 'default') {
				if (is_array($localLang[$lang]) && count($localLang[$lang])) {
					ksort($localLang[$lang]);
				}
				continue;
			}

			// get localized file
			$lFile = $this->getLocalizedFile($localLang[$lang], $lang);
			if ($this->checkLocalizedFile(basename($lFile), $lang)) {
				$originLang[$lang] = $lFile;
				$localLang[$lang] = array();

				if (!is_file($lFile)) {
					continue;
				}

				// read the content
				try {
					$llang = $this->readLLFile($lFile, $lang);
				} catch (LFException $e) {
					throw $e;
				}

				// merge arrays and save origin of current language
				ArrayUtility::mergeRecursiveWithOverrule($localLang, $llang);
			}
		}

		// check
		if (!is_array($localLang)) {
			throw new LFException('failure.search.noFileContent');
		}

		// copy all to object variables, if everything was ok
		$this->localLang = $localLang;
		$this->originLang = $originLang;
	}
}

?>