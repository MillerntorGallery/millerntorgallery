<?php

if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// new cache table
if (!is_array($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['lfeditor_select_options_cache'])) {
	$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['lfeditor_select_options_cache'] = array();
}

?>