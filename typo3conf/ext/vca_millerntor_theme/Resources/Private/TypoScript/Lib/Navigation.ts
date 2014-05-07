#-------------------------------------------------------------------------------
#	NAVIGATION: Main (Bootstrap NavBar)
#-------------------------------------------------------------------------------
lib.navigation.main > 
####################
#### NAVIGATION ####
####################
lib.navigation.main = COA
lib.navigation.main {
    10 = HMENU
    10 {
    		entryLevel = {$plugin.t3sbootstrap_configuration.navigation.navbar.entryLevel}
				excludeUidList = {$plugin.t3sbootstrap_configuration.navigation.navbar.excludeUidList}
    		
        1 = TMENU
        1 {
            wrap = <ul class="nav nav-justified navbar-main navbar-collapse collapse">|</ul>
            expAll = 1
            noBlur = 1
            NO = 1
            NO {
                ATagTitle.field = abstract // description // title
                ATagBeforeWrap = 1
                linkWrap = |<mark class="bar"></mark>
                wrapItemAndSub = <li>|</li>
                wrapItemAndSub.override.cObject = COA
                wrapItemAndSub.override.cObject {
                    if {
                        value = 4
                        equals.field = doktype
                        isTrue = 1
                        isTrue.if {
                            value.data = TSFE:page|uid
                            equals.field = shortcut
                        }
                    }
                    10 = TEXT
                    10.value = <li class="active">|</li>
                }
            }
            ACT < .NO
            ACT {
                wrapItemAndSub = <li class="active">|</li>
            }
            CUR < .ACT
            IFSUB < .NO
            IFSUB {
                doNotLinkIt = 0
                stdWrap.innerWrap = |<b class="caret"></b>
                ATagParams = class="dropdown-toggle disabled" data-toggle="dropdown" data-hover="dropdown"
                #<a href="#" class="dropdown-toggle" data-toggle="dropdown">
                wrapItemAndSub = <li class="dropdown">|</li>
            }
            ACTIFSUB < .IFSUB
            ACTIFSUB {
                wrapItemAndSub = <li class="active dropdown">|</li>
            }
            CURIFSUB < .ACTIFSUB
        }
        2 < .1
        2 {
            wrap =  <ul class="dropdown-menu">|</ul>
            SPC = 1
            SPC {
                wrapItemAndSub = <li class="divider"></li><li class="dropdown-header">|</li>
            }
            IFSUB >
            ACTIFSUB >
            CURIFSUB >
        }
    }
}
lib.navigation.subnavigation = COA
lib.navigation.subnavigation {
    10 = HMENU
    10 {
        entryLevel = 1
        1 = TMENU
        1 {
            wrap = <div class="hidden-print hidden-xs hidden-sm" role="complementary"><div class="list-group">|</div></div>
            expAll = 1
            noBlur = 1
            NO = 1
            NO {
                ATagTitle.field = abstract // description // title
                ATagParams = class="list-group-item"
                wrapItemAndSub = |
            }

            ACT < .NO
            ACT {
                ATagParams = class="list-group-item active"
            }
            CUR < .ACT
        }
    }
}

#######################
#### LANGUAGE MENU ####
#######################
lib.language = COA
lib.language {

    ###################################################
    #### EXAMPLE FOR TYPOSCRIPT LANGUAGE OVERRIDES ####
    #### its not needed in this example            ####
    ###################################################
    #10 = TEXT
    #10 {
    #    value = Language
    #    value.lang.da = Sprog
    #    value.lang.de = Sprache
    #    noTrimWrap = |<li><span class="glyphicon glyphicon-globe"></span> |</li>|
    #}

    20 = HMENU
    20 {
        special = language
        special.value = 0,1
        special.normalWhenNoLanguage = 0
        wrap =
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                linkWrap = <li>|</li>
                stdWrap.override = en||de
                doNotLinkIt = 1
                stdWrap {
                    typolink {
                        parameter.data = page:uid
                        additionalParams = &L=0 || &L=1
                        addQueryString = 1
                        addQueryString.exclude = L,id,cHash,no_cache
                        addQueryString.method = GET
                        useCacheHash = 1
                        no_cache = 0
                    }
                }
            }
            ACT < .NO
            ACT.linkWrap = <li class="active">|</li>
            #### NO TRANSLATION AVAILABLE STATES ####
            USERDEF1 < .NO
            USERDEF1 {
                linkWrap = <li class="text-muted">|</li>
                stdWrap.typolink >
            }
            USERDEF2 < .ACT
            USERDEF2 {
                linkWrap = <li class="text-muted">|</li>
                stdWrap.typolink >
            }
        }
    }
    wrap = <ul id="language_menu" class="list-inline">|</ul>
}



lib.navigation.footernavigation= COA
lib.navigation.footernavigation {
    10 = HMENU
    10 {
       	special = directory
       	special.value = {$plugin.t3sbootstrap_configuration.navigation.footer.MenuPid}
        1 = TMENU
        1 {
            wrap = <ul id="footer_menu" class="list-inline">|</ul>
            expAll = 1
            noBlur = 1
            NO = 1
            NO {
            		linkWrap = <li>|</li>
                ATagTitle.field = abstract // description // title
                wrapItemAndSub = |
            }

            ACT < .NO
            ACT {
                linkWrap = <li class="active">|</li>
            }
            CUR < .ACT
        }
    }
}
 



