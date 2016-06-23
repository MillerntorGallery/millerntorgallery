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
$tempContentColumns = [
	'tx_t3sbootstrap_header_position' => array(
		'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position',
		'exclude' => true,
		'config' => array(
			'type' => 'select',
			'renderType' => 'selectSingle',
			'items' => array(
				array(
					'LLL:EXT:lang/locallang_general.xlf:LGL.default_value',
					''
				),
				array(
					'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position.I.1',
					'center'
				),
				array(
					'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position.I.2',
					'right'
				),
				array(
					'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:header_position.I.3',
					'left'
				)
			),
			'default' => ''
		)
	),
	'tx_t3sbootstrap_imagestyle' => [
		'exclude' => 0,
		'label' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_image_style',
		'config' => [
			'type' => 'select',
			'items' => [
				['Default', '0'],
				['Rounded', 'img-rounded'],
				['Circle', 'img-circle'],
				['Thumbnail', 'img-thumbnail'],
			],
			'renderType' => 'selectSingle'
		]
	],
	'tx_t3sbootstrap_content_slide' => [
		'exclude' => 0,
		'label' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_content_slide',
		'config' => [
			'type' => 'check',
			'default' => '0'
		]
	],
	'tx_t3sbootstrap_fontawesome_icon' => [
		'label'   => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_db.xlf:pages.tx_t3sbootstrap_fontawesome_icon',
		'config' => [
			'type' => 'input',
			'size' => '20',
		]
	],	
	'tx_t3sbootstrap_flexform' => [
		'l10n_display' => 'hideDiff',
		'label' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:pi_flexform',
		'config' => [
			'type' => 'flex',
			'ds_pointerField' => 'tx_gridelements_backend_layout,CType',
			'ds' => [
				'default' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Bootstrap.xml',
				'*,t3sbs_panel' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Panel.xml',
				'*,table' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Table.xml',
				'tabs_tab,gridelements_pi1' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Nada.xml',
				'*,t3sbs_thumbnails' => 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/Nada.xml',
			]
		]
	],
	'tx_t3sbootstrap_animateCss' => [
		'l10n_display' => 'hideDiff',
		'label' => 'Animate.css:',
		'config' => [
			'type' => 'select',
			'items' => [
				['None', '0'],
				['bounce', 'bounce'],
				['flash', 'flash'],
				['pulse', 'pulse'],
				['rubberBand', 'rubberBand'],
				['shake', 'shake'],
				['headShake', 'headShake'],
				['swing', 'swing'],
				['tada', 'tada'],
				['wobble', 'wobble'],
				['jello', 'jello'],
				['bounceIn', 'bounceIn'],
				['bounceInDown', 'bounceInDown'],
				['bounceInLeft', 'bounceInLeft'],
				['bounceInRight', 'bounceInRight'],
				['bounceInUp', 'bounceInUp'],
				['bounceOut', 'bounceOut'],
				['bounceOutDown', 'bounceOutDown'],
				['bounceOutLeft', 'bounceOutLeft'],
				['bounceOutRight', 'bounceOutRight'],
				['bounceOutUp', 'bounceOutUp'],
				['fadeIn', 'fadeIn'],
				['fadeInDown', 'fadeInDown'],
				['fadeInDownBig', 'fadeInDownBig'],
				['fadeInLeft', 'fadeInLeft'],
				['fadeInLeftBig', 'fadeInLeftBig'],
				['fadeInRight', 'fadeInRight'],
				['fadeInRightBig', 'fadeInRightBig'],
				['fadeInUp', 'fadeInUp'],
				['fadeInUpBig', 'fadeInUpBig'],
				['fadeOut', 'fadeOut'],
				['fadeOutDown', 'fadeOutDown'],
				['fadeOutDownBig', 'fadeOutDownBig'],
				['fadeOutLeft', 'fadeOutLeft'],
				['fadeOutLeftBig', 'fadeOutLeftBig'],
				['fadeOutRight', 'fadeOutRight'],
				['fadeOutRightBig', 'fadeOutRightBig'],
				['fadeOutUp', 'fadeOutUp'],
				['fadeOutUpBig', 'fadeOutUpBig'],
				['flipInX', 'flipInX'],
				['flipInY', 'flipInY'],
				['flipOutX', 'flipOutX'],
				['flipOutY', 'flipOutY'],
				['lightSpeedIn', 'lightSpeedIn'],
				['lightSpeedOut', 'lightSpeedOut'],
				['rotateIn', 'rotateIn'],
				['rotateInDownLeft', 'rotateInDownLeft'],
				['rotateInDownRight', 'rotateInDownRight'],
				['rotateInUpLeft', 'rotateInUpLeft'],
				['rotateInUpRight', 'rotateInUpRight'],
				['rotateOut', 'rotateOut'],
				['rotateOutDownLeft', 'rotateOutDownLeft'],
				['rotateOutDownRight', 'rotateOutDownRight'],
				['rotateOutUpLeft', 'rotateOutUpLeft'],
				['rotateOutUpRight', 'rotateOutUpRight'],
				['hinge', 'hinge'],
				['rollIn', 'rollIn'],
				['rollOut', 'rollOut'],
				['zoomIn', 'zoomIn'],
				['zoomInDown', 'zoomInDown'],
				['zoomInLeft', 'zoomInLeft'],
				['zoomInRight', 'zoomInRight'],
				['zoomInUp', 'zoomInUp'],
				['zoomOut', 'zoomOut'],
				['zoomOutDown', 'zoomOutDown'],
				['zoomOutLeft', 'zoomOutLeft'],
				['zoomOutRight', 'zoomOutRight'],
				['zoomOutUp', 'zoomOutUp'],
				['slideInDown', 'slideInDown'],
				['slideInLeft', 'slideInLeft'],
				['slideInRight', 'slideInRight'],
				['slideInUp', 'slideInUp'],
				['slideOutDown', 'slideOutDown'],
				['slideOutLeft', 'slideOutLeft'],
				['slideOutRight', 'slideOutRight'],
				['slideOutUp', 'slideOutUp'],
			],
			'renderType' => 'selectSingle'
		]
	],	
	'tx_t3sbootstrap_animateCssRepeat' => [
		'exclude' => 0,
		'label' => 'Repeat (jQuery-viewport-checker option):',
		'config' => [
			'type' => 'check',
			'default' => '1'
		]
	],
	'tx_t3sbootstrap_animateCssDuration' => [
		'label'   => 'Duration in seconds:',
		'config' => [
			'type' => 'input',
			'eval' => 'int',
			'size' => '3',
		]
	],	
];
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content',$tempContentColumns);
unset($tempContentColumns);

