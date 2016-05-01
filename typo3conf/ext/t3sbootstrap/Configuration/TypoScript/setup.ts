#-------------------------------------------------------------------------------
#	Plugin Setup
#-------------------------------------------------------------------------------

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Page/_main.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Lib/_main.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Content/_main.ts">

/*
page.20 = COA
page.20 {
	10 = TEXT
	10.data = debug:register
	20 = TEXT
	20.data = debug:page
}
*/