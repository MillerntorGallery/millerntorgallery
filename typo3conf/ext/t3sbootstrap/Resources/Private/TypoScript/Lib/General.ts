#-------------------------------------------------------------------------------
#	GENERAL: Image rendering (Thumbnail and Media object)
#-------------------------------------------------------------------------------

lib.imageRendering = IMAGE
lib.imageRendering {
	file {
		import.field = uid
		treatIdAsReference = 1
	    width.field = width
	    width.wrap = |c
	    height.field = height
	    height.wrap = |c
	}
	titleText.field = title
	altText.field = altText
	params = class="img-responsive {field: params}"
	params.insertData = 1

	layoutKey = {$styles.content.imgtext.layoutKey}
	layout {
	    default {
	     element = <img src="###SRC###" width="###WIDTH###" height="###HEIGHT###" ###PARAMS### ###ALTPARAMS### ###BORDER### ###SELFCLOSINGTAGSLASH###>
	     source =
	    }
	    srcset {
	      element = <img src="###SRC###" srcset="###SOURCECOLLECTION###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###>
	      source = |*|###SRC### ###SRCSETCANDIDATE###,|*|###SRC### ###SRCSETCANDIDATE###
	    }
	}
	sourceCollection {
		small >
		smallRetina >

		small.maxW = 330
		small.srcsetCandidate = 360w

		middle.maxW.cObject = CASE
		middle.maxW.cObject {
			key.data = TSFE:page|backend_layout
			default = TEXT
			default.value = 698
			t3sbootstrap__1 = TEXT
			t3sbootstrap__1.value = 940
			t3sbootstrap__3 = TEXT
			t3sbootstrap__3.value = 455
			t3sbootstrap__4 = TEXT
			t3sbootstrap__4.value = 940
			t3sbootstrap__8 = TEXT
			t3sbootstrap__8.value = 455
		}
		middle.srcsetCandidate = 992w
	}
}


#-------------------------------------------------------------------------------
#	GENERAL: header -> Bootstrap subheader
#-------------------------------------------------------------------------------

lib.stdheader.3.subheader = TEXT
lib.stdheader.3.subheader {
	field = subheader
	required = 1
	noTrimWrap = | <small>|</small>|
}
#lib.stdheader.5 >
lib.stdheader.10.1.dataWrap >
lib.stdheader.10.1.noTrimWrap = |<div class="page-header"><h1{register:headerClass}>| {register:subheader}</h1></div>|
lib.stdheader.10.1.insertData = 1
lib.stdheader.10.2.dataWrap >
lib.stdheader.10.2.noTrimWrap = |<h2{register:headerClass}>| {register:subheader}</h2>|
lib.stdheader.10.2.insertData = 1
lib.stdheader.10.3.dataWrap >
lib.stdheader.10.3.noTrimWrap = |<h3{register:headerClass}>| {register:subheader}</h3>|
lib.stdheader.10.3.insertData = 1
lib.stdheader.10.4.dataWrap >
lib.stdheader.10.4.noTrimWrap = |<h4{register:headerClass}>| {register:subheader}</h4>|
lib.stdheader.10.4.insertData = 1
lib.stdheader.10.5.dataWrap >
lib.stdheader.10.5.noTrimWrap = |<h5{register:headerClass}>| {register:subheader}</h5>|
lib.stdheader.10.5.insertData = 1
lib.stdheader.20 >


#-------------------------------------------------------------------------------
#	GENERAL: Navbar-brand (link: back home)
#-------------------------------------------------------------------------------

lib.navbar-brand = TEXT
lib.navbar-brand.value = {$plugin.t3sbootstrap_configuration.general.company.name}
lib.navbar-brand.typolink {
	parameter = {$plugin.t3sbootstrap_configuration.pages.homepage.uid}
	ATagParams = class="navbar-brand"
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
