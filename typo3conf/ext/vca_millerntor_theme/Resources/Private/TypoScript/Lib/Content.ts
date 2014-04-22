# **********************************************************
# Rendering of all content columns
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Main Content (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.main = COA
lib.content.main {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
}
lib.content.0 < lib.content.main

#-------------------------------------------------------------------------------
#	CONTENT: Left Content (colPos = 1)
#-------------------------------------------------------------------------------
lib.content.left = COA
lib.content.left {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getLeft
}
lib.content.1 < lib.content.left

#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content.right = COA
lib.content.right {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getRight
}
lib.content.2 < lib.content.right

#-------------------------------------------------------------------------------
#	CONTENT: Jambotron Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content.jumbotron = COA
lib.content.jumbotron {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getBorder
}
lib.content.3 < lib.content.jumbotron

#-------------------------------------------------------------------------------
#	CONTENT: Footer Left (colPos = 4)
#-------------------------------------------------------------------------------
lib.content.leftFooter = COA
lib.content.leftFooter {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
	10.select.where = colPos=4
}
lib.content.4 < lib.content.leftFooter

#-------------------------------------------------------------------------------
#	CONTENT: Footer Middle (colPos = 5)
#-------------------------------------------------------------------------------
lib.content.footer = COA
lib.content.footer {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
	10.select.where = colPos=5
}
lib.content.5 < lib.content.footer

#-------------------------------------------------------------------------------
#	CONTENT: Footer Right (colPos = 6)
#-------------------------------------------------------------------------------
lib.content.rightFooter = COA
lib.content.rightFooter {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.get
	10.select.where = colPos=6
}
lib.content.6 < lib.content.rightFooter