/***************
 * Header Layout sorting
 */
$GLOBALS['TCA']['tt_content']['columns']['header_layout']['config']['items'] = [
	[$frontendLanguageFilePrefix . 'LGL.default_value', '0'],
	[$languageFilePrefix .'tt_content.header_layout.ph1', '1'],
	[$languageFilePrefix .'tt_content.header_layout.ph2', '6'],
	[$languageFilePrefix .'tt_content.header_layout.2', '2'],
	[$languageFilePrefix .'tt_content.header_layout.3', '3'],
	[$languageFilePrefix .'tt_content.header_layout.4', '4'],
	[$languageFilePrefix .'tt_content.header_layout.5', '5'],
	[$languageFilePrefix .'tt_content.header_layout.6', '7'],
	[$frontendLanguageFilePrefix . 'header_layout.I.6', '100']
];

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
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][2] = ['BS Inline list', 2];
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][3] = ['BS Unstyled list',3];
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][4] = ['BS Listengruppen',4];
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][5] = [$fscLanguageFilePrefix . 'tt_content.bullets_type.2',5];
$GLOBALS['TCA']['tt_content']['columns']['bullets_type']['config']['items'][6] = ['BS Definition list (horizontal)',6];

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
// Add flexform
$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['showitem'] .= ',--div--;Bootstrap,tx_t3sbootstrap_flexform';


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
		'target' => '__UNSET'
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

# add header_position to palette header
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
	'tt_content',
	'header',
	'tx_t3sbootstrap_header_position',
	'after:header_layout'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
	'tt_content',
	'headers',
	'tx_t3sbootstrap_header_position',
	'after:header_layout'
);

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

if ($_EXTCONF['animateCss']) {
	# add animate.css
	$showAnimateCss = ',--div--;Animate.css,tx_t3sbootstrap_animateCss,tx_t3sbootstrap_animateCssDuration,tx_t3sbootstrap_animateCssRepeat';

	$GLOBALS['TCA']['tt_content']['types']['bullets']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['gridelements_pi1']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['header']['showitem'] .= $showAnimateCss;
#	$GLOBALS['TCA']['tt_content']['types']['html']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['list']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['login']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['mailform']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['menu']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['shortcut']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_carousel']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_fluidtemplate']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_gallery']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_panel']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['t3sbs_thumbnails']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['table']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['textmedia']['showitem'] .= $showAnimateCss;
	$GLOBALS['TCA']['tt_content']['types']['uploads']['showitem'] .= $showAnimateCss;
	
}

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
