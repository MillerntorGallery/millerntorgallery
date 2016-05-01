#-------------------------------------------------------------------------------
#	Plugin Constants
#-------------------------------------------------------------------------------

plugin.tx_t3sbootstrap {
	view {
		# cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template root (FE)
		templateRootPath = EXT:t3sbootstrap/Resources/Private/Templates/
		# cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template partials (FE)
		partialRootPath = EXT:t3sbootstrap/Resources/Private/Partials/
		# cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template layouts (FE)
		layoutRootPath = EXT:t3sbootstrap/Resources/Private/Layouts/
	}
}

#-------------------------------------------------------------------------------
#	Constants of t3sbootstrap_configuration
#-------------------------------------------------------------------------------

# customcategory=t3sbootstrap=bootstrap
# customsubcategory=a-general=BOOTSTRAP COMPONENTS: Main Settings
# customsubcategory=b-pages=BOOTSTRAP COMPONENTS: Pages Settings
# customsubcategory=c-navigation=BOOTSTRAP COMPONENTS: Navigation Settings
# customsubcategory=d-bslanguage=BOOTSTRAP COMPONENTS: Language Settings
# customsubcategory=e-styles=BOOTSTRAP COMPONENTS: Styles Settings
# customsubcategory=f-extensions=BOOTSTRAP COMPONENTS: Extensions Settings

