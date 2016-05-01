
temp.globalSettings {
	company = {$plugin.t3sbootstrap_configuration.general.company.name}
	styles {
		navbar.onTop = {$plugin.t3sbootstrap_configuration.styles.navbar.onTop}
		navbar.style.inverse = {$plugin.t3sbootstrap_configuration.styles.navbar.style.inverse}
		navbar.style.fixed.top = {$plugin.t3sbootstrap_configuration.styles.navbar.style.fixed.top}
		navbar.style.fixed.custom = {$plugin.t3sbootstrap_configuration.styles.navbar.style.fixed.custom}
		navbar.footer.fullwidth = {$plugin.t3sbootstrap_configuration.styles.navbar.footer.fullwidth}
		jumbotron.fullwidth = {$plugin.t3sbootstrap_configuration.styles.jumbotron.fullwidth}
		jumbotron.bgImg.enable = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.enable}
		jumbotron.hidden.sm = {$plugin.t3sbootstrap_configuration.styles.jumbotron.hidden.sm}
		bsHeader.enable = {$plugin.t3sbootstrap_configuration.styles.bsHeader.enable}
		footer.enable = {$plugin.t3sbootstrap_configuration.styles.footer.enable}
		footer.sticky = {$plugin.t3sbootstrap_configuration.styles.footer.sticky}
		container-fluid = {$plugin.t3sbootstrap_configuration.styles.container-fluid}		
	}
	navigation {
		breadcrumb.enable = {$plugin.t3sbootstrap_configuration.navigation.breadcrumb.enable}
		navbar.enable = {$plugin.t3sbootstrap_configuration.navigation.navbar.enable}
		navbar.right.uidList = {$plugin.t3sbootstrap_configuration.navigation.navbar-right.uidList}
		navbar.search.enable = {$plugin.t3sbootstrap_configuration.navigation.navbar.search.enable}
		navbar.search.link = {$plugin.t3sbootstrap_configuration.navigation.navbar.search.link}
		navbar.search.linkUid = {$plugin.t3sbootstrap_configuration.extensions.indexed_search.page}
		navbar_lang.enable = {$plugin.t3sbootstrap_configuration.navigation_lang.enable}
		navbar_lang.languages = {$plugin.t3sbootstrap_configuration.navigation_lang.languages}
		sidebar-subMenu.enable = {$plugin.t3sbootstrap_configuration.navigation.sidebar-subMenu.enable}
		navbar.fullWidth = {$plugin.t3sbootstrap_configuration.navigation.navbar.fullWidth}
	}
	# enable/disable in EMconfig
	expandedContent = {$plugin.t3sbootstrap_configuration.general.expandedContent}
}

page {
	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file = EXT:t3sbootstrap/Resources/Private/Templates/Main.html		
		
		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}
		layoutRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Layouts/
			10 = {$plugin.tx_t3sbootstrap.view.layoutRootPath}
		}
		variables {
			jumbotron_variable < lib.t3sheaderslider

			affix = TEXT
			affix.value = 1
			affix.if {
				value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}
				isInList {
					field = uid
				}
			}
			be_layout = TEXT
			be_layout.data = pagelayout
		}
		settings < temp.globalSettings
	}
}

temp.globalSettings >