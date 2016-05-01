<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/***************
 * Extension configuration
 */
if ( $_EXTCONF ) {
	$_EXTCONF = unserialize($_EXTCONF);
} else {
	# default setting
	$_EXTCONF = array(
	   'rte_config' => '1',
	   'fontawesome' => '1',
	   'backendLayouts' => '1',
	   'expandedContent' => '0'
	);
}


# Temporary bugfix #68045 (only after the record has been saved)
$GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['formDataGroup']['inlineParentRecord'][\TYPO3\CMS\Backend\Form\FormDataProvider\DatabaseEditRow::class] = array();
$GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['formDataGroup']['inlineParentRecord'][\TYPO3\CMS\Backend\Form\FormDataProvider\InitializeProcessedTca::class] = array(
	'depends' => array(
		\TYPO3\CMS\Backend\Form\FormDataProvider\DatabaseEditRow::class,
	)
);
	
// Register for hook to show preview of tt_content element of CType="t3sbs_thumbnails & t3sbs_carousel" in page module
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['t3sbs_thumbnails'] = \T3SBS\T3sbootstrap\Hooks\PreviewRenderer::class;

/***************
 * Page TsConfig & Setup
 */
 # Default TSconfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/Default.ts">');

 # BackendLayouts
if (array_key_exists('backendLayouts', $_EXTCONF) && $_EXTCONF['backendLayouts'] === '1') {
	if (array_key_exists('expandedContent', $_EXTCONF) && $_EXTCONF['expandedContent'] === '1') {
		# with expanded content on top and bottom
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/BE_Layouts/Expanded.ts">');
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.expandedContent = 1');
	} else {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/BE_Layouts/Default.ts">');
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.expandedContent = 0');
	}
}

 # Optional RTE
if (array_key_exists('rte_config', $_EXTCONF) && $_EXTCONF['rte_config'] === '1') {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/RTE.ts">');
}

 # Optional Font Awesome
if (array_key_exists('fontawesome', $_EXTCONF) && $_EXTCONF['fontawesome'] === '1') {
	 # Contstant
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.fontawesome = 1');
} else {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.fontawesome = 0');
}

 # if indexed_search is loaded
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('indexed_search') ) {
	 # Setup
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript($_EXTKEY,
		'setup','<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/indexed_search/Setup.ts">',
		defaultContentRendering
	);
}

 # if news is loaded
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('news') ) {
	 # TsConfig
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/Extensions/news/TsConfig.ts">');
	 # Setup
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript($_EXTKEY,
	    'setup','<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/news/Setup.ts">',
	    defaultContentRendering
	);
}

 # if dyncss & dyncss_less is loaded
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss')
 && \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_less')) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.dyncss = 1');
} else {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.dyncss = 0');
}

/***************
 * Add RootLine Fields: keywords & description
 */
$rootlinefields = &$GLOBALS["TYPO3_CONF_VARS"]["FE"]["addRootLineFields"];
if($rootlinefields != '') $rootlinefields .= ' , ';
$rootlinefields .= 'keywords,description';
