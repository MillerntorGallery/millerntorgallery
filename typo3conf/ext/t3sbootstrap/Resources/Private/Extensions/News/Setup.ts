# **********************************************************
#	EXT:news
# **********************************************************

plugin.tx_news {
	view {
		templateRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Templates/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Templates/
			4 = {$plugin.tx_news.view.twb.templateRootPath}
		}
		partialRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Partials/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Partials/
			4 = {$plugin.tx_news.view.twb.partialRootPath}
		}
		layoutRootPaths {
			2 = EXT:news/Resources/Private/Templates/Styles/Twb/Layouts/
			3 = EXT:t3sbootstrap/Resources/Private/Extensions/news/Templates/Styles/Twb/Layouts/
			4 = {$plugin.tx_news.view.twb.layoutRootPath}
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

		lightbox.enable = {$plugin.t3sbootstrap_configuration.extensions.colorbox.enable}

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
#					20.field = uid
#					20.noTrimWrap = | data-gallery="multiimages-|"|
				}
			}      
		}
		
		
	}
}

