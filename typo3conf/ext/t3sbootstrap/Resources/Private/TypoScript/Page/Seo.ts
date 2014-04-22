# **********************************************************
# <title> - Tag
# **********************************************************

includeLibs.pagetitle = EXT:t3sbootstreap/Classes/PageTitle.php
config.titleTagFunction = Tx_T3sbootstrap_PageTitle->getTitleTag
config.titleTagFunction {
	data = page:subtitle // page:title
	noTrimWrap = |{$plugin.t3sbootstrap_configuration.general.pageTitle.prefix} | {$plugin.t3sbootstrap_configuration.general.pageTitle.suffix}|
}

