####################
#### NAVIGATION ####
####################
lib.navigation.main = COA
lib.navigation.main {
    10 = HMENU
    10 {
        1 = TMENU
        1 {
            wrap = <ul class="nav navbar-nav navbar-main">|</ul>
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
                ATagParams = class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
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
        special.value = 0,1,2
        special.normalWhenNoLanguage = 0
        wrap =
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                linkWrap = <li>|</li>
                stdWrap.override = English || Dansk || Deutsch
                doNotLinkIt = 1
                stdWrap {
                    typolink {
                        parameter.data = page:uid
                        additionalParams = &L=0 || &L=1 || &L=2
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
       	special.value = {$page.specialPages.footerMenuPid}
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
 
