# **********************************************************
# BOOTSTAP: Changes of content element rendering (section_frame)
# **********************************************************

tt_content {
	stdWrap.innerWrap {
		cObject = CASE
		cObject {
			key.field = section_frame

			26 =< tt_content.stdWrap.innerWrap.cObject.default
			26.20.10.value = hidden

			27 =< tt_content.stdWrap.innerWrap.cObject.default
			27.20.10.value = hidden-xs hidden-sm

			28 =< tt_content.stdWrap.innerWrap.cObject.default
			28.20.10.value = visible-xs visible-sm

			29 =< tt_content.stdWrap.innerWrap.cObject.default
			29.20.10.value = hidden-lg hidden-md

			30 =< tt_content.stdWrap.innerWrap.cObject.default
			30.20.10.value = visible-lg visible-md

			40 =< tt_content.stdWrap.innerWrap.cObject.default
			40.20.10.value = well

			41 =< tt_content.stdWrap.innerWrap.cObject.default
			41.20.10.value = well well-lg

			42 =< tt_content.stdWrap.innerWrap.cObject.default
			42.20.10.value = well well-sm

			45 =< tt_content.stdWrap.innerWrap.cObject.default
			45.20.10.value = alert alert-success

			46 =< tt_content.stdWrap.innerWrap.cObject.default
			46.20.10.value = alert alert-info

			47 =< tt_content.stdWrap.innerWrap.cObject.default
			47.20.10.value = alert alert-warning

			48 =< tt_content.stdWrap.innerWrap.cObject.default
			48.20.10.value = alert alert-danger

			48 =< tt_content.stdWrap.innerWrap.cObject.default
			48.20.10.value = alert alert-danger

			50 =< tt_content.stdWrap.innerWrap.cObject.default
			50.20.10.value = bs-callout bs-callout-danger

			51 =< tt_content.stdWrap.innerWrap.cObject.default
			51.20.10.value = bs-callout bs-callout-warning

			52 =< tt_content.stdWrap.innerWrap.cObject.default
			52.20.10.value = bs-callout bs-callout-info

		}
	}
}


# **********************************************************
# BOOTSTAP: Nav
# **********************************************************

tt_content.menu.20.default.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.menu.20.1.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.menu.20.3.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.menu.20.4.stdWrap.outerWrap = <dl class="dl-horizontal">|</dl>
tt_content.menu.20.5.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.menu.20.6.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.menu.20.7.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.menu.20.7.2.wrap = <ul class="nav nav-pills nav-stacked" style="padding-left:10px;">|</ul>


# **********************************************************
# BOOTSTAP: Affix
# **********************************************************

tt_content.menu.20.9 >
tt_content.menu.20.9 = CONTENT
tt_content.menu.20.9 {
	wrap = <div id="scrollspy" class="bs-affix hidden-xs hidden-sm"><ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="160" data-offset-bottom="60">|</ul></div>
	table = tt_content
	select {
		pidInList = this
		orderBy = sorting
		where= colPos<1
		andWhere = sectionIndex!=0
		languageField = sys_language_uid
	}
	renderObj = TEXT
	renderObj {
		required = 1
		field = header
		htmlSpecialChars = 1
		typolink.parameter.field = pid
		typolink.section.field = uid
		typolink.ATagParams.dataWrap = data-target="#c{field:uid}"
		wrap = <li>|</li>
	}
}


# **********************************************************
# BOOTSTAP: Responsive tables
# **********************************************************

tt_content.table.20.stdWrap.wrap = <div class="table-responsive">|</div>


# **********************************************************
# BOOTSTAP: Image & Textpic
# **********************************************************

tt_content.image.20.1.params = class="img-responsive"
tt_content.image.20.1.params.cObject = CASE
tt_content.image.20.1.params.cObject {
	key.field = tx_t3sbootstrap_imagestyle

	default = TEXT
	default.value = class="img-responsive" style="width:100%;"
	default.override =  class="img-responsive"
	default.override.if.isInList.field = imageorient
	default.override.if.value = 25,26

	img-rounded = TEXT
	img-rounded.value = class="img-responsive img-rounded" style="width:100%;"
	img-rounded.override =  class="img-responsive img-rounded"
	img-rounded.override.if.isInList.field = imageorient
	img-rounded.override.if.value = 25,26

	img-circle = TEXT
	img-circle.value = class="img-responsive img-circle" style="width:100%;"
	img-circle.override =  class="img-responsive img-circle"
	img-circle.override.if.isInList.field = imageorient
	img-circle.override.if.value = 25,26

	img-thumbnail = TEXT
	img-thumbnail.value = class="img-responsive img-thumbnail" style="width:100%;"
	img-thumbnail.override =  class="img-responsive img-thumbnail"
	img-thumbnail.override.if.isInList.field = imageorient
	img-thumbnail.override.if.value = 25,26
}

