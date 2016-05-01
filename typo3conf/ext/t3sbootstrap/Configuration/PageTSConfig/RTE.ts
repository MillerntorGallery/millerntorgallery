#-------------------------------------------------------------------------------
#	RTE  Konfiguration in Verbindung mit der Einstellung "Typical"
#-------------------------------------------------------------------------------
RTE.classes >
RTE.classes {
	small {
		name = Size: Small
	}
	lead {
		name = Size: Lead
	}
	text-muted {
		name = Color: Muted
		value = color:#999999;
	}
	text-primary {
		name = Color: Primary
		value = color: #428BCA;
	}
	text-success {
		name = Color: Success
		value = color: #3C763D;
	}
	text-info {
		name = Color: Info
		value = color: #31708F;
	}
	text-warning {
		name = Color: Warning
		value = color: #8A6D3B;
	}
	text-danger {
		name = Color: Danger
		value = color: #A94442;
	}
	text-left {
			name = Aligne: Left
			value = text-align: left;
	}
	text-center {
			name = Aligne: Center
	}
	text-right {
			name = Aligne: Right
	}
	center-block {
			name = Aligne: Center content blocks
	}

	list-unstyled {
			name = List: Unstyled
	}
	list-inline {
			name = List: Inline
	}
	badge {
		name = Badges
	}
	pull-right {
		name = Pull-right
	}
}

RTE.default {
	userElements.10 = Bootstrap Komponenten - Labels (mode = wrap).		
	userElements.10 {
		3 = Label: default
		3.description = <span class="label label-default">|</span>
		3.mode = wrap
		3.content = <span class="label label-default">|</span>
		4 = Label: primary
		4.description = <span class="label label-primary">|</span> 
		4.mode = wrap
		4.content = <span class="label label-primary">|</span>
		5 = Label: success
		5.description = <span class="label label-success">|</span> 
		5.mode = wrap
		5.content = <span class="label label-success">|</span>
		6 = Label: info
		6.description = <span class="label label-info">|</span> 
		6.mode = wrap
		6.content = <span class="label label-info">|</span>
		7 = Label: warning
		7.description = <span class="label label-warning">|</span>
		7.mode = wrap
		7.content = <span class="label label-warning">|</span>
		8 = Label: danger
		8.description = <span class="label label-danger">|</span> 
		8.mode = wrap
		8.content = <span class="label label-danger">|</span>
	}
	userElements.20 = Bootstrap Komponenten - Alerts (mode = wrap).		
	userElements.20 {			
		15 = Alert: success
		15.description = <div class="alert alert-success" role="alert">|</div> 
		15.mode = wrap
		15.content = <div class="alert alert-success" role="alert">|</div>
		16 = Alert: info
		16.description = <div class="alert alert-info" role="alert">|</div> 
		16.mode = wrap
		16.content = <div class="alert alert-info" role="alert">|</div>
		17 = Alert: warning
		17.description = <div class="alert alert-warning" role="alert">|</div> 
		17.mode = wrap
		17.content = <div class="alert alert-warning" role="alert">|</div>
		18 = Alert: danger
		18.description = <div class="alert alert-danger" role="alert">|</div> 
		18.mode = wrap
		18.content = <div class="alert alert-danger" role="alert">|</div>
	}
	userElements.30 = Bootstrap Komponenten - Wells (mode = wrap).		
	userElements.30 {
		23 = Well
		23.description = <div class="well">|</div>
		23.mode = wrap
		23.content = <div class="well">|</div>
		24 = Well: large
		24.description = <div class="well well-lg">|</div>
		24.mode = wrap
		24.content = <div class="well well-lg">|</div>
		25 = Well: small
		25.description = <div class="well well-sm">|</div> 
		25.mode = wrap
		25.content = <div class="well well-sm">|</div>
	}

	showButtons := addToList(user,code,small,insertparagraphbefore,insertparagraphafter)

	showButtons := removeFromList(table)
	showButtons := removeFromList(toggleborders, tableproperties)
	showButtons := removeFromList(rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit)
	showButtons := removeFromList(columninsertbefore, columninsertafter, columndelete, columnsplit)
	showButtons := removeFromList(cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge)

	contentCSS = typo3conf/ext/t3sbootstrap/Resources/Public/Styles/rte.css

	buttons.formatblock.removeItems = article, aside, footer, header, nav, h1, h2, h6, section
	buttons.formatblock.orderItems = p, h3, h4, h5, blockquote, div, pre, address
	buttons {
		blockstyle.tags.ul.allowedClasses := addToList(list-unstyled, list-inline)
		blockstyle.tags.blockquote.allowedClasses := addToList(pull-right)
		blockstyle.tags.div.allowedClasses := addToList(small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger,text-center,text-left,text-right,pull-right)
		blockstyle.tags.p.allowedClasses := addToList(small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger,text-center,text-left,text-right,pull-right)
		textstyle.tags.span.allowedClasses := addToList(badge, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger)
	}
	buttons {
		blockstyle.tags.div.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
	}

	allowTags < RTE.default.proc.allowTags

	proc {
		allowTagsOutside := addToList(i)
		allowedClasses := addToList(badge, error, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger,text-center,text-left,text-right,pull-right,list-unstyled,list-inline,label, label-default, label-primary, label-success, label-info, label-warning, label-danger)
		allowedClasses := removeFromList(csc-frame-frame1,csc-frame-frame2,important,name-of-person,detail,align-left,align-center,align-right,align-justify,component-items,action-items,component-items-ordered,action-items-ordered,indent)

		entryHTMLparser_db {
			tags {
				b.remap = strong
			}
		}
		exitHTMLparser_db {
			tags.b.remap = strong
			tags.i >
		}
	}
}

RTE.mutuallyExclusiveClasses {
	10 = text-left, text-right, text-center
	20 = small, lead
	30 = text-muted, text-primary, text-success, text-info, text-warning, text-danger
	40 = list-unstyled, list-inline
	50 = alert-success, alert-info, alert-warning, alert-danger
	60 = label-default, label-primary, label-success, label-info, label-warning, label-danger
}

RTE.default.FE < RTE.default
