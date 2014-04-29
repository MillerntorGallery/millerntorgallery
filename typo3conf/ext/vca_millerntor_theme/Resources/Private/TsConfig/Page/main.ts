# **********************************************************
# New Content Element Wizard
# **********************************************************

mod.wizards.newContentElement.wizardItems.bootstrap {
	header = Bootstrap
	elements.tx_vcamillerntortheme_container {
		icon = ../typo3conf/ext/vca_millerntor_theme/Resources/Public/Icons/bootstrap-3_24x24.png
		//title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.panel.title
		title = Item-Container
		//description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:bootstrap.panel.description
		description = Isotope Container for items 
		tt_content_defValues.CType = vca_millerntor_container
	}
}

mod.wizards.newContentElement.wizardItems.vcamillerntortheme.show = tx_vcamillerntortheme_container