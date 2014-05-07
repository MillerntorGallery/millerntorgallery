<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/***************
 * Include TypoScript
 */

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Bootstrap', 'Bootstrap Components');


/***************
 * BackendLayoutDataProvider
 */

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider'][$_EXTKEY] = 'T3S\T3sbootstrap\Provider\BackendLayoutDataProvider';


/***************
 * New fields in table:pages
 */

$tempPagesColumns = Array (
	'tx_t3sbootstrap_glyphicon' => array (
		'exclude' => 1,
		'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:pages.tx_t3sbootstrap_glyphicon',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:pages.tx_t3sbootstrap_no_glyphicon', ''),
				array('glyphicon-asterisk', 'asterisk'),
				array('glyphicon-plus', 'plus'),
				array('glyphicon-euro', 'euro'),
				array('glyphicon-minus', 'minus'),
				array('glyphicon-cloud', 'cloud'),
				array('glyphicon-envelope', 'envelope'),
				array('glyphicon-pencil', 'pencil'),
				array('glyphicon-glass', 'glass'),
				array('glyphicon-music', 'music'),
				array('glyphicon-search', 'search'),
				array('glyphicon-heart', 'heart'),
				array('glyphicon-star', 'star'),
				array('glyphicon-star-empty', 'star-empty'),
				array('glyphicon-user', 'user'),
				array('glyphicon-film', 'film'),
				array('glyphicon-th-large', 'th-large'),
				array('glyphicon-th', 'th'),
				array('glyphicon-th-list', 'th-list'),
				array('glyphicon-ok', 'ok'),
				array('glyphicon-remove', 'remove'),
				array('glyphicon-zoom-in', 'zoom-in'),
				array('glyphicon-zoom-out', 'zoom-out'),
				array('glyphicon-off', 'off'),
				array('glyphicon-signal', 'signal'),
				array('glyphicon-cog', 'cog'),
				array('glyphicon-trash', 'trash'),
				array('glyphicon-home', 'home'),
				array('glyphicon-file', 'file'),
				array('glyphicon-time', 'time'),
				array('glyphicon-road', 'road'),
				array('glyphicon-download-alt', 'download-alt'),
				array('glyphicon-download', 'download'),
				array('glyphicon-upload', 'upload'),
				array('glyphicon-inbox', 'inbox'),
				array('glyphicon-play-circle', 'lay-circle'),
				array('glyphicon-repeat', 'repeat'),
				array('glyphicon-refresh', 'refresh'),
				array('glyphicon-list-alt', 'list-alt'),
				array('glyphicon-lock', 'lock'),
				array('glyphicon-flag', 'flag'),
				array('glyphicon-headphones', 'headphones'),
				array('glyphicon-volume-off', 'volume-off'),
				array('glyphicon-volume-down', 'volume-down'),
				array('glyphicon-volume-up', 'volume-up'),
				array('glyphicon-qrcode', 'qrcode'),
				array('glyphicon-barcode', 'barcode'),
				array('glyphicon-tag', 'tag'),
				array('glyphicon-tags', 'tags'),
				array('glyphicon-book', 'book'),
				array('glyphicon-bookmark', 'bookmark'),
				array('glyphicon-print', 'print'),
				array('glyphicon-camera', 'camera'),
				array('glyphicon-font', 'font'),
				array('glyphicon-bold', 'bold'),
				array('glyphicon-italic', 'italic'),
				array('glyphicon-text-height', 'text-height'),
				array('glyphicon-text-width', 'text-width'),
				array('glyphicon-align-left', 'align-left'),
				array('glyphicon-align-center', 'align-center'),
				array('glyphicon-align-right', 'align-right'),
				array('glyphicon-align-justify', 'align-justify'),
				array('glyphicon-list', 'list'),
				array('glyphicon-indent-left', 'indent-left'),
				array('glyphicon-indent-right', 'indent-right'),
				array('glyphicon-facetime-video', 'facetime-video'),
				array('glyphicon-picture', 'picture'),
				array('glyphicon-map-marker', 'map-marker'),
				array('glyphicon-adjust', 'adjust'),
				array('glyphicon-tint', 'tint'),
				array('glyphicon-edit', 'edit'),
				array('glyphicon-share', 'share'),
				array('glyphicon-check', 'check'),
				array('glyphicon-move', 'move'),
				array('glyphicon-step-backward', 'step-backward'),
				array('glyphicon-fast-backward', 'fast-backward'),
				array('glyphicon-backward', 'backward'),
				array('glyphicon-play', 'play'),
				array('glyphicon-pause', 'pause'),
				array('glyphicon-stop', 'stop'),
				array('glyphicon-forward', 'forward'),
				array('glyphicon-fast-forward', 'fast-forward'),
				array('glyphicon-step-forward', 'step-forward'),
				array('glyphicon-eject', 'eject'),
				array('glyphicon-chevron-left', 'chevron-left'),
				array('glyphicon-chevron-right', 'chevron-right'),
				array('glyphicon-plus-sign', 'plus-sign'),
				array('glyphicon-minus-sign', 'minus-sign'),
				array('glyphicon-remove-sign', 'remove-sign'),
				array('glyphicon-ok-sign', 'ok-sign'),
				array('glyphicon-question-sign', 'question-sign'),
				array('glyphicon-info-sign', 'info-sign'),
				array('glyphicon-screenshot', 'screenshot'),
				array('glyphicon-remove-circle', 'remove-circle'),
				array('glyphicon-ok-circle', 'ok-circle'),
				array('glyphicon-ban-circle', 'ban-circle'),
				array('glyphicon-arrow-left', 'arrow-left'),
				array('glyphicon-arrow-right', 'arrow-right'),
				array('glyphicon-arrow-up', 'arrow-up'),
				array('glyphicon-arrow-down', 'arrow-down'),
				array('glyphicon-share-alt', 'share-alt'),
				array('glyphicon-resize-full', 'resize-full'),
				array('glyphicon-resize-small', 'resize-small'),
				array('glyphicon-exclamation-sign', 'exclamation-sign'),
				array('glyphicon-gift', 'ift'),
				array('glyphicon-leaf', 'leaf'),
				array('glyphicon-fire', 'fire'),
				array('glyphicon-eye-open', 'eye-open'),
				array('glyphicon-eye-close', 'eye-close'),
				array('glyphicon-warning-sign', 'warning-sign'),
				array('glyphicon-plane', 'plane'),
				array('glyphicon-calendar', 'calendar'),
				array('glyphicon-random', 'random'),
				array('glyphicon-comment', 'comment'),
				array('glyphicon-magnet', 'magnet'),
				array('glyphicon-chevron-up', 'chevron-up'),
				array('glyphicon-chevron-down', 'chevron-down'),
				array('glyphicon-retweet', 'retweet'),
				array('glyphicon-shopping-cart', 'shopping-cart'),
				array('glyphicon-folder-close', 'folder-close'),
				array('glyphicon-folder-open', 'folder-open'),
				array('glyphicon-resize-vertical', 'resize-vertical'),
				array('glyphicon-resize-horizontal', 'resize-horizontal'),
				array('glyphicon-hdd', 'hdd'),
				array('glyphicon-bullhorn', 'bullhorn'),
				array('glyphicon-bell', 'bell'),
				array('glyphicon-certificate', 'certificate'),
				array('glyphicon-thumbs-up', 'thumbs-up'),
				array('glyphicon-thumbs-down', 'thumbs-down'),
				array('glyphicon-hand-right', 'hand-right'),
				array('glyphicon-hand-left', 'hand-left'),
				array('glyphicon-hand-up', 'hand-up'),
				array('glyphicon-hand-down', 'hand-down'),
				array('glyphicon-circle-arrow-right', 'circle-arrow-right'),
				array('glyphicon-circle-arrow-left', 'circle-arrow-left'),
				array('glyphicon-circle-arrow-up', 'circle-arrow-up'),
				array('glyphicon-circle-arrow-down', 'circle-arrow-down'),
				array('glyphicon-globe', 'globe'),
				array('glyphicon-wrench', 'wrench'),
				array('glyphicon-tasks', 'tasks'),
				array('glyphicon-filter', 'filter'),
				array('glyphicon-briefcase', 'briefcase'),
				array('glyphicon-fullscreen', 'fullscreen'),
				array('glyphicon-dashboard', 'dashboard'),
				array('glyphicon-paperclip', 'paperclip'),
				array('glyphicon-heart-empty', 'heart-empty'),
				array('glyphicon-link', 'link'),
				array('glyphicon-phone', 'phone'),
				array('glyphicon-pushpin', 'pushpin'),
				array('glyphicon-usd', 'usd'),
				array('glyphicon-gbp', 'gbp'),
				array('glyphicon-sort', 'sort'),
				array('glyphicon-sort-by-alphabet', 'sort-by-alphabet'),
				array('glyphicon-sort-by-alphabet-alt', 'sort-by-alphabet-alt'),
				array('glyphicon-sort-by-order', 'sort-by-order'),
				array('glyphicon-sort-by-order-alt', 'sort-by-order-alt'),
				array('glyphicon-sort-by-attributes', 'sort-by-attributes'),
				array('glyphicon-sort-by-attributes-alt', 'sort-by-attributes-alt'),
				array('glyphicon-unchecked', 'unchecked'),
				array('glyphicon-expand', 'expand'),
				array('glyphicon-collapse-down', 'collapse-down'),
				array('glyphicon-collapse-up', 'collapse-up'),
				array('glyphicon-log-in', 'log-in'),
				array('glyphicon-flash', 'flash'),
				array('glyphicon-log-out', 'log-out'),
				array('glyphicon-new-window', 'new-window'),
				array('glyphicon-record', 'record'),
				array('glyphicon-save', 'save'),
				array('glyphicon-open', 'open'),
				array('glyphicon-saved', 'saved'),
				array('glyphicon-import', 'import'),
				array('glyphicon-export', 'export'),
				array('glyphicon-send', 'send'),
				array('glyphicon-floppy-disk', 'floppy-disk'),
				array('glyphicon-floppy-saved', 'floppy-saved'),
				array('glyphicon-floppy-remove', 'floppy-remove'),
				array('glyphicon-floppy-save', 'floppy-save'),
				array('glyphicon-floppy-open', 'floppy-open'),
				array('glyphicon-credit-card', 'credit-card'),
				array('glyphicon-transfer', 'transfer'),
				array('glyphicon-cutlery', 'cutlery'),
				array('glyphicon-header', 'header'),
				array('glyphicon-compressed', 'compressed'),
				array('glyphicon-earphone', 'earphone'),
				array('glyphicon-phone-alt', 'phone-alt'),
				array('glyphicon-tower', 'tower'),
				array('glyphicon-stats', 'stats'),
				array('glyphicon-sd-video', 'sd-video'),
				array('glyphicon-hd-video', 'hd-video'),
				array('glyphicon-subtitles', 'subtitles'),
				array('glyphicon-sound-stereo', 'sound-stereo'),
				array('glyphicon-sound-dolby', 'sound-dolby'),
				array('glyphicon-sound-5-1', 'sound-5-1'),
				array('glyphicon-sound-6-1', 'sound-6-1'),
				array('glyphicon-sound-7-1', 'sound-7-1'),
				array('glyphicon-copyright-mark', 'copyright-mark'),
				array('glyphicon-registration-mark', 'registration-mark'),
				array('glyphicon-cloud-download', 'cloud-download'),
				array('glyphicon-cloud-upload', 'cloud-upload'),
				array('glyphicon-tree-conifer', 'tree-conifer'),
				array('glyphicon-tree-deciduous', 'tree-deciduous'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),

);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages',$tempPagesColumns,1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('pages','title','--linebreak--,tx_t3sbootstrap_glyphicon','after:subtitle');

/***************
 * New fields in table:tt_content
 */

$tempContentColumns = array (
	'tx_t3sbootstrap_panel_state' => array (
		'exclude' => 1,
		'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_panel_state',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('Default', 'default'),
				array('Primary', 'primary'),
				array('Success', 'success'),
				array('Info', 'info'),
				array('Warning', 'warning'),
				array('Danger', 'danger'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),

	'tx_t3sbootstrap_list_group' => array (
		'exclude' => 1,
		'label' => 'Bootstrap:',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('Unordered', 'list-unordered'),
				array('Ordered', 'ordered'),
				array('List group', 'list-group'),
				array('Unstyled list', 'list-unstyled'),
				array('Inline list', 'list-inline'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),

	'tx_t3sbootstrap_imagestyle' => array (
		'exclude' => 1,
		'label' => 'Bootstrap:',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('Default', '0'),
				array('Rounded', 'img-rounded'),
				array('Circle', 'img-circle'),
				array('Thumbnail', 'img-thumbnail'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),

	'tx_t3sbootstrap_mediapull' => array (
		'exclude' => 1,
		'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_pull',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_pull_left', 'left'),
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_pull_right', 'right'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),


);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content',$tempContentColumns,1);

/***************
 * Add Bootstrap components - new content elements
 */

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'Bootstrap: Panel',
		't3sbootstrap_panel',
	),
	'CType'
);

$GLOBALS['TCA']['tt_content']['types']['t3sbootstrap_panel']['showitem'] = '--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,header, subheader, tx_t3sbootstrap_panel_state,bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css], rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended, --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories, tx_gridelements_container, tx_gridelements_columns';


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'Bootstrap: Media object',
		't3sbootstrap_mediaobject'
	),
	'CType'
);

$GLOBALS['TCA']['tt_content']['types']['t3sbootstrap_mediaobject']['showitem'] = '--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,image, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.image_settings;image_settings, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.imagelinks;imagelinks,tx_t3sbootstrap_mediapull,header,header_link, subheader, bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css], rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended, --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories, tx_gridelements_container, tx_gridelements_columns';


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'Bootstrap: Thumbnail',
		't3sbootstrap_thumbnail'
	),
	'CType'
);

