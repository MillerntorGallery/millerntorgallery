page {
	# Add some classes to the bodytag
	bodyTagCObject >
	bodyTagCObject = COA
	bodyTagCObject {
		wrap = <body | >
		10 = TEXT
		10 {
			noTrimWrap = | id="|"|
			value = page-top
		}
		20 = COA
		20 {
			stdWrap.noTrimWrap = | class="|"|
			10 = TEXT
			10 {
				value = page-{field:uid}
				insertData = 1
			}
			20 = TEXT
			20 {
				noTrimWrap = | backend-layout-||
				data = pagelayout
				required = 1
				split {
					token = pagets__
					cObjNum = 1
					1.current = 1
				}
			}
			30 = TEXT
			30 {
				fieldRequired = layout
				value = layout-{field:layout}
				insertData = 1
				noTrimWrap = | ||
			}
		}
		30 = COA
		30 {
			stdWrap.noTrimWrap = | style="|"|
			stdWrap.required = 1
			10 = TEXT
			10 {
				value = padding-top:{$plugin.t3sbootstrap_configuration.styles.navbar.style.height}px;
				if.isTrue = {$plugin.t3sbootstrap_configuration.styles.navbar.style.fixed.top}
			}
			20 = TEXT
			20 {
				noTrimWrap = | ||
				value = padding-bottom:{$plugin.t3sbootstrap_configuration.styles.sticky.footer.body.padding.bottom}px;
				if.isTrue = {$plugin.t3sbootstrap_configuration.styles.footer.sticky}
			}
			30 = TEXT
			30 {
				value = position: relative;
				noTrimWrap = | ||
				if.isInList.data = TSFE:id
				if.value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}
			}
		}
		40 = TEXT
		40 {
			value = data-spy="scroll" data-target="#scrollspy"
			noTrimWrap = | ||
			if.isInList.data = TSFE:id
			if.value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}
		}
		50 = TEXT
		50 {
			value = data-spy="scroll" data-target=".navbar-fixed-top"
			noTrimWrap = | ||
			if.value = pagets__t3sbootstrap_10
			if.equals.data = pagelayout
		}
	}
}
