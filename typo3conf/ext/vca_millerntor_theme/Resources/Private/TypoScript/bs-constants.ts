#-------------------------------------------------------------------------------
#	Plugin Constants
#-------------------------------------------------------------------------------

plugin.tx_t3sbootstrap {
    view {
        # cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:vca_millerntor_theme/Resources/Private/Templates/
        # cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:vca_millerntor_theme/Resources/Private/Templates/Partials/
        # cat=plugin.tx_t3sbootstrap/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:vca_millerntor_theme/Resources/Private/Templates/Layouts/
    }
}


#-------------------------------------------------------------------------------
#	Constants of t3sbootstrap_configuration
#-------------------------------------------------------------------------------

plugin.t3sbootstrap_configuration {

 	# cat=basic/other/2; type=string; label=Base URL: e.g.: http://www.domain.de/ (You can use the extension without the use of config.baseURL)
	url =
	
	

	general {

 		# cat=basic/file/1; type=string; label=External Bootstrap Theme: include an external Bootstrap-Theme
		externalBootstrapTheme = //netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css
 		# cat=basic/file/2; type=string; label=Internal Bootstrap Theme: include an internal Bootstrap-Theme
		internalBootstrapTheme = EXT:t3sbootstrap/Resources/Public/Template/css/t3sbootstrap.css

		# cat=basic/other/1; type=string; label=Company Name: is shown in the navbar and breadcrumb
		company.name = Millerntor Gallery
		# cat=basic/other/3; type=string; label=Copyright information: e.g.: © 2014 Company Show (Dependencies: plugin.t3sbootstrap_configuration.styles.footer.show = 1)
		copyright_information =

		pageTitle {
			# cat=basic/other/4; type=string; label=Page Title Prefix: e.g.: Company -
			prefix =
			# cat=basic/other/5; type=string; label=Page Title Suffix:
			suffix =
		}

 		# cat=advanced/enable/4; type=boolean; label=Indexed Search Engine: Enables cached pages to be indexed.
		index.enable = 1

		logo {
			# cat=basic/enable/3; type=boolean; label=Logo: Enable a logo in the header or jumbotron.
			enable = 1
			# cat=basic/file/3; type=string; label=Path to your Logo:
			path = EXT:vca_millerntor_theme/Resources/Public/Images/millerntor_gallery.png
			# cat=basic/file/3; type=string; label=Path to your Logos back:
			path_back = EXT:vca_millerntor_theme/Resources/Public/Images/back_millerntor_gallery.png
			# cat=basic/110/height; type=int+; label=Height: The image will not be resized!
	    height                          = 150	
	    # cat=basic/110/width; type=int+; label=Width: The image will not be resized!
	    width                           = 119
		}

	}

	pages {
		# cat=page/other/1; type=int+; label=Homepage Uid:
		homepage.uid = 1
		# cat=page/other/2; type=small; label=Pages with Affix Nav: Comma-separated list of page ids. (data-target="#scrollspy" data-spy="scroll" is added to the body tag)
		affix.uidList =

	}

	navigation {
		# cat=menu/other/1; type=int+; label=NavBar Entry Level:
		navbar.entryLevel = 0
		# cat=menu/other/2; type=small; label=NavBar Exclude: uid list of pages
		navbar.excludeUidList =
		# cat=menu/other/3; type=small; label=NavBar-Right Menu: uid list of pages
		navbar-right.uidList =
		# cat=menu/other/4; type=string; label=NavBar-Right Label:
		navbar-right.label = <span class="glyphicon glyphicon-info-sign"></span>
		# cat=menu/enable/3; type=boolean; label=NavBar-Right Search Form: indexed_search should be loaded
		navbar.search.enable = 0
		# cat=menu/enable/5; type=boolean; label=Breadcrumb Menu:
		breadcrumb.enable = 0
		# cat=menu/enable/6; type=boolean; label=Submenu in Sidebar:
		sidebar-subMenu.enable = 1
		# cat=menu/other/8; type=small; label=Footer Menu: uid list of pages (Dependencies: plugin.t3sbootstrap_configuration.styles.footer.show = 1)
		footer.uidList =
		footer.MenuPid = 8
		# cat=menu/enable/7; type=boolean; label=Footer Print Button: (Dependencies: plugin.t3sbootstrap_configuration.styles.footer.show = 1)
		footer.printButton.enable = 1
		# cat=menu/other/6; type=small; label=Sidebar Submenu Exclude: uid list of pages
		sidebar-subMenu.excludeUidList =
	}

	navigation_lang {
		# cat=menu/language/4; type=boolean; label=NavBar-Right Language Menu: enable language menu
		enable = 0
		# cat=menu/language/5; type=string; label=NavBar-Right Language Menu Label:
		navBarLabel = <span class="glyphicon glyphicon-globe"></span>
		# cat=basic/language/1; type=small; label=Languages: uid list of languages
		languages = 0,1
		# cat=basic/language/2; type=string; label=Language Labels: is shown in the language menu ( separate the labels ​​by |*| )
		labels = <img title="de" alt="de" src="../typo3/sysext/t3skin/images/flags/de.png"> Deutsch |*| <img title="gb" alt="gb" src="../typo3/sysext/t3skin/images/flags/gb.png"> Englisch
	}

	styles {
		# cat=page/enable/1; type=boolean; label=Jumbotron Full Width:
		jumbotron.fullwidth = 1
		# cat=page/enable/2; type=boolean; label=Jumbotron Background Image: First image from page:media is shown
		jumbotron.bgImg.enable = 0
		# cat=page/enable/3; type=boolean; label=Page-Header: Header (H1) with subheader (small) shown in the Jumbotron or on Top.
		bsHeader.enable = 0
		# cat=menu/enable/1; type=boolean; label=NavBar Inverted:
		navbar.style.inverse = 1
		# cat=menu/enable/2; type=boolean; label=NavBar Fixed to top:
		navbar.style.fixed.top = 1
		# cat=page/dims/3; type=int+; label=NavBar Height: Is used as padding-top in the body tag (in px)
		navbar.style.height = 10
		# cat=page/enable/4; type=boolean; label=Footer Full Width:
		navbar.footer.fullwidth = 0
		# cat=page/dims/1; type=int+; label=Jumbotron Bg Image max. Width:
		jumbotron.bgImg.maxWidth = 1920
		# cat=page/dims/2; type=int+; label=Jumbotron Bg Image max. Height:
		jumbotron.bgImg.maxHeight = 400
		# cat=page/enable/4; type=boolean; label=Show Default Footer: Shows the default copyright-information and navigation in the footer if set. (0 = clears the entire footer default content)
		footer.show = 1
	}

	extensions {
		# cat=basic/enable/4; type=boolean; label=Lightbox: Include jquery-colorbox and configuration
		lightbox.enable = 1

		# cat=page/other/3; type=int+; label=Search Result Uid:
		indexed_search.page =

		formhandler {
			contact-form {
				email {
					user {
						# cat=basic/other/7; type=string; label=Formhandler - User email sender:Email address to use as sender address for the user email. (if used)
						sender_email =
					}
					admin {
						# cat=basic/other/8; type=string; label=Formhandler - Admin email sender:Email address to use as sender address for the admin email. (if used)
						sender_email =
						# cat=basic/other/9; type=string; label=Formhandler -Admin email recipient:Email address of an admin to receive the contact request. (if used)
						to_email =
					}
				}

				# cat=page/other/4; type=int+; label=Formhandler Redirect Page: Page ID to redirect after successful form submission. (if used)
				redirectPage =
			}
		}

	}
}

[globalVar = GP:L = 1]
plugin.t3sbootstrap_configuration.navigation_lang.labels = <img title="de" alt="de" src="../typo3/sysext/t3skin/images/flags/de.png"> German |*| <img title="gb" alt="gb" src="../typo3/sysext/t3skin/images/flags/gb.png"> English
[global]