# intext-right-nowrap
tt_content.image.20.layout.25.override = <div class="row csc-textpic-responsive csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES######TEXT###</div>
# intext-left-nowrap
tt_content.image.20.layout.26.override = <div class="row csc-textpic-responsive csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES######TEXT###</div>

tt_content.textpic.20.text.wrap.cObject = CASE
tt_content.textpic.20.text.wrap.cObject {
	key.field = imageorient
	default = TEXT
	default.value = <div class="csc-textpic-text"> | </div>
	# intext-right-nowrap
	25 = TEXT
	25.value = <div class="col-md-6 col-md-pull-6"> | </div>
	# intext-left-nowrap
	26 = TEXT
	26.value = <div class="col-md-6"> | </div>
}

tt_content.image.20.rendering.singleNoCaption.allStdWrap.dataWrap.override.cObject = CASE
tt_content.image.20.rendering.singleNoCaption.allStdWrap.dataWrap.override.cObject {
	key.field = imageorient
	default = TEXT
	default.value = <div class="csc-textpic-imagewrap" data-csc-images="{register:imageCount}" data-csc-cols="{field:imagecols}"> | </div>
	# intext-right-nowrap
	25 = TEXT
	25.value = <div class="col-md-6 col-md-push-6" data-csc-images="{register:imageCount}" data-csc-cols="{field:imagecols}"> | </div>
	25.insertData = 1
	# intext-left-nowrap
	26 = TEXT
	26.value = <div class="col-md-6" data-csc-images="{register:imageCount}" data-csc-cols="{field:imagecols}"> | </div>
	26.insertData = 1
	override.cObject.if {
		value = html5
		equals.data = TSFE:config|config|doctype
	}
}

