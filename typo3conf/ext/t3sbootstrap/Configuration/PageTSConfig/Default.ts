#-------------------------------------------------------------------------------
#	New Content Element Wizard
#-------------------------------------------------------------------------------
mod.wizards {
	newContentElement {
		wizardItems {
			common.elements {
				textmedia.tt_content_defValues.imageorient = 25
			}
			t3sbs {
				header = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_contentelements
				elements {
					t3sbspanel {
						iconIdentifier = panel
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_panel.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_panel.description
						tt_content_defValues.CType = t3sbs_panel
					}
					t3sbsthumbnails {
						iconIdentifier = thumbnail
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_thumbnails.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_thumbnails.description
						tt_content_defValues.CType = t3sbs_thumbnails
					}
					t3sbscarousel {
						iconIdentifier = carousel
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_carousel.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_carousel.description
						tt_content_defValues.CType = t3sbs_carousel
					}
					t3sbsfluidtemplate {
						iconIdentifier = fluidTemplate
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_fluidtemplate.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_fluidtemplate.description
						tt_content_defValues.CType = t3sbs_fluidtemplate
					}
					t3sbsgallery {
						iconIdentifier = imageGallery
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbsgallery.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbsgallery.description
						tt_content_defValues.CType = t3sbs_gallery
					}
				}
				show := addToList(t3sbspanel,t3sbsthumbnails,t3sbscarousel,t3sbsfluidtemplate,t3sbsgallery)
			}
		}
	}
}

#-------------------------------------------------------------------------------
#	Content
#-------------------------------------------------------------------------------
TCEFORM.tt_content {
	linkToTop.disabled = 1
#	imageorient.removeItems = 1, 2, 9, 10, 17, 18	
	imagecols.removeItems = 5,7,8
	imagecols.addItems.88 = BOOTSTRAP: Carousel	
	
	# New menu type
	menu_type.addItems.9 = BOOTSTRAP: Affix
	menu_type.altLabels.2 = BOOTSTRAP: Sitemap
	menu_type.altLabels.8 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.menu_type.8
	
}

#-------------------------------------------------------------------------------
#	Gridelements
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/PageTSConfig/Gridelements.ts">
