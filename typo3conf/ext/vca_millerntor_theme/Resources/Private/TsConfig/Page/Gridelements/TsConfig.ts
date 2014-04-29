# **********************************************************
# ISOTOPE: container
# **********************************************************

# Isotope Container
tx_gridelements.setup.isotope_container {
   	title = Isotope container
	description = isotope container for items
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/carousel.gif
	frame = 1
	#flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Carousel.xml
	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = isotope Container
						colPos = 0
					}
				}
			}
		}
	}
}