tt_content.image.20.1.sourceCollection {
  small >
  smallRetina >
  small.maxW = 330
  small.srcsetCandidate = 360w
  middle.maxW.cObject = CASE
  middle.maxW.cObject {
    key.field = imageorient
    # above-center, above-right, above-left, below-center, below-right, below-left
	default = COA
	default {
		10 = TEXT
		10 {
			cObject = CASE
			cObject {
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
		}
	}
	# intext-right
	17 = COA
	17 {
		10 = TEXT
		10 {
			cObject = CASE
			cObject {
				key.data = TSFE:page|backend_layout
				default = TEXT
				default.value = 349
				t3sbootstrap__1 = TEXT
				t3sbootstrap__1.value = 470
				t3sbootstrap__3 = TEXT
				t3sbootstrap__3.value = 227
				t3sbootstrap__4 = TEXT
				t3sbootstrap__4.value = 470
				t3sbootstrap__8 = TEXT
				t3sbootstrap__8.value = 227
			}
		}
	}
	# intext-left
	18 < .17
	# intext-right-nowrap
	25 < .17
	# intext-left-nowrap
	26 < .17
  }
  middle.srcsetCandidate = 992w
}


# **********************************************************
# BOOTSTAP: List & List group
# **********************************************************

tt_content.bullets = COA
tt_content.bullets {
	20 = FLUIDTEMPLATE
	20.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/ListGroup.html
}


# **********************************************************
# BOOTSTAP: Panel
# **********************************************************

tt_content.t3sbootstrap_panel = COA
tt_content.t3sbootstrap_panel {
	10 = FLUIDTEMPLATE
	10.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Panel.html
}


# **********************************************************
# BOOTSTAP: Mediaobject
# **********************************************************

tt_content.t3sbootstrap_mediaobject = COA
tt_content.t3sbootstrap_mediaobject {
	10 = FLUIDTEMPLATE
	10.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Mediaobject.html
}


# **********************************************************
# BOOTSTAP: Thumbnail
# **********************************************************

tt_content.gridelements_pi1.20.10.setup.thumbnails_container {
	innerWrap.cObject = COA
	innerWrap.cObject.10 < lib.stdheader
	cObject = FLUIDTEMPLATE
	cObject {
		file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Thumbnails.html
		partialRootPath = {$plugin.tx_t3sbootstrap.view.partialRootPath}
	}
}


# **********************************************************
# BOOTSTAP: Carousel
# **********************************************************

tt_content.gridelements_pi1.20.10.setup.carousel_container {
	innerWrap.cObject = COA
	innerWrap.cObject.10 < lib.stdheader
	cObject = FLUIDTEMPLATE
	cObject {
		file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Carousel.html
		partialRootPath = {$plugin.tx_t3sbootstrap.view.partialRootPath}
	}
}


# **********************************************************
# BOOTSTAP: Grid system
# **********************************************************

tt_content.gridelements_pi1.20.10.setup {
	two_columns < lib.gridelements.defaultGridSetup
	two_columns {
		innerWrap.cObject = COA
		innerWrap.cObject.10 < lib.stdheader

		cObject = FLUIDTEMPLATE
		cObject {
			file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/TwoColumns.html
		}
	}
	three_columns < lib.gridelements.defaultGridSetup
	three_columns {
		innerWrap.cObject = COA
		innerWrap.cObject.10 < lib.stdheader

		cObject = FLUIDTEMPLATE
		cObject {
			file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/ThreeColumns.html
		}
	}
}


# **********************************************************
# BOOTSTAP: Tap - (c) Stefan Schäfer www.merec.org/typo3/bootstrap3-tabs-mit-grid-elements-fuer-typo3
# **********************************************************

# First define the tab cObject, we want this in the container
tt_content.gridelements_pi1.20.10.setup.tabs_tab {
	innerWrap.cObject = COA
	innerWrap.cObject.10 < lib.stdheader

	# Add the ID and the Class to the tab container
	preCObject = LOAD_REGISTER
	preCObject {
		containerId.cObject = COA
		containerId.cObject {
			wrap = id="|"
			10 = TEXT
			10.wrap = tab-content-|
			10.field = uid
		}

		containerClasses.cObject = COA
		containerClasses.cObject {
			wrap = class="tab-pane |"

			# fade or empty
			10 = TEXT
			10.field = parentgrid_flexform_switch_effect
			10.noTrimWrap = | | |

			# We want the active flag on the first child
			20 = TEXT
			20.value = active in
			20.noTrimWrap = | | |
			20.if {
				 value = 1
				 equals.data = cObj:parentRecordNumber
				 equals.prioriCalc = 1
			}
		}
	}

	outerWrap = <div {register: containerId} {register: containerClasses}>|</div>
	outerWrap.insertData = 1

	# Render the children the default way
	columns.0 {
		renderObj = < tt_content
	}
}

# Define the Tab Container
tt_content.gridelements_pi1.20.10.setup.tabs_container {
	innerWrap.cObject = COA
	innerWrap.cObject.10 < lib.stdheader

	# Render navigation using fluid
	cObject = FLUIDTEMPLATE
	cObject {
		file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/Tab.html
	}

	# Add the renderObj of the tab directly, this prevents the "csc-default"-wrap
	columns.0 {
		renderObj = < tt_content.gridelements_pi1
	}
}


# **********************************************************
# BOOTSTAP: Collapse - (c) Stefan Schäfer www.merec.org/typo3/bootstrap3-collapse-mit-grid-elements-fuer-typo3
# edited by Helmut Hackbarth
# **********************************************************

tt_content.gridelements_pi1.20.10.setup.collapsible_accordion {

  # Build: <div class="panel-heading">|</div>
	innerWrap.cObject < lib.stdheader
	innerWrap.cObject {
		wrap = <div class="panel-heading">|</div>
		3.headerClass.cObject.928374 = TEXT
		3.headerClass.cObject.928374 {
			value = panel-title
			noTrimWrap = | | |
		}
		10.setCurrent.typolink {
			parameter >
			parameter = #collapse-{field: uid}
			parameter.insertData = 1
			ATagParams = class="accordion-toggle" data-toggle="collapse" data-parent="#collapsible-{field: parentgrid_uid}"
			ATagParams.insertData = 1
		}
		stdWrap.dataWrap = |
	}

	# Build: <div class="panel panel-[default,primary,success,...]">|</div>
	outerWrap = <div class="panel {field: flexform_style}">|</div>
	outerWrap.insertData = 1

	# Build: <div id="collapse-[panel-uid]" class="panel-collapse collapse [in]">|</div>
	columns.0 {
		renderObj = < tt_content

		wrap.cObject = COA
		wrap.cObject {

			10 = COA
			10 {
				10 = TEXT
				10.wrap = <div id="collapse-|"
				10.field = uid

				20 = TEXT
				20.value = class="panel-collapse collapse
				20.noTrimWrap = | ||

				30 = TEXT
				30.value = in
				30.noTrimWrap = | ||
				30.if {
					value = 1
					equals.field = flexform_active
				}

				40 = TEXT
				40.value = ">
			}

			20 = TEXT
			20.value = <div class="panel-body">|</div></div>
		}

	}
}

tt_content.gridelements_pi1.20.10.setup.collapsible_container {
	# Wrap collapsible
	# Build: <div class="panel-group" id="collapsible-[container-uid]">|</div>
	outerWrap = <div class="panel-group" id="collapsible-{field: uid}">|</div>
	outerWrap.insertData = 1

	innerWrap.cObject = COA
	innerWrap.cObject.10 < lib.stdheader

	# Direct rendering of the collapsible elements, prevents "csc-default"-wrap
	columns.0 {
		renderObj < tt_content.gridelements_pi1
	}

}

# **********************************************************
# VCA: Isotope container
# **********************************************************

tt_content.gridelements_pi1.20.10.setup.isotope_container {
	# Wrap isotope
	# Build: <div id="container">|</div>
	outerWrap = <div id="container" class="test">|</div>
	outerWrap.insertData = 1

	# Direct rendering of the isotope elements, prevents "csc-default"-wrap
	columns.0 {
		renderObj < tt_content
		renderObj {
			stdWrap.innerWrap > 
			stdWrap.innerWrap = <div class="item">|</div>
		}
	}

}

