# **********************************************************
#	EXT:news
# **********************************************************

plugin.tx_news {
	view {
		templateRootPath = EXT:t3sbootstrap/Resources/Private/Extensions/News/Templates/
		partialRootPath = EXT:t3sbootstrap/Resources/Private/Extensions/News/Partials/
		layoutRootPath = EXT:t3sbootstrap/Resources/Private/Extensions/News/Layouts/
        widget.Tx_News_ViewHelpers_Widget_PaginateViewHelper.templateRootPath = EXT:t3sbootstrap/Resources/Private/Extensions/News/
	}

	settings {
		cssFile = EXT:t3sbootstrap/Resources/Public/Template/css/News.css

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
	}
}

