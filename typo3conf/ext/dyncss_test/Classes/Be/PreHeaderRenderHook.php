<?php

class Tx_DyncssTest_Be_PreHeaderRenderHook {
	function main($arg) {
		/** @var $pagerenderer t3lib_PageRenderer */
		$pagerenderer = $arg['pageRenderer'];
		$overrides = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('tx_Dyncss_Configuration_BeRegistry');

		$options = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['dyncss_test']);
		$overrides->setOverride('color', $options['baseColor']);

		if(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_less')) {
			$pagerenderer->addCssFile(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('dyncss_test') . 'Resources/Public/Stylesheets/test_be.less');
		}
		if(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_scss')) {
			$pagerenderer->addCssFile(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('dyncss_test') . 'Resources/Public/Stylesheets/test_be.scss');
		}
		if(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_phpsass')) {
			$pagerenderer->addCssFile(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('dyncss_test') . 'Resources/Public/Stylesheets/test_be.scss');
		}
		if(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_turbine')) {
			$pagerenderer->addCssFile(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('dyncss_test') . 'Resources/Public/Stylesheets/test_be.turbine');
		}

	}
}
