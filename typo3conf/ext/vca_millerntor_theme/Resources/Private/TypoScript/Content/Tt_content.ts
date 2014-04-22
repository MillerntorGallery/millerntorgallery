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
# BOOTSTAP: Image
# **********************************************************

tt_content.image.20.1.params.cObject = CASE
tt_content.image.20.1.params.cObject {
	key.field = tx_t3sbootstrap_imagestyle
	0 = TEXT
	0.value =
	1 = TEXT
	1.value = class="img-rounded img-responsive"
	2 = TEXT
	2.value = class="img-circle img-responsive"
	3 = TEXT
	3.value = class="img-thumbnail img-responsive"
}


# **********************************************************
# BOOTSTAP: List & List group
# **********************************************************

tt_content.bullets = COA
tt_content.bullets {
	#10 = < lib.stdheader
	20 = FLUIDTEMPLATE
	20.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/ListGroup.html
}


# **********************************************************
# BOOTSTAP: Panel
# **********************************************************

tt_content.t3sbootstrap_panel = COA
tt_content.t3sbootstrap_panel {
	#10 = < lib.stdheader
	20 = FLUIDTEMPLATE
	20.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Panel.html
}


# **********************************************************
# BOOTSTAP: Mediaobject
# **********************************************************

tt_content.t3sbootstrap_mediaobject = COA
tt_content.t3sbootstrap_mediaobject {
	#10 = < lib.stdheader
	20 = FLUIDTEMPLATE
20.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Mediaobject.html
}


# **********************************************************
# BOOTSTAP: Thumbnail
# **********************************************************

tt_content.t3sbootstrap_thumbnail = COA
tt_content.t3sbootstrap_thumbnail {
	#10 = < lib.stdheader
}

tt_content.gridelements_pi1.20.10.setup.thumbnails_container {

	cObject = FLUIDTEMPLATE
	cObject {
		file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Thumbnails.html
		partialRootPath = {$plugin.tx_t3sbootstrap.view.partialRootPath}
	}

	columns.0 {
		renderObj = < tt_content.t3sbootstrap_thumbnail
	}
}


# **********************************************************
# BOOTSTAP: Carousel
# **********************************************************

tt_content.t3sbootstrap_carousel = COA
tt_content.t3sbootstrap_carousel {
	#10 = < lib.stdheader
}

tt_content.gridelements_pi1.20.10.setup.carousel_container {

	cObject = FLUIDTEMPLATE
	cObject {
		file = {$plugin.tx_t3sbootstrap.view.templateRootPath}BootstrapComponents/Carousel.html
		partialRootPath = {$plugin.tx_t3sbootstrap.view.partialRootPath}
	}

	columns.0 {
		renderObj = < tt_content.t3sbootstrap_carousel
	}
}


# **********************************************************
# BOOTSTAP: Grid system
# **********************************************************

tt_content.gridelements_pi1.20.10.setup {

	two_columns < lib.gridelements.defaultGridSetup
	two_columns {

		cObject = FLUIDTEMPLATE
		cObject {
			file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Gridelements/TwoColumns.html
		}
	}
	three_columns < lib.gridelements.defaultGridSetup
	three_columns {

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
# **********************************************************

tt_content.gridelements_pi1.20.10.setup.collapsible_accordion {

  # Build: <div class="panel-heading">|</div>
	innerWrap.cObject = COA
	innerWrap.cObject {
		wrap = <div class="panel-heading">|</div>

		10 < lib.stdheader
		10.3.headerClass.cObject.928374 = TEXT
		10.3.headerClass.cObject.928374 {
			value = panel-title
			noTrimWrap = | | |
		}
		10.10.setCurrent.typolink {
			parameter >
			parameter = #collapse-{field: uid}
			parameter.insertData = 1
			ATagParams = class="accordion-toggle" data-toggle="collapse" data-parent="#collapsible-{field: parentgrid_uid}"
			ATagParams.insertData = 1
		}
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

	# Direct rendering of the collapsible elements, prevents "csc-default"-wrap
	columns.0 {
		renderObj < tt_content.gridelements_pi1
	}

}


