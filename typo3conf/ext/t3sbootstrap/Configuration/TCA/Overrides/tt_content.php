<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

$frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';
$fscLanguageFilePrefix = 'LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:';  
$languageFilePrefix = 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:';  
$dbFilePrefix = 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_db.xlf:';  

/***************
 * Add new CTypes
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'BS Panel',
		't3sbs_panel',
		'content-textpic'
	],
	'textmedia',
	'after'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'BS Thumbnails (in thumbnail container)',
		't3sbs_thumbnails',
		'content-textpic'
	],
	't3sbs_panel',
	'after'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'BS Carousel (in carousel container)',
		't3sbs_carousel',
		'content-textpic'
	],
	't3sbs_thumbnails',
	'after'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Fluidtemplate',
		't3sbs_fluidtemplate',
		'content-textpic'
	],
	't3sbs_carousel',
	'after'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Bootstrap Image Gallery',
		't3sbs_gallery',
		'content-textpic'
	],
	't3sbs_fluidtemplate',
	'after'
);

/***************
 * New fields in table:tt_content
 */
$tempContentColumns = array (
	'tx_t3sbootstrap_imagestyle' => array (
		'exclude' => 0,
		'label' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_image_style',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('Default', '0'),
				array('Rounded', 'img-rounded'),
				array('Circle', 'img-circle'),
				array('Thumbnail', 'img-thumbnail'),
			),
			'renderType' => 'selectSingle'
		)
	),
	'tx_t3sbootstrap_content_slide' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_content_slide',
		'config' => array(
			'type' => 'check',
			'default' => '0'
		)
	),
	'tx_t3sbootstrap_fontawesome_icon' => array(
		'label'   => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_db.xlf:pages.tx_t3sbootstrap_fontawesome_icon',
		'config' => array(
			'type' => 'input',
			'size' => '20',
		)
	),	
	'tx_t3sbootstrap_flexform' => array(
		'l10n_display' => 'hideDiff',
		'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:pi_flexform',
		'config' => array(
			'type' => 'flex',
			'ds_pointerField' => 'list_type,CType',
			'ds' => array(
				'default' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Bootstrap.xml',
				'*,t3sbs_panel' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Panel.xml',
				'*,table' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Table.xml',
			)
		)
	),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content',$tempContentColumns);
unset($tempContentColumns);

/***************
 * Header Layout sorting
 */
$GLOBALS['TCA']['tt_content']['columns']['header_layout']['config']['items'] = array (
	array($frontendLanguageFilePrefix . 'LGL.default_value', '0'),
	array($languageFilePrefix .'tt_content.header_layout.ph1', '1'),
	array($languageFilePrefix .'tt_content.header_layout.ph2', '6'),
	array($languageFilePrefix .'tt_content.header_layout.2', '2'),
	array($languageFilePrefix .'tt_content.header_layout.3', '3'),
	array($languageFilePrefix .'tt_content.header_layout.4', '4'),
	array($languageFilePrefix .'tt_content.header_layout.5', '5'),
	array($languageFilePrefix .'tt_content.header_layout.6', '7'),
	array($frontendLanguageFilePrefix . 'header_layout.I.6', '100')
);

/***************
 * Header (add flexform)
 */
$GLOBALS['TCA']['tt_content']['types']['header']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Text & Media (add flexform)
 */
$GLOBALS['TCA']['tt_content']['types']['textmedia']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Panels
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_panel'] = [
	'showitem' => '
			--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.header;header, rowDescription,
			bodytext;' . $frontendLanguageFilePrefix . 'bodytext_formlabel,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.appearance,
			layout;' . $frontendLanguageFilePrefix . 'layout_formlabel,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.appearanceLinks;appearanceLinks,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
			hidden;' . $frontendLanguageFilePrefix . 'field.default.hidden,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.extended
	',
	'columnsOverrides' => [
		'bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];
// Add category tab when categories column exits
if (!empty($GLOBALS['TCA']['tt_content']['columns']['categories'])) {
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_panel']['showitem'] .=
	',--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,
			categories';
}
// Add flexform
$GLOBALS['TCA']['tt_content']['types']['t3sbs_panel']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Thumbnails
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_thumbnails'] = [
	'showitem' => '
			--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.header;header,rowDescription,
			bodytext;' . $frontendLanguageFilePrefix . 'bodytext_formlabel,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.media,assets,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.imagelinks;imagelinks,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.appearance,
			layout;' . $frontendLanguageFilePrefix . 'layout_formlabel,
			--palette--;' . $languageFilePrefix . 'tt_content.palette.mediaAdjustments;mediaAdjustments,
			--palette--;' . $languageFilePrefix . 'tt_content.palette.gallerySettings;gallerySettings,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.appearanceLinks;appearanceLinks,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
			hidden;' . $frontendLanguageFilePrefix . 'field.default.hidden,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.extended,tx_gridelements_container,tx_gridelements_columns
	',
	'columnsOverrides' => [
		'bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]'],	
		'assets' => [
			'config' => [
				'maxitems' => 1
			]
		],
		'imageorient' => [
			'config' => [
				'items' => [
					'9' => '__UNSET',
					'10' => '__UNSET'
				]
			]
		],	
		'imageborder' => '__UNSET',
		'imagecols' => '__UNSET',
		'tx_t3sbootstrap_content_slide' => '__UNSET'
	]	
];
// Add category tab when categories column exits
if (!empty($GLOBALS['TCA']['tt_content']['columns']['categories'])) {
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_thumbnails']['showitem'] .=
	',--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,
	categories';
}
// Add flexform
$GLOBALS['TCA']['tt_content']['types']['t3sbs_thumbnails']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Bullets
 */
