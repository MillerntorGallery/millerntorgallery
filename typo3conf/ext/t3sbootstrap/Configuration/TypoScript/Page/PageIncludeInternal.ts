page {
	# CSS files to be included
	includeCSS {
		bootstrap = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/bootstrap.min.css
		bootstrap.forceOnTop = 1
		bootstrap.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapTheme = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/bootstrap-theme.min.css
		bootstrapTheme.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		fontAwesome = EXT:t3sbootstrap/Resources/Public/Contrib/Fontawesome/css/font-awesome.min.css
		fontAwesome.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}
	}
	# JS to be included
	includeJSFooterlibs {
		bootstrap = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/js/bootstrap.min.js

		jquery = EXT:t3sbootstrap/Resources/Public/Contrib/jquery.min.js
		jquery.forceOnTop = 1
	}
}
