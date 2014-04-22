
#-------------------------------------------------------------------------------
#	GENERAL: h1 -> Bootstrap Page Header
#-------------------------------------------------------------------------------
lib.stdheader.3 >
lib.stdheader.3 = LOAD_REGISTER
lib.stdheader.3.subheader.cObject = COA
lib.stdheader.3.subheader.cObject {
	10 = TEXT
	10 {
		field = subheader
		required = 1
		noTrimWrap = | <small>|</small>|
	}
}
lib.stdheader.7 >
lib.stdheader.10.1.dataWrap >
lib.stdheader.10.1.noTrimWrap = |<div class="page-header"><h1{register:headerClass}>| {register:subheader}</h1></div>|
lib.stdheader.10.1.insertData = 1
lib.stdheader.20 >
lib.stdheader.30 >


#-------------------------------------------------------------------------------
#	GENERAL: Navbar-brand (link: back home)
#-------------------------------------------------------------------------------

lib.navbar-brand = TEXT
lib.navbar-brand.value = {$plugin.t3sbootstrap_configuration.general.company.name}
lib.navbar-brand.typolink {
	parameter = {$plugin.t3sbootstrap_configuration.pages.homepage.uid}
	ATagParams = class="navbar-brand"
	#ATagParams = title="{$plugin.t3sbootstrap_configuration.general.company.name}" class="navbar-brand"
	target = _top
}


#-------------------------------------------------------------------------------
#	GENERAL: Logo
#-------------------------------------------------------------------------------

lib.general.logo = COA
lib.general.logo {
	10 = IMAGE
	10 {
		file = {$plugin.t3sbootstrap_configuration.general.logo.path}
		stdWrap.typolink.parameter = {$plugin.t3sbootstrap_configuration.url}
		if.value = 1
		if.equals = {$plugin.t3sbootstrap_configuration.general.logo.enable}
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Page Title/Header
#-------------------------------------------------------------------------------

lib.bs_header = COA
lib.bs_header {
	wrap = <div class="bs-header"><h1>|</h1></div>

	5 < lib.general.logo

	10 = TEXT
	10 {
		value = {page:title}
		insertData = 1
	}

	20 = TEXT
	20 {
		value = {page:subtitle}
		insertData = 1
		noTrimWrap = | <small>|</small>|
		if.isTrue.data = page:subtitle
	}
}


#-------------------------------------------------------------------------------
#	GENERAL: htmlarea and lib.parseFunc_RTE configuration
#-------------------------------------------------------------------------------

lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
lib.parseFunc_RTE.externalBlocks := addToList(address)
lib.parseFunc_RTE.externalBlocks.blockquote.callRecursive.tagStdWrap.HTMLparser.tags.blockquote.overrideAttribs >
lib.parseFunc_RTE.externalBlocks.address.stripNL=1


#-------------------------------------------------------------------------------
#	GENERAL: Background image for jambotron from page:media
#-------------------------------------------------------------------------------

lib.jumbotronBgImgDiv = COA
lib.jumbotronBgImgDiv {
  10 = TEXT
  10 {
    value = <div class="jumbotron hidden-xs">
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
        file.width = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.maxWidth}c
        file.height = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.maxHeight}c
      }
	  wrap = <div class="jumbotron" style="background: url('/|') no-repeat center top; display: block; height: auto; max-width: 100%;">
    }
    if.isTrue.data = levelmedia:-1, slide

  }
}