// add extra column
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][2] = array ('BS Inline list', 2);
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][3] = array ('BS Unstyled list',3);
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][4] = array ('BS Listengruppen',4);
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][5] = array ($fscLanguageFilePrefix . 'tt_content.bullets_type.2',5);
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][6] = array ('BS Definition list (horizontal)',6);

// Add flexform
$GLOBALS['TCA']['tt_content']['types']['bullets']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Table (add flexform)
 */
$GLOBALS['TCA']['tt_content']['types']['table']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Uploads (add flexform)
 */
$GLOBALS['TCA']['tt_content']['types']['uploads']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Menu (add flexform)
 */
$GLOBALS['TCA']['tt_content']['types']['menu']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * List (add flexform)
 */
$GLOBALS['TCA']['tt_content']['types']['list']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

/***************
 * Shortcut (add flexform)
 */
$GLOBALS['TCA']['tt_content']['types']['shortcut']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';


/***************
 * Gridelements
 */
$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['showitem'] .= ',tx_t3sbootstrap_content_slide';
$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['columnsOverrides'] = [
	'media' => '__UNSET',
	'frames' => '__UNSET'
];

/***************
 * BS Carousel
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_carousel'] = [
	'showitem' => '
			--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.header;header,rowDescription,
			bodytext;' . $frontendLanguageFilePrefix . 'bodytext_formlabel,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.media,assets,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.appearance,
			layout;' . $frontendLanguageFilePrefix . 'layout_formlabel,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.appearanceLinks;appearanceLinks,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
			hidden;' . $frontendLanguageFilePrefix . 'field.default.hidden,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.extended,tx_gridelements_container,tx_gridelements_columns
',
	'columnsOverrides' => [
		'bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]'],	
		'assets' => [
			'config' => [
				'maxitems' => 1
			]
		],
		'tx_t3sbootstrap_content_slide' => '__UNSET',
	]	
];
// Add category tab when categories column exits
if (!empty($GLOBALS['TCA']['tt_content']['columns']['categories'])) {
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_carousel']['showitem'] .=
	',--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,
	categories';
}

/***************
 * FluidTemplate
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_fluidtemplate']['showitem'] = '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
	header;LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_be.xlf:t3sbs_nonvisible_header,
	subheader;FluidTemplate,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.appearanceLinks;appearanceLinks,
	--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
		hidden;' . $frontendLanguageFilePrefix . 'field.default.hidden,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
	--div--;' . $frontendLanguageFilePrefix . 'tabs.extended,tx_gridelements_container,tx_gridelements_columns
';
// Add category tab when categories column exits
if (!empty($GLOBALS['TCA']['tt_content']['columns']['categories'])) {
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_fluidtemplate']['showitem'] .=
	',--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,
	categories';
}

/***************
 * BS Image Gallery
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_gallery'] = [
    'showitem' => '
			--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.header;header,rowDescription,
			--palette--;' . $frontendLanguageFilePrefix . 'media;uploads,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.appearance,
			layout;' . $frontendLanguageFilePrefix . 'layout_formlabel,
			 --palette--;' . $frontendLanguageFilePrefix . 'palette.appearanceLinks;appearanceLinks,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
			hidden;' . $frontendLanguageFilePrefix . 'field.default.hidden,
			--palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
		--div--;' . $frontendLanguageFilePrefix . 'tabs.extended
	',
	'columnsOverrides' => [
		'tx_t3sbootstrap_content_slide' => '__UNSET',
		'target' => '__UNSET',
	]
];
// Add category tab when categories column exits
if (!empty($GLOBALS['TCA']['tt_content']['columns']['categories'])) {
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_gallery']['showitem'] .=
	',--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,
	categories';
} 
// Add flexform
$GLOBALS['TCA']['tt_content']['types']['t3sbs_gallery']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';

# add subheader to palette header
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
	'tt_content',
	'header',
	'--linebreak--,subheader',
	'after:header'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
	'tt_content',
	'headers',
	'--linebreak--,subheader',
	'after:header'
);

# add tx_t3sbootstrap_content_slide
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
	'tt_content',
	'appearanceLinks',
	'--linebreak--,tx_t3sbootstrap_content_slide',
	'after:appearanceLinks'
);

# add tx_t3sbootstrap_imagestyle
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
	'tt_content',
	'imagelinks',
	'--linebreak--,tx_t3sbootstrap_imagestyle',
	'after:imagelinks'
);

# Extension configuration
$_EXTCONF = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);

if ($_EXTCONF['fontawesome']) {
	# add tx_t3sbootstrap_fontawesome_icon
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
		'tt_content',
		'header',
		'--linebreak--,tx_t3sbootstrap_fontawesome_icon',
		'after:subheader'
	);
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
		'tt_content',
		'headers',
		'--linebreak--,tx_t3sbootstrap_fontawesome_icon',
		'after:subheader'
	);	
}