plugin.t3sbootstrap_configuration {
	general {
		# cat=t3sbootstrap/a-general/01; type=string; label=Company Name: is shown in the navbar and breadcrumb
		company.name =
		pageTitle {
			# cat=t3sbootstrap/a-general/02; type=string; label=Page Title Prefix: e.g.: Company -
			prefix =
			# cat=t3sbootstrap/a-general/03; type=string; label=Page Title Suffix:
			suffix =
		}
		# cat=t3sbootstrap/a-general/04; type=boolean; label=Tooltip: Enable bootstrap tooltip
		tooltip = 1
		# cat=t3sbootstrap/a-general/05; type=options[top, bottom, left, right, auto]; label=Tooltip placement:
		tooltip_placement = bottom
		# cat=t3sbootstrap/a-general/08; type=options[none=0, top=1, bottom=2]; label=Sliding Content Elements: slide none or on top or bottom
		slide = 0
		# cat=t3sbootstrap/a-general/20; type=options[16by9, 4by3]; label=General video ratio:
		video.ratio = 16by9
		# cat=t3sbootstrap/a-general/30; type=boolean; label=Use CDN: for jQuery, Bootstrap and FontAwesome
		cdn	= 0
	}
	pages {
		# cat=t3sbootstrap/b-pages/01; type=int+; label=Homepage Uid:
		homepage.uid = 1
		# cat=t3sbootstrap/b-pages/02; type=small; label=Pages with Affix Nav: Comma-separated list of page ids. (data-target="#scrollspy" data-spy="scroll" is added to the body tag)
		affix.uidList =
		# cat=t3sbootstrap/b-pages/03; type=small; label=Pages with BOOTSTRAP Sitemap: Comma-separated list of page uids. (used as condition to load treed.js)
		sitemap.uidList =
	}
	navigation {
		# cat=t3sbootstrap/c-navigation/01; type=boolean; label=Shows the NavBar: Shows the navBar in the frontend
		navbar.enable = 1
		# cat=t3sbootstrap/c-navigation/02; type=int+; label=NavBar Entry Level:
		navbar.entryLevel = 0
		# cat=t3sbootstrap/c-navigation/03; type=small; label=NavBar Exclude: uid list of pages
		navbar.excludeUidList =
		# cat=t3sbootstrap/c-navigation/04; type=small; label=NavBar-Right Menu: uid list of pages
		navbar-right.uidList =
		# cat=t3sbootstrap/c-navigation/05; type=string; label=NavBar-Right Label:
		navbar-right.label = <span class="glyphicon glyphicon-info-sign"></span>
		# cat=t3sbootstrap/c-navigation/07; type=boolean; label=Dropdown opening on hover: and opening on click for collapsed navbar
		navbar.hover = 0
		# cat=t3sbootstrap/c-navigation/08; type=boolean; label=Breadcrumb Menu:
		breadcrumb.enable = 1
		# cat=t3sbootstrap/c-navigation/09; type=boolean; label=Submenu in Sidebar:
		sidebar-subMenu.enable = 1
		# cat=t3sbootstrap/c-navigation/10; type=small; label=Sidebar Submenu Exclude: uid list of pages
		sidebar-subMenu.excludeUidList =

		# cat=t3sbootstrap/f-extensions/15; type=boolean; label=Enable Search Form: in NavBar-Right - indexed_search should be loaded
		navbar.search.enable = 0
	}
	navigation_lang {
		# cat=t3sbootstrap/d-bslanguage/05; type=boolean; label=NavBar-Right Language Menu: enable language menu
		enable = 0
		# cat=t3sbootstrap/d-bslanguage/10; type=string; label=NavBar-Right Language Menu Label:
		navBarLabel = <span class="glyphicon glyphicon-globe"> </span>
		# cat=t3sbootstrap/d-bslanguage/20; type=small; label=Languages: uid list of languages
		languages = 0,1
		# cat=t3sbootstrap/d-bslanguage/30; type=string; label=Language Labels: is shown in the language menu ( separate the labels ​​by || )
		labels = <img title="de" alt="de" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/de.png"> Deutsch || <img title="gb" alt="gb" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/gb.png"> Englisch
	}
	styles {
		# cat=t3sbootstrap/e-styles/01; type=boolean; label=Fluid Container: Use for a full width container, spanning the entire width of your viewport.
		container-fluid = 0
		# cat=t3sbootstrap/e-styles/05; type=boolean; label=Jumbotron Full Width:
		jumbotron.fullwidth = 1
		# cat=t3sbootstrap/e-styles/06; type=boolean; label=Jumbotron Background Image: First image from page:media is shown
		jumbotron.bgImg.enable = 0
		# cat=t3sbootstrap/e-styles/07; type=int+; label=Jumbotron Bg Image max. Width:
		jumbotron.bgImg.maxWidth = 1920
		# cat=t3sbootstrap/e-styles/08; type=int+; label=Jumbotron Bg Image max. Height:
		jumbotron.bgImg.maxHeight = 400
		# cat=t3sbootstrap/e-styles/10; type=boolean; label=Page-Header: Header (H1) with subheader (small) shown in the Jumbotron or on Top.
		bsHeader.enable = 1
		# cat=t3sbootstrap/e-styles/20; type=boolean; label=NavBar Inverted:
		navbar.style.inverse = 0
		# cat=t3sbootstrap/e-styles/21; type=boolean; label=NavBar Fixed to top:
		navbar.style.fixed.top = 1
		# cat=t3sbootstrap/e-styles/22; type=boolean; label=NavBar on top:
		navbar.onTop = 1
		# cat=t3sbootstrap/e-styles/23; type=int+; label=NavBar Height: Is used as padding-top in the body tag (in px)
		navbar.style.height = 50
		# cat=t3sbootstrap/e-styles/30; type=boolean; label=Shows the Footer: Shows the footer in the frontend
		footer.enable = 1
		# cat=t3sbootstrap/e-styles/31; type=boolean; label=Footer Full Width:
		navbar.footer.fullwidth = 1
		# cat=t3sbootstrap/e-styles/32; type=boolean; label=Sticky Footer: Use sticky footer
		footer.sticky = 1
		# cat=t3sbootstrap/e-styles/33; type=int+; label=Sticky Footer - body padding: The fixed footer (navbar) will overlay your other content, unless you add padding to the bottom of the <body>. (in px)
		sticky.footer.body.padding.bottom = 200
	}
	extensions {
		# cat=t3sbootstrap/f-extensions/05; type=boolean; label=Lightbox: Include "Lightbox for Bootstrap 3" and configuration
		colorbox.enable = 1
		# cat=t3sbootstrap/f-extensions/06; type=boolean; label=Lightbox slideshow: Enable slideshow in the lightbox.
		colorbox.slideshow = 1
		# cat=t3sbootstrap/f-extensions/08; type=int+; label=Search Result Uid: indexed_search should be loaded
		indexed_search.page =
	}

	### Not in Constant Editor ###

	# versions for cdn only
	bootstrap.version = 3.3.5
	jquery.version = 1.11.3
	fontawesome.version = 4.5.0

	navigation.affix.data-offset-top = 200
	navigation.affix.data-offset-bottom = 100

	navigation.footer.uidList =
	navigation.footer.printButton.enable = 1

	# Enable page title in NavBarHeader on mobile view
	navigation.navbar.titleEnable = 0
	 # delimiter before title in NavBarHeader on mobile view
	navigation.navbar.delimiter = :

	# Full width for navBar "fixed to top" only if enabled
	navigation.navbar.fullWidth = 1

	# (boolean) search icon in navBar will link direct to the "indexed_search.page", if enabled (e.g. if using nc_staticfilecache ...)
	navigation.navbar.search.link =

	# Enable responsive tables by wrapping any .table in .table-responsive to make them scroll horizontally on small devices (under 768px).
	responsive.tables = 1

	# List of PIDs - prevent elements from wrapping with "<div class="container">|</div>" on those pages / all for all pages
	preventFromContainerWrapping =
	
	# Allow HTML-tags in headlines (header and subheader)
	headertags.enable = 0	
	
	# Allow HTML-tags in table cells
	tabletags.enable = 0	

	# If enabled, the jumbotron is hidden on small devices (<992px)
	styles.jumbotron.hidden.sm = 1
	# Include a login-/logout button in the navBar if enabled
	extensions.login.enable = 0

	image_gallery {
		# 1,2,3,4,6,12
		galleryColumns = 6
		imageWidth = 282
		imageHeight = 159
		thumbnail = 0
	}

}

[globalVar = GP:L = 1]
	plugin.t3sbootstrap_configuration.navigation_lang.labels = <img title="de" alt="de" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/de.png" width="20"> German || <img title="gb" alt="gb" src="typo3conf/ext/t3sbootstrap/Resources/Public/Icons/Flags/gb.png" width="20"> English
[global]


styles.content.textmedia.maxW = 1140
styles.content.textmedia.maxWInText = 555
