<?php
namespace VCA\VcaMillerntor\Domain\Repository;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2013 fux <sfuchs@projektkater.de>
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

/**
 *
 *
 * @package vca_millerntor
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 */
class KuenstlerRepository extends \TYPO3\CMS\Extbase\Persistence\Repository {

	protected $defaultOrderings = array(
       'name' => \TYPO3\CMS\Extbase\Persistence\QueryInterface::ORDER_ASCENDING
	);
	/**
	 * Returns all objects of this repository which belong to a ausstellung.
	 *
	 * @return QueryResultInterface|array
	 * @api
	 */
	public function findAllByAusstellung($ausstellung_uid) {
		$query = $this->createQuery();
		$category_uid = 1;
		if($GLOBALS['TSFE']->sys_language_uid != 0){
  			$query->getQuerySettings()->setRespectSysLanguage(FALSE);
  			$query->getQuerySettings()->setSysLanguageUid($GLOBALS['TSFE']->sys_language_uid);
  		}	
		if(intval($ausstellung_uid) > 0 ) {
  			$query->matching($query->equals('ausstellung.uid', $ausstellung_uid));
		}
		/*
		if(intval($category_uid) > 0 ) {
			$query->matching($query->equals('categories.uid', $category_uid));
		}
		*/
  		return $query->execute();
	}
}
?>