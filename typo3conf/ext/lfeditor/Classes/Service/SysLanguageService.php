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

use TYPO3\CMS\Core\Database\DatabaseConnection;
use TYPO3\CMS\Core\Localization\Locales;

/**
 * Class SysLanguageService works with data from sys_language table.
 */
class SysLanguageService extends AbstractService {
	/** @var  array */
	protected $sysLanguageList;

	/** @var  array */
	protected $isoReverseMapping;

	/**
	 * Selects data (uid, title, flag) from sys_language table by list of uid-s ($uids).
	 * If no $uids specified, selects all records.
	 *
	 * @param string $uids Comma separated list of uid-s.
	 * @return array|bool
	 */
	public function selectFromSysLanguageByUids($uids = NULL) {
		/** @var DatabaseConnection $typo3Db */
		$typo3Db = &$GLOBALS['TYPO3_DB'];
		$res = $typo3Db->exec_SELECTquery(
			'uid, title, flag',
			'sys_language',
			($uids !== NULL ? 'uid IN (' . $typo3Db->cleanIntList($uids) . ')' : ''),
			'flag ASC'
		);
		$sysLanguageList = array();
		while ($row = $typo3Db->sql_fetch_assoc($res)) {
			$sysLanguageList[$row['flag']]['uid'] = $row['uid'];
			$sysLanguageList[$row['flag']]['title'] = $row['title'];
		}
		$typo3Db->sql_free_result($res);
		return $sysLanguageList;
	}

	/**
	 * Initialises array of system languages from database.
	 */
	public function initSysLanguageList() {
		if (!isset($this->sysLanguageList)) {
			$this->sysLanguageList = $this->selectFromSysLanguageByUids();
		}
	}

	/**
	 * Returns system language id for given language acronym ($flag).
	 * If that language is not registered in system, function returns NULL.
	 *
	 * @param string $flag language acronym (iso language code, e.g.: 'de', 'da', 'fi'...)
	 * @return int|NULL
	 */
	public function getSysLanguageIdByFlag($flag) {
		$this->initSysLanguageList();
		$isoReverseMapping = $this->getIsoReverseMapping();
		$mappedFlag = (string) $isoReverseMapping[$flag];
		if ($mappedFlag !== '') {
			$flag = $mappedFlag;
		}

		if (!empty($this->sysLanguageList[$flag]['uid'])) {
			return (int) $this->sysLanguageList[$flag]['uid'];
		}
		return NULL;
	}

	/**
	 * Returns the mapping between ISO language codes and TYPO3 (old) codes.
	 *
	 * @return array
	 */
	public function getIsoReverseMapping() {
		if (!empty($this->isoReverseMapping)) {
			return $this->isoReverseMapping;
		}
		/** @var $locales Locales */
		$locales = $this->objectManager->get('TYPO3\CMS\Core\Localization\Locales');
		$isoMapping = $locales->getIsoMapping();
		if (empty($isoMapping)) {
			$locales->initialize();
			$isoMapping = $locales->getIsoMapping();
		}
		$this->isoReverseMapping = array_flip($isoMapping);
		return $this->isoReverseMapping;
	}
}