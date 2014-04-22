# **********************************************************
# General PAGE setup
#
# including template, CSS + JS files
# **********************************************************

temp.globalSettings {

	general {
		copyright_information = {$plugin.t3sbootstrap_configuration.general.copyright_information}
	}

	styles {
		navbar.style.inverse = {$plugin.t3sbootstrap_configuration.styles.navbar.style.inverse}
		navbar.footer.fullwidth = {$plugin.t3sbootstrap_configuration.styles.navbar.footer.fullwidth}
		jumbotron.fullwidth = {$plugin.t3sbootstrap_configuration.styles.jumbotron.fullwidth}
		jumbotron.bgImg.enable = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.enable}
		navbar.style.fixed.top = {$plugin.t3sbootstrap_configuration.styles.navbar.style.fixed.top}
		bsHeader.enable = {$plugin.t3sbootstrap_configuration.styles.bsHeader.enable}
		footer.show = {$plugin.t3sbootstrap_configuration.styles.footer.show}
	}

	navigation {
		breadcrumb.enable = {$plugin.t3sbootstrap_configuration.navigation.breadcrumb.enable}
		navbar.right.pids = {$plugin.t3sbootstrap_configuration.navigation.navbar-right.pids}
		navbar.search.enable = {$plugin.t3sbootstrap_configuration.navigation.navbar.search.enable}
		navbar_lang.enable = {$plugin.t3sbootstrap_configuration.navigation_lang.enable}
		navbar_lang.languages = {$plugin.t3sbootstrap_configuration.navigation_lang.languages}
		sidebar-subMenu.enable = {$plugin.t3sbootstrap_configuration.navigation.sidebar-subMenu.enable}
	}
}


page = PAGE
page {

	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Main.html
		partialRootPath = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		layoutRootPath = {$plugin.tx_t3sbootstrap.view.layoutRootPath}
		variables {

		    subnav = TEXT
		    subnav.value = 1
		    subnav.if.isTrue.numRows {
		      table = pages
		      select.pidInList.data = leveluid:1
		      select.where = nav_hide!=1
		    }

			be_layout = TEXT
			be_layout.data = page:backend_layout // levelfield:-2, backend_layout_next_level, slide

		}
		settings < temp.globalSettings
	}


	# CSS files to be included
	includeCSS {
		bootstrap = //netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1
		bootstrapTheme = {$plugin.t3sbootstrap_configuration.general.externalBootstrapTheme}
		bootstrapTheme.external = 1
		bootstrapTheme.excludeFromConcatenation = 1
		bootstrapTheme.disableCompression = 1
		bootstrapt3s = {$plugin.t3sbootstrap_configuration.general.internalBootstrapTheme}
		bootstrapt3s.media = screen
	}

	# JS files to be included
	includeJSFooterlibs {
		bootstrap = //netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1
		# jQuery 2.x has the same API as jQuery 1.x, but does not support Internet Explorer 6, 7, or 8.
		jquery = //ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
		jquery.external = 1
		jquery.forceOnTop = 1
		jquery.excludeFromConcatenation = 1
		jquery.disableCompression = 1
	}

	jsFooterInline.5 = TEXT
	jsFooterInline.5.value (
	  jQuery(function() {

	    var $affixElement = $('ul[data-spy="affix"]');
	    $affixElement.width($affixElement.parent().width());

	    jQuery(this).scrollTop(0);

		jQuery('.bs-affix li:first').addClass('active');

		jQuery('a.gallery').colorbox();

		jQuery('.content-row .csc-default a').tooltip();

		jQuery('a img').attr('title', '');

	  });

	)

	# Add some classes to the bodytag
	bodyTagCObject >
	bodyTagCObject = COA
	bodyTagCObject {

		wrap = <body | >

		10 = COA
		10 {
		    stdWrap.noTrimWrap = | ||
			10 = TEXT
			10 {
				value = style="padding-top:{$plugin.t3sbootstrap_configuration.styles.navbar.style.height}px;"
				if.value = 1
				if.equals = {$plugin.t3sbootstrap_configuration.styles.navbar.style.fixed.top}
			}
		}

		20 = COA
		20 {
			stdWrap.noTrimWrap = | class="|"|
			10 = TEXT
			10.field = uid
			10.wrap = page-|
			20 = TEXT
			20 {
				stdWrap.noTrimWrap = | template-||
				data = levelfield:-1, backend_layout_next_level, slide
				override.field = backend_layout
			}
			30 = TEXT
			30 {
				fieldRequired = layout
				value = layout-{field:layout}
				insertData = 1
				noTrimWrap = | ||
			}
		}
		# use scrollspy with affix
		30 = TEXT
		30 {
			value = data-spy="scroll" data-target="#scrollspy" data-offset="80"
			noTrimWrap = | ||
			if.isInList.data = TSFE:id
			if.value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}
		}
	}
}

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

	includeCSS.fileBootstrap = //netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css
	includeCSS.fileBootstrap.external = 1
	includeCSS.fileBootstrap.excludeFromConcatenation = 1
	includeCSS.fileBootstrap.disableCompression = 1
	includeCSS.fileDefault = EXT:t3sbootstrap/Resources/Public/Template/css/print.css
	includeCSS.fileDefault.media = print
	includeCSS.fileDefault.excludeFromConcatenation = 1
	includeCSS.fileDefault.disableCompression = 1

	10 = FLUIDTEMPLATE
	10 {
		template = FILE
		template.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Print.html
		variables {
			content < styles.content.get
		}
	}
}
