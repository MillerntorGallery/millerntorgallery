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
		pull-right {
        	name = Pull-right
        }
        badge {
			name = Badges
        }

        alert {
			name = Alert basis
        }
        alert-success {
			name = Alert success
			value = color: #3C763D;
        }
        alert-info {
			name = Alert info
			value = color: #31708F;
        }
        alert-warning {
			name = Alert warning
			value = color: #8A6D3B;
        }
        alert-danger {
			name = Alert danger
			value = color: #A94442;
        }

}


RTE.default {

	contentCSS = typo3conf/ext/t3sbootstrap/Resources/Public/Template/css/rte.css

	showButtons (
		bold
		, italic
		, formatblock
		, textstyle
		, textstylelabel
		, blockstyle
		, blockstylelabel
		, underline
		, orderedlist
		, unorderedlist
		, insertcharacter
		, line
		, link
		, removeformat
		, findreplace
		, insertcharacter
		, chMode
		, undo
		, code
		, small
		, insertparagraphbefore
		, insertparagraphafter

		, definitionlist
		, definitionitem
	)

	toolbarOrder (
		bold, italic, underline, code, small, formatblock
		, linebreak
		, textstyle, textstylelabel
		, linebreak
		, blockstyle, blockstylelabel
		, linebreak
		, insertparagraphbefore, insertparagraphafter, unorderedlist, orderedlist, insertcharacter, line, link, removeformat, findreplace, chMode, undo

		, definitionlist
		, definitionitem
	)

	buttons.formatblock.removeItems = article, aside, footer, header, nav, h1, h2, h6, section
	buttons.formatblock.orderItems = p, h3, h4, h5, blockquote, div, pre, address

	buttons {
		 blockstyle.tags.blockquote.allowedClasses := addToList(pull-right)
		 blockstyle.tags.div.allowedClasses := addToList(alert, alert-success, alert-info, alert-warning, alert-danger, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger,text-center,text-left,text-right,pull-right)
		 blockstyle.tags.p.allowedClasses := addToList(small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger,text-center,text-left,text-right,pull-right)

		 textstyle.tags.span.allowedClasses := addToList(badge, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger, alert)
	}
	buttons {
		 blockstyle.tags.div.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
	}

	allowTags < RTE.default.proc.allowTags

	proc {
		allowedClasses := addToList(alert, alert-success, alert-info, alert-warning, alert-danger, badge, error, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger,text-center,text-left,text-right,pull-right,list-unstyled,list-inline)
		allowedClasses := removeFromList(csc-frame-frame1,csc-frame-frame2,important,name-of-person,detail,align-left,align-center,align-right,align-justify,component-items,action-items,component-items-ordered,action-items-ordered,indent)

		entryHTMLparser_db {
			tags {
				b.remap = strong
				i.remap = em
			}
		}
		exitHTMLparser_db {
			tags.b.remap = strong
			tags.i.remap = em
		}
	}
}

RTE.mutuallyExclusiveClasses {
 10 = text-left, text-right, text-center
 20 = small, lead
 30 = text-muted, text-primary, text-success, text-info, text-warning, text-danger
 40 = list-unstyled,list-inline
 50 = alert-success,alert-info,alert-warning,alert-danger
}

RTE.default.FE < RTE.default
