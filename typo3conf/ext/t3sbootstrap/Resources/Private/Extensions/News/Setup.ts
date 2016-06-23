# **********************************************************
#	EXT:news
# **********************************************************

plugin.tx_news {
	view {
		templateRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Templates/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Templates/
		}
		partialRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Partials/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Partials/
		}
		layoutRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Layouts/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Layouts/
		}
	}
              
	settings {
		thumbnail {
			# 2,3 or 4 columns
			columns = 3
			width = 400
			height = 250
		}
		mediaObject {
			width = 100
			height = 100
		}

		lightbox.enable = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}

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
				    10.value = class="gallery"
				    10.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.group}
				}

				dataAttribute = {$plugin.t3sbootstrap_configuration.extensions.lightbox.dataAttribute}
				lightboxGroup = {$plugin.t3sbootstrap_configuration.extensions.lightbox.group}
				if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
			}			
		}			
	}
}

