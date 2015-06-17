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

use DOMDocument;
use Exception;
use SGalinski\Lfeditor\Exceptions\LFException;
use SGalinski\Lfeditor\Utility\CdataSupportingSimpleXMLElement;
use SGalinski\Lfeditor\Utility\SgLib;
use SGalinski\Lfeditor\Utility\Typo3Lib;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * base workspace class (xml)
 */
class FileBaseXMLService extends FileBaseService {
	/**
	 * extended init
	 *
	 * @param string $file name of the file (can be a path, if you need this (no check))
	 * @param string $path path to the file
	 * @return void
	 */
	public function init($file, $path) {
		$this->setVar(array('fileType' => 'xml'));
		parent::init($file, $path);
	}

	/**
	 * calls the parent function and convert all values from utf-8 to the original charset
	 *
	 * @throws LFException raised if the parent read file method fails
	 * @return void
	 */
	public function readFile() {
		try {
			parent::readFile();
		} catch (LFException $e) {
			throw $e;
		}

		// convert all language values from utf-8 to the original charset
		if (!Typo3Lib::isTypo3BackendInUtf8Mode()) {
			$this->localLang = Typo3Lib::utf8($this->localLang, FALSE, array('default'));
		}
	}

	/**
	 * reads a language file
	 *
	 * @throws LFException raised if the file does not contain a valid llxml or xml is not valid
	 * @param string $file language file
	 * @param string $langKey language shortcut
	 * @return array language content
	 */
	protected function readLLFile($file, $langKey) {
		if (!is_file($file)) {
			throw new LFException('failure.select.noLangfile');
		}

		// read xml into array
		$xmlContent = GeneralUtility::xml2array(file_get_contents($file));

		// check data
		if (!is_array($xmlContent['data'])) {
			throw new LFException('failure.search.noFileContent', 0, '(' . $file . ')');
		}

		// set header data
		if ($langKey == 'default') {
			$this->meta = $xmlContent['meta'];
		}

		return $xmlContent['data'];
	}

	/**
	 * checks the localLang array to find localized version of the language
	 * (checks l10n directory too)
	 *
	 * @param string $content language content (only one language)
	 * @param string $langKey language shortcut
	 * @return string localized file (absolute)
	 */
	protected function getLocalizedFile($content, $langKey) {
		if ($this->session->getDataByKey('editingMode') === 'l10n') {
			$file = GeneralUtility::llXmlAutoFileName($this->absFile, $langKey);
			if (is_file(PATH_site . $file)) {
				return Typo3Lib::fixFilePath(PATH_site . $file);
			}
		}

		try {
			$file = Typo3Lib::transTypo3File($content, TRUE);
		} catch (Exception $e) {
			if (!$file = GeneralUtility::llXmlAutoFileName($this->absFile, $langKey, TRUE)) {
				return $content;
			}
			$file = PATH_site . $file;
			if (!is_file($file)) {
				return $content;
			}
		}

		return Typo3Lib::fixFilePath($file);
	}

	/**
	 * checks a filename if its a localized file reference
	 *
	 * @param string $filename filename
	 * @param string $langKey language shortcut
	 * @return boolean true(localized) or false
	 */
	public function checkLocalizedFile($filename, $langKey) {
		if (!preg_match('/^(' . $langKey . ')\..*\.xml$/', $filename)) {
			return FALSE;
		}

		return TRUE;
	}

	/**
	 * get the name of a localized file
	 *
	 * @param string $langKey language shortcut
	 * @return string localized file (only filename)
	 */
	public function nameLocalizedFile($langKey) {
		return $langKey . '.' . basename($this->relFile);
	}

	/**
	 * generates the xml header
	 *
	 * @return string xml header
	 */
	private function getXMLHeader() {
		return '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>' . "\n";
	}

	/**
	 * Converts php array to xml string with support for CDATA tags.
	 *
	 * @param array $phpArray
	 * @param CdataSupportingSimpleXMLElement $xmlElement
	 * @param array $parentTagMap
	 * @param string $parentTagName
	 * @return void
	 */
	protected function arrayToXml(
		array $phpArray, CdataSupportingSimpleXMLElement $xmlElement, array $parentTagMap = array(), $parentTagName = NULL
	) {
		foreach ($phpArray as $key => $value) {
			if (strcasecmp($key, '@attributes') === 0) {
				continue;
			}
			$tagName = $key;
			$indexAttributeValue = NULL;
			if (count($parentTagMap) !== 0 && !empty($parentTagMap[$parentTagName])) {
				$tagName = $parentTagMap[$parentTagName];
				$indexAttributeValue = $key;
			}
			if (is_array($value)) {
				if (is_numeric($tagName)) {
					$tagName = 'item' . $tagName;
				}
				$subNode = $xmlElement->addChild($tagName);
				if ($indexAttributeValue !== NULL) {
					$subNode->addAttribute('index', $indexAttributeValue);
				}
				$subNode->addAttribute('type', 'array');
				$this->arrayToXml($value, $subNode, $parentTagMap, $tagName);
			} else {
				if (SgLib::checkForCdataInString($value)) {
					$simpleSubNode = $xmlElement->addChildCData($tagName, $value);
				} else {
					$simpleSubNode = $xmlElement->addChild($tagName, htmlspecialchars($value));
				}
				if ($indexAttributeValue !== NULL) {
					$simpleSubNode->addAttribute('index', $indexAttributeValue);
				}
			}
		}
	}

