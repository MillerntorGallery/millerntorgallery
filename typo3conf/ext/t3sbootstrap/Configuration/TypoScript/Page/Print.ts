# printversion
print = PAGE
print {
	typeNum = 98
	bodyTag = <body onload="javascript:window.print()">

	config.index_enable = 0

	headerData.123 = TEXT
	headerData.123.value = <meta name="robots" content="noindex, nofollow" />
	headerData.124 = TEXT
	headerData.124 {
		field = title
		noTrimWrap = |<title>{$plugin.t3sbootstrap_configuration.general.company.name}: | - (printversion)</title>|
	}

	includeCSS.fileBootstrap = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/bootstrap.min.css
	includeCSS.fileBootstrap.forceOnTop = 1
	includeCSS.fileBootstrap.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

	includeCSS.fileBootstrapTheme = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/bootstrap-theme.min.css
	includeCSS.fileBootstrapTheme.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

	includeCSS.fileBootstrapt3s = EXT:t3sbootstrap/Resources/Public/Styles/t3sbootstrap.css
	includeCSS.fileBootstrapt3s.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

	includeCSS.fileDefault = EXT:t3sbootstrap/Resources/Public/Styles/print.css
	includeCSS.fileDefault.media = print

	includeCSS.fileBootstrapLess = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/less/bootstrap.less
	includeCSS.fileBootstrapLess.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}

	10 =< lib.fluidContent
	10.templateName = Print	
	10.variables.content < styles.content.get

}
