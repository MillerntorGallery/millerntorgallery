<?php
/**
 * *************************************************************
 * Copyright notice
 *
 * (c) 2005-2008 Mario Matzulla
 * (c) 2005-2008 Christian Technology Ministries International Inc.
 * All rights reserved
 *
 * This file is part of the Web-Empowered Church (WEC)
 * (http://WebEmpoweredChurch.org) ministry of Christian Technology Ministries
 * International (http://CTMIinc.org). The WEC is developing TYPO3-based
 * (http://typo3.org) free software for churches around the world. Our desire
 * is to use the Internet to help offer new life through Jesus Christ. Please
 * see http://WebEmpoweredChurch.org/Jesus.
 *
 * You can redistribute this file and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation;
 * either version 2 of the License, or (at your option) any later version.
 *
 * The GNU General Public License can be found at
 * http://www.gnu.org/copyleft/gpl.html.
 *
 * This file is distributed in the hope that it will be useful for ministry,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * This copyright notice MUST APPEAR in all copies of the file!
 * *************************************************************
 */
class tx_cal_calendar_scheduler extends \TYPO3\CMS\Scheduler\Task\AbstractTask {
	var $uid;
	
	/**
	 * PHP4 wrapper for constructor,
	 * have to be here even though the constructor is not defined in the derived class,
	 * else the constructor of the parent class will not be called in PHP4
	 */
	function tx_cal_calendar_scheduler() {
		$this->__construct ();
	}
	public function execute() {
		$success = true;
		$service = new tx_cal_icalendar_service();
		
		$service->update ($this->uid);
		
		return $success;
	}
	function getUID() {
		return $this->uid;
	}
	function setUID($uid) {
		$this->uid = $uid;
	}
}

if (defined ('TYPO3_MODE') && $TYPO3_CONF_VARS [TYPO3_MODE] ['XCLASS'] ['ext/cal/cron/class.tx_cal_calendar_scheduler.php']) {
	include_once ($TYPO3_CONF_VARS [TYPO3_MODE] ['XCLASS'] ['ext/cal/cron/class.tx_cal_calendar_scheduler.php']);
}

?>