	/**
	 * Converts php array to formatted xml string with support for CDATA tags.
	 *
	 * @param array $phpArray php structure with data
	 * @param string $firstTag name of first tag
	 * @return string xml content
	 */
	protected function array2xml(array $phpArray, $firstTag) {
		if (count($phpArray) === 0) {
			return NULL;
		}

		/** @var CdataSupportingSimpleXMLElement $xmlElement */
		$xmlElement = new CdataSupportingSimpleXMLElement(
			$this->getXMLHeader() . '<' . $firstTag . '></' . $firstTag . '>'
		);
		$xmlElement->addAttribute('type', 'array');

		$parentTagMap = array(
			'data' => 'languageKey',
			'languageKey' => 'label',
		);

		$this->arrayToXml($phpArray, $xmlElement, $parentTagMap);
		$formattedXml = $this->formatXml($xmlElement);
		return $formattedXml;
	}

	/**
	 * prepares the content of a language file
	 *
	 * @param array $localLang content of the given language
	 * @param string $lang shortcut
	 * @return array new xml array
	 */
	private function getLangContent($localLang, $lang) {
		$content['data'][$lang] = '';
		if (!is_array($localLang) || !count($localLang)) {
			return $content;
		}

		ksort($localLang);
		foreach ($localLang as $const => $value) {
			$content['data'][$lang][$const] =
			$value = str_replace("\r", '', $value);
		}

		return $content;
	}

	/**
	 * prepares the meta array for nicer saving
	 *
	 * @return array meta content
	 */
	private function prepareMeta() {
		if (is_array($this->meta) && count($this->meta)) {
			foreach ($this->meta as $label => $value) {
				$this->meta[$label] = str_replace("\r", '', $value);
			}
		}
		$this->addGeneratorString();

		return $this->meta;
	}

	/**
	 * prepares the final content
	 *
	 * @return array language files as key and content as value
	 */
	protected function prepareFileContents() {
		// convert all language values to utf-8
		if (!Typo3Lib::isTypo3BackendInUtf8Mode()) {
			$this->localLang = Typo3Lib::utf8($this->localLang, TRUE, array('default'));
		}

		// prepare Content
		$mainFileContent = array('meta' => $this->prepareMeta());
		$languages = SgLib::getSystemLanguages();
		$languageFiles = array();
		foreach ($languages as $lang) {
			// get content of localized and main file
			if ($this->checkLocalizedFile(basename($this->originLang[$lang]), $lang)) {
				if (is_array($this->localLang[$lang]) && count($this->localLang[$lang])) {
					$languageFiles[$this->originLang[$lang]] .=
						$this->array2xml(
							$this->getLangContent($this->localLang[$lang], $lang),
							'T3locallangExt'
						);

					try {
						$mainFileContent['data'][$lang] =
							Typo3Lib::transTypo3File($this->originLang[$lang], FALSE);
					} catch (Exception $e) {
						if (!Typo3Lib::checkFileLocation($this->originLang[$lang]) == 'l10n') {
							$mainFileContent['data'][$lang] = $this->originLang[$lang];
						}
					}
				} else {
					$mainFileContent['data'][$lang] = '';
				}

			} else {
				$mainFileContent = array_merge_recursive(
					$mainFileContent,
					$this->getLangContent($this->localLang[$lang], $lang)
				);
			}
		}

		// only a localized file?
		if ($this->checkLocalizedFile(basename($this->absFile), implode('|', SgLib::getSystemLanguages()))) {
			return $languageFiles;
		}

		// prepare Content for the main file
		$languageFiles[$this->absFile] = $this->array2xml($mainFileContent, 'T3locallang');

		return $languageFiles;
	}

	/**
	 * Formats xml and returns as a string.
	 *
	 * @param \SimpleXMLElement $xmlElement
	 * @return string
	 */
	private function formatXml(\SimpleXMLElement $xmlElement) {
		$dom = new DOMDocument('1.0');
		$dom->preserveWhiteSpace = FALSE;
		$dom->formatOutput = TRUE;
		$dom->loadXML($xmlElement->asXML());
		$formattedXml = $dom->saveXML();
		return $formattedXml;
	}
}

?>