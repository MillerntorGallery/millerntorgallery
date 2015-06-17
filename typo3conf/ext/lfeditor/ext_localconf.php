<?php

if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// new cache table
if (!is_array($GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['lfeditor_select_options_cache'])) {
	$GLOBALS['TYPO3_CONF_VARS']['SYS']['caching']['cacheConfigurations']['lfeditor_select_options_cache'] = array();
}

// Xclasses
// Remove this XClass if the bug https://forge.typo3.org/issues/65513 was fixed.
$GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects']['TYPO3\CMS\Core\Localization\LocalizationFactory'] =
	array('className' => 'SGalinski\Lfeditor\Xclass\LocalizationFactory');

?>