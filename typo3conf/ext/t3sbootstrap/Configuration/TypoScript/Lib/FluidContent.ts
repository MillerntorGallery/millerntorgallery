#-------------------------------------------------------------------------------
#	FluidContent - configuration
#-------------------------------------------------------------------------------
lib.fluidContent.templateRootPaths.1 = EXT:t3sbootstrap/Resources/Private/Templates/Content/
lib.fluidContent.partialRootPaths.1 = EXT:t3sbootstrap/Resources/Private/Partials/
lib.fluidContent.layoutRootPaths.1 = EXT:t3sbootstrap/Resources/Private/Layouts/
lib.fluidContent.templateRootPaths.2 = {$plugin.tx_t3sbootstrap.view.templateRootPath}
lib.fluidContent.partialRootPaths.2 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
lib.fluidContent.layoutRootPaths.2 = {$plugin.tx_t3sbootstrap.view.layoutRootPath}
lib.fluidContent {
	settings {
		video.ratio = {$plugin.t3sbootstrap_configuration.general.video.ratio}
		media {
			popup {
				bodyTag >
				wrap = |
				width = {$styles.content.textmedia.linkWrap.width}
				height = {$styles.content.textmedia.linkWrap.height}
				JSwindow = 0
				directImageLink = 1
				linkParams.ATagParams.dataWrap >
				linkParams.ATagParams.stdWrap.cObject = COA
				linkParams.ATagParams.stdWrap.cObject {
					10 = TEXT
					10.value = data-toggle="lightbox"
					20 = TEXT
					20.value = data-parent=".wrapper-parent"
				}
				slideshow = {$plugin.t3sbootstrap_configuration.extensions.colorbox.slideshow}
				if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.colorbox.enable}
			}			
		}
		headertags.enable = {$plugin.t3sbootstrap_configuration.headertags.enable}
		tabletags.enable = {$plugin.t3sbootstrap_configuration.tabletags.enable}		
	}
	variables {
		container-fluid = TEXT
		container-fluid.value = {$plugin.t3sbootstrap_configuration.styles.container-fluid}
		be_layout = TEXT
		be_layout.data = pagelayout
		preventFromContainerWrapping = TEXT		
		preventFromContainerWrapping.value = {$plugin.t3sbootstrap_configuration.preventFromContainerWrapping}
	}
}
