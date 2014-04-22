# **********************************************************
# New Content Element Wizard
# **********************************************************

mod.wizards.newContentElement.wizardItems.bootstrap {
	header = Bootstrap
	elements.tx_t3sbootstrap_panel {
		icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
		title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.panel.title
		description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.panel.description
		tt_content_defValues.CType = t3sbootstrap_panel
	}
	elements.tx_t3sbootstrap_mediaobject {
		icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
		title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.mediaobject.title
		description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.mediaobject.description
		tt_content_defValues.CType = t3sbootstrap_mediaobject
	}
	elements.tx_t3sbootstrap_thumbnail {
		icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
		title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.thumbnail.title
		description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.thumbnail.description
		tt_content_defValues.CType = t3sbootstrap_thumbnail
	}
	elements.tx_t3sbootstrap_carousel {
		icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
		title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.carousel.title
		description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.carousel.description
		tt_content_defValues.CType = t3sbootstrap_carousel
	}

}

mod.wizards.newContentElement.wizardItems.bootstrap.show = tx_t3sbootstrap_panel,tx_t3sbootstrap_mediaobject,tx_t3sbootstrap_thumbnail,tx_t3sbootstrap_carousel


#-------------------------------------------------------------------------------
#	Pages
#-------------------------------------------------------------------------------
TCEFORM.pages {
	# Backend Layouts
	backend_layout.PAGE_TSCONFIG_ID = 1
	backend_layout_next_level.PAGE_TSCONFIG_ID = 1

	# Hide no backend layout label, deactivated by default!
	backend_layout.removeItems = 0,-1
	backend_layout_next_level.removeItems = -1
}
TCEMAIN.table.pages.disablePrependAtCopy = 1

#-------------------------------------------------------------------------------
#	Page module
#-------------------------------------------------------------------------------
mod {
# is done by gridelements
#	wizards.newContentElement.renderMode = tabs

	# Default flag - here German
	SHARED {
		defaultLanguageLabel = Deutsch
		defaultLanguageFlag = de.gif
	}
}

#-------------------------------------------------------------------------------
#	Content elements
#-------------------------------------------------------------------------------
TCEFORM.tt_content {

	header_layout {
		altLabels {
			1 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.1
			2 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.2
			3 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.3
			4 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.4
			5 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.5
		}
	}

	section_frame {
		removeItems = 1,11,12,20,21,66
		addItems {
			26 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.hidden
			27 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.hidden-phone
			28 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.visible-phone
			29 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.hidden-desktop
			30 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.visible-desktop

			40 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.well
			41 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.well-lg
			42 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.well-sm

			45 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-success
			46 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-info
			47 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-warning
			48 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-danger

			46 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-info
			47 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-warning
			48 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-danger

			50 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.callout-danger
			51 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.callout-warning
			52 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.callout-info

		}
	}

	# New menu type
    menu_type.addItems.9 = BOOTSTRAP: Affix


	# New label for new Bootstrap table styles
	pi_flexform.table.sDEF.acctables_tableclass.label = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.table.acctables_tableclass

}

TCAdefaults {
	tt_content {
		header_layout = 2
	}
}

TCEMAIN.table.tt_content {
	disablePrependAtCopy = 1
	disableHideAtCopy = 0
}


#-------------------------------------------------------------------------------
#	RTE
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Rte/TsConfig.ts">

#-------------------------------------------------------------------------------
#	Gridelements
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/TsConfig.ts">

#-------------------------------------------------------------------------------
#	News
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/News/TsConfig.ts">