#-------------------------------------------------------------------------------
#	NAVIGATION: NavBarRight - inside the NavBar (lib.navigation.main)
#-------------------------------------------------------------------------------
[globalVar = LIT:0 != {$plugin.t3sbootstrap_configuration.navigation.navbar-right.uidList}]
lib.navigation.navbar-right = COA
lib.navigation.navbar-right {

	wrap = <li class="dropdown">|</li>

	5 = TEXT
	5 {
		wrap = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a>
		value = {$plugin.t3sbootstrap_configuration.navigation.navbar-right.label}
	}

	10 = HMENU
	10 {
		special = list
		special.value = {$plugin.t3sbootstrap_configuration.navigation.navbar-right.uidList}

		wrap = <ul class="dropdown-menu">|</ul>

		1 = TMENU
		1 {
			expAll = 1

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				#ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}
			ACT <.NO
			ACT {
				wrapItemAndSub = <li class="active">|</li>
			}
		}
	}
}
[global]


#-------------------------------------------------------------------------------
#	NAVIGATION: Language menu - inside the NavBar (lib.navigation.main)
#-------------------------------------------------------------------------------

lib.navigation.languageswitch = COA
lib.navigation.languageswitch {

	wrap = <li class="dropdown">|</li>

	5 = TEXT
	5 {
		wrap = <a href="#" class="dropdown-toggle" data-toggle="dropdown">|</a>
		value = {$plugin.t3sbootstrap_configuration.navigation_lang.navBarLabel}
	}

	10 = HMENU
	10 {
		special = language
		special.value = {$plugin.t3sbootstrap_configuration.navigation_lang.languages}

		wrap = <ul id="languageMenu" class="dropdown-menu">|</ul>

		1 = TMENU
		1 {
			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				stdWrap.cObject = TEXT
				stdWrap.cObject.value = {$plugin.t3sbootstrap_configuration.navigation_lang.labels}

			}
			ACT <.NO
			ACT {
				wrapItemAndSub = <li class="active">|</li>
			}
		}
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Bootstrap Breadcrumbs
#-------------------------------------------------------------------------------

lib.navigation.breadcrumb = COA
lib.navigation.breadcrumb {
	wrap = <ol class="breadcrumb">|</ol>

	5 = TEXT
	5 {
		value = {$plugin.t3sbootstrap_configuration.general.company.name}
		typolink {
			parameter = {$plugin.t3sbootstrap_configuration.pages.homepage.uid}
			#ATagParams = title="{$plugin.t3sbootstrap_configuration.general.company.name}"
			target = _top
		}
		wrap = <li>|</li>
	}
	10 = HMENU
	10 {
		special = rootline
		special.range =  1

		1 = TMENU
		1 {

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				#ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}

			CUR <.NO
			CUR {
				wrapItemAndSub = <li class="active">|</li>
				doNotLinkIt = 1
			}
		}
	}
	# Add news title if on single view
	20 = RECORDS
	20 {
		if.isTrue.data = GP:tx_news_pi1|news
		dontCheckPid = 1
		tables = tx_news_domain_model_news
		source.data = GP:tx_news_pi1|news
		source.intval = 1
		conf.tx_news_domain_model_news = TEXT
		conf.tx_news_domain_model_news {
			field = title
			htmlSpecialChars = 1
		}
		wrap =  <li>|</li>
		wrap.if.isTrue.data = GP:tx_news_pi1|news
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Sidebar Sub-Menu (if sub pages)
#-------------------------------------------------------------------------------

lib.navigation.sidebar = COA
lib.navigation.sidebar {

	wrap = <ul class="nav nav-pills nav-stacked">|</ul>

	10 = HMENU
	10 {
		entryLevel = 1
		excludeUidList = {$plugin.t3sbootstrap_configuration.navigation.sidebar-subMenu.excludeUidList}

		1 = TMENU
		1 {

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				#ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}

			ACT <.NO
			ACT.wrapItemAndSub = <li class="active">|</li>
			ACT.ATagParams = class="active"
			ACT.ATagBeforeWrap = 1

		}
	}
}


#-------------------------------------------------------------------------------
#	NAVIGATION: Footer
#-------------------------------------------------------------------------------

temp.print-link = COA
temp.print-link {
	10 = TEXT
	10.value = <span class="glyphicon glyphicon-print"></span>
	stdWrap.wrap = <li>|</li>
	stdWrap.typolinkno_cache = 1
	stdWrap.typolink.target = print
	stdWrap.typolink.ATagParams = target = _blank
	stdWrap.typolink.parameter.cObject = COA
	stdWrap.typolink.parameter.cObject {

        5 = TEXT
        5.data = page:uid
        5.wrap = index.php?id=|
        5.required = 1

        10 = TEXT
        10.value = &no_cache=1

        20 = TEXT
        20.data = GP:L
        20.wrap = &L=|
        20.required = 1

        30 = TEXT
        30.data = GP:tx_ttnews | backPid
        30.wrap = &tx_ttnews[backPid]=|
        30.required = 1

        40 = TEXT
        40.data = GP:tx_ttnews | tt_news
        40.wrap = &tx_ttnews[tt_news]=|
        40.required = 1

        50 = TEXT
        50.data = GP:cHash
        50.wrap = &cHash=|
        50.required = 1

        60 = TEXT
        60.value = &type=98
    }
}


lib.navigation.footer = COA
lib.navigation.footer {

	10 = HMENU
	10 {
		special = list
		special.value = {$plugin.t3sbootstrap_configuration.navigation.footer.uidList}

		1 = TMENU
		1 {
			expAll = 1

			NO = 1
			NO {
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}
		}
		if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.footer.uidList}
	}

	20 < temp.print-link
	20 {
		if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.footer.printButton.enable}
	}

	wrap = <ul class="nav nav-pills pull-right">|</ul>
}

