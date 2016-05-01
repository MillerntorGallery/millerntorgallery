#-------------------------------------------------------------------------------
#	GENERAL: Logo / preassigned
#-------------------------------------------------------------------------------
lib.general.logo =

#-------------------------------------------------------------------------------
#	GENERAL: htmlarea and lib.parseFunc_RTE configuration
#-------------------------------------------------------------------------------

lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
lib.parseFunc_RTE.externalBlocks := addToList(address,footer)
# removed in v7.1
#lib.parseFunc_RTE.externalBlocks.blockquote.callRecursive.tagStdWrap.HTMLparser.tags.blockquote.overrideAttribs >
lib.parseFunc_RTE.externalBlocks.address.stripNL=1
lib.parseFunc_RTE.externalBlocks.address.stdWrap.parseFunc = < lib.parseFunc

#-------------------------------------------------------------------------------
#	GENERAL: Background image for jambotron from page:media
#-------------------------------------------------------------------------------
lib.jumbotronBgImgDiv = COA
lib.jumbotronBgImgDiv {
	10 = TEXT
	10 {
		value = <div class="jumbotron hidden-xs hidden-sm">	
		if.isFalse.data = levelmedia:-1, slide
	}
	20 = FILES
	20 {
		references {
			data = levelmedia:-1, slide
			listNum = 0
		}
		renderObj = COA
		renderObj {
			10 = IMG_RESOURCE
			10 {
				file.import.data = file:current:publicUrl
				file.width = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.maxWidth}
				file.height = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.maxHeight}c
			}
			wrap = <div class="jumbotron hidden-xs hidden-sm" style="background: url('/|') no-repeat center top; display: block; height: auto; max-width: 100%; -webkit-background-size: cover; -moz-background-size: cover; background-size: cover; -o-background-size: cover;">	
		}
		if.isTrue.data = levelmedia:-1, slide
	}
}

#-------------------------------------------------------------------------------
#	General: Print Button
#-------------------------------------------------------------------------------
lib.printButton = COA
lib.printButton {
	10 = TEXT
	10.value = <span class="glyphicon glyphicon-print"></span>
	stdWrap.wrap = <div class="print-button">|</div>
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
		30.data = GP:tx_news_pi1 | news
		30.wrap = &tx_news_pi1[news]=|
		30.required = 1

		40 = TEXT
		40.data = GP:tx_news_pi1 | controller
		40.wrap = &tx_news_pi1[controller]=|
		40.required = 1

		50 = TEXT
		50.data = GP:tx_news_pi1 | action
		50.wrap = &tx_news_pi1[action]=|
		50.required = 1

		60 = TEXT
		60.data = GP:cHash
		60.wrap = &cHash=|
		60.required = 1

		70 = TEXT
		70.value = &type=98
	}
}

#-------------------------------------------------------------------------------
#	General: Login / Logout - Button
#-------------------------------------------------------------------------------
lib.loginLogout = COA
lib.loginLogout {
    10 = TEXT
    10 {
        value = <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Login
        lang.de = <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Einloggen
        typolink {
            parameter = {$plugin.t3sbootstrap_configuration.extensions.login.uid}
        }
        if.isFalse.data = TSFE:fe_user|user|username
    }
    20 < .10
    20.if.negate = 1
    20 {
        value = Logout
        lang.de = Ausloggen
        typolink {
            additionalParams = &logintype=logout
            wrap = <span class="badge">{TSFE:fe_user|user|username}</span> |
            wrap.insertData = 1
            ATagBeforeWrap = 1
        }
    }
}