$GLOBALS['TCA']['tt_content']['types']['t3sbootstrap_thumbnail']['showitem'] = '--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,image, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.imagelinks;imagelinks,header, header_link, subheader, bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css], rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended, --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories, tx_gridelements_container, tx_gridelements_columns';


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'Bootstrap: Carousel',
		't3sbootstrap_carousel'
	),
	'CType'
);

$GLOBALS['TCA']['tt_content']['types']['t3sbootstrap_carousel']['showitem'] = '--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,image,header, subheader, bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css], rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel, --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility, --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended, --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories, tx_gridelements_container, tx_gridelements_columns';




# tx_t3sbootstrap_list_group in CType=bullets
$GLOBALS['TCA']['tt_content']['types']['bullets']['showitem'] = '--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general, --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.header;header, tx_t3sbootstrap_list_group, bodytext;LLL:EXT:cms/locallang_ttc.xlf:bodytext.ALT.bulletlist_formlabel;;nowrap, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance, --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access, --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility, --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access, --div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended, --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories, tx_gridelements_container, tx_gridelements_columns';


# add tx_t3sbootstrap_imagestyle
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
        'tt_content',
        'imagelinks',
        '--linebreak--,tx_t3sbootstrap_imagestyle',
        'after:imagelinks'
);

# add subheader
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
        'tt_content',
        'header',
        '--linebreak--,subheader',
        'after:header'
);


?>