<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

// CSH - context sensitive help
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr(
'tt_content', 'EXT:t3sbootstrap/Resources/Private/Language/locallang_csh.xlf');

/***************
 * Include TypoScript
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Bootstrap Components');

/***************
 * Register Icons
 */
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
$icons = ['bootstrap, panel, thumbnailElement, carouselElement, fluidTemplate, imageGallery'];
foreach ($icons as $icon) {
	$iconRegistry->registerIcon(
		$icon,
		\TYPO3\CMS\Core\Imaging\IconProvider\BitmapIconProvider::class,
		['source' => 'EXT:t3sbootstrap/Resources/Public/Icons/Bootstrap/'.$icon.'.png']
	);	
}

/***************
 * Register PageTSConfig Files
*/
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
	't3sbootstrap',
	'Configuration/PageTSConfig/Registered/Flag.ts',
	'Set the default language label and flag to german');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
	't3sbootstrap',
	'Configuration/PageTSConfig/Registered/RTEaddTable.ts',
	'Add table buttons to the RTE');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
	't3sbootstrap',
	'Configuration/PageTSConfig/Registered/RTEenableRel.ts',
	'Enable a rel field in RTE link settings');

/***************
 * Include Backend Module
 */
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss')
 && \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_less')
 && TYPO3_MODE === 'BE' ) {
	\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
		'T3SBS.' . $_EXTKEY,
		'tools',
		'm1',
		'',
		[
			'Less' => 'index,create,reset,copy',
		],
		[
			'access' => 'admin',
			'icon'   => 'EXT:' . $_EXTKEY . '/ext_icon.gif',
			'labels'  => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_mod.xlf',
		]
	);
}
