# **********************************************************
# List
# **********************************************************
tt_content.list {
	dataProcessing {
		10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Shortcut
# **********************************************************
tt_content.shortcut {
	dataProcessing {
		10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Header only
# **********************************************************
tt_content.header {
	dataProcessing {
		10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Textmedia
# **********************************************************
tt_content.textmedia {
	dataProcessing {
		20 = T3SBS\T3sbootstrap\DataProcessing\GalleryProcessor
		30 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Bullets
# **********************************************************
tt_content.bullets {
	dataProcessing {
		10.if >
		10.if {
			isInList.field = bullets_type
			value = 0,1,2,3,4
		}
		20.if >
		20.if {
			isInList.field = bullets_type
			value = 5,6
		}
		30 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Table
# **********************************************************
tt_content.table {
	dataProcessing {
		20 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
	variables {
		responsiveTables = TEXT
		responsiveTables.value = {$plugin.t3sbootstrap_configuration.responsive.tables}
	}	
}

# **********************************************************
# Uploads
# **********************************************************	
tt_content.uploads {
	dataProcessing {
		20 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Menu
# **********************************************************
tt_content.menu {
	variables {
		data-offset-top = TEXT
		data-offset-top.value = {$plugin.t3sbootstrap_configuration.navigation.affix.data-offset-top}
		data-offset-bottom = TEXT
		data-offset-bottom.value = {$plugin.t3sbootstrap_configuration.navigation.affix.data-offset-bottom}
	}
	dataProcessing {
		30 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Panel
# **********************************************************
tt_content.t3sbs_panel =< lib.fluidContent
tt_content.t3sbs_panel {
	templateName = Panel
	settings {
		defaultHeaderType = 3
	}
	dataProcessing {
		10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
	stdWrap {
		# Setup the edit icon for content element "t3sbs_panel"
		editIcons = tt_content: header [header_layout], bodytext
		editIcons {
			iconTitle.data = LLL:EXT:fluid_styled_content/Resources/Private/Language/FrontendEditing.xlf:editIcon.textmedia
		}
	}
}

# **********************************************************
# Fluidtemplate
# **********************************************************
tt_content.t3sbs_fluidtemplate = COA
tt_content.t3sbs_fluidtemplate {
	20 = FLUIDTEMPLATE
	20 {
		file.stdWrap.cObject = TEXT
		file.stdWrap.cObject.field = subheader
		file.stdWrap.cObject.ifEmpty {
			cObject = TEXT
			cObject.value = EXT:t3sbootstrap/Resources/Private/Templates/FluidTemplate.html
		}
	}
}

# **********************************************************
# Bootstrap Image Gallery
# **********************************************************
tt_content.t3sbs_gallery =< lib.fluidContent
tt_content.t3sbs_gallery {
	templateName = ImageGallery
	settings {
		defaultHeaderType = 2
		# 1,2,3,4,6,12
		galleryColumns = {$plugin.t3sbootstrap_configuration.image_gallery.galleryColumns}
		imageWidth = {$plugin.t3sbootstrap_configuration.image_gallery.imageWidth}
		imageHeight = {$plugin.t3sbootstrap_configuration.image_gallery.imageHeight}
		thumbnail = {$plugin.t3sbootstrap_configuration.image_gallery.thumbnail}
	}
	dataProcessing {
		10 = T3SBS\T3sbootstrap\DataProcessing\BsImageGalleryProcessor
		10 {
			references.fieldName = media
			collections.field = file_collections
			sorting.field = filelink_sorting
		}
		20 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
	}
}

# **********************************************************
# Thumbnails
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.thumbnails_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = Thumbnails
		templateRootPaths {
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
		}
		dataProcessing {
			10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
		}
		settings {
			defaultHeaderType = 3
		}
		variables {
			modulo = TEXT
			modulo.value = 12/{field:flexform_columns}
			modulo.value.insertData = 1
			modulo.prioriCalc = 1
		}
	}
	columns.0 {
		renderObj =< tt_content.t3sbs_thumbnails
	}
}

# **********************************************************
# Modal
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	modal < lib.gridelements.defaultGridSetup
	modal {
		cObject =< lib.fluidContent
		cObject {
			templateName = Modal
			templateRootPaths {
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			}
			dataProcessing {
				10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
			}
		}
	}
}

# **********************************************************
# Grid system
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	two_columns < lib.gridelements.defaultGridSetup
	two_columns {
		cObject =< lib.fluidContent
		cObject {
			templateName = TwoColumns
			templateRootPaths {
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			}
			dataProcessing {
				10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
			}
		}
	}
	three_columns < lib.gridelements.defaultGridSetup
	three_columns {
		cObject =< lib.fluidContent
		cObject {
			templateName = ThreeColumns
			templateRootPaths {
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			}
			dataProcessing {
				10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
			}
		}
	}
	four_columns < lib.gridelements.defaultGridSetup
	four_columns {
		cObject =< lib.fluidContent
		cObject {
			templateName = FourColumns
			templateRootPaths {
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			}
			dataProcessing {
				10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
			}
		}
	}
}

# **********************************************************
# Background wrapper
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	background_wrapper < lib.gridelements.defaultGridSetup
	background_wrapper {
		cObject =< lib.fluidContent
		cObject {
			templateName = BackgroundWrapper
			templateRootPaths {
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			}
			dataProcessing {
				10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
			}
		}
	}
}

# **********************************************************
# Parallax wrapper
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	parallax_wrapper < lib.gridelements.defaultGridSetup
	parallax_wrapper {
		cObject =< lib.fluidContent
		cObject {
			templateName = ParallaxWrapper
			templateRootPaths {
				8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
				9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
			}
			dataProcessing {
				10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
			}
		}
	}
}

# **********************************************************
# Carousel
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.carousel_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = Carousel
		templateRootPaths {
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
		}
		dataProcessing {
			10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
		}
		settings {
			defaultHeaderType = 3
		}
	}
}

# **********************************************************
# Tabs
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.tabs_tab {
	preCObject = LOAD_REGISTER
	preCObject {
		containerId.cObject = COA
		containerId.cObject {
			wrap = id="|"
			10 = TEXT
			10.wrap = tab-content-|
			10.field = uid
		}
		containerClasses.cObject = COA
		containerClasses.cObject {
			wrap = class="tab-pane |"
			10 = TEXT
			10.field = parentgrid_flexform_switch_effect
			10.noTrimWrap = | ||
			20 = TEXT
			20.value = active in
			20.noTrimWrap = | ||
			20.if {
				 value = 1
				 equals.data = cObj:parentRecordNumber
				 equals.prioriCalc = 1
			}
			30 = TEXT
			30.field = layout
			30.wrap = layout-|
			30.noTrimWrap = | ||
			30.if.isPositive.field = layout
		}
	}
	outerWrap = <div role="tabpanel" {register: containerId} {register: containerClasses}>|</div>
	outerWrap.insertData = 1
	columns.0 {
		renderObj =< tt_content
	}
}

tt_content.gridelements_pi1.20.10.setup.tabs_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = TabContainer
		templateRootPaths {
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
		}
		settings {
			defaultHeaderType = 3
		}
		dataProcessing {
			10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
		}
	}
	columns.0 {
		renderObj =< tt_content.gridelements_pi1
	}
}

# **********************************************************
# Collapse / Accordion
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.collapsible_accordion {
	cObject =< lib.fluidContent
	cObject {
		templateName = Collapsible
		templateRootPaths {
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
		}
		settings {
			defaultHeaderType = 3
		}
		dataProcessing {
			10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
		}
	}
	columns.0 {
		renderObj =< tt_content
	}
}

tt_content.gridelements_pi1.20.10.setup.collapsible_container {
	cObject =< lib.fluidContent
	cObject {
		templateName = CollapsibleContainer
		templateRootPaths {
			8 = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/
			9 = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/
		}
		dataProcessing {
			10 = T3SBS\T3sbootstrap\DataProcessing\BootstrapProcessor
		}
	}
	columns.0 {
		renderObj =< tt_content.gridelements_pi1
	}
}
