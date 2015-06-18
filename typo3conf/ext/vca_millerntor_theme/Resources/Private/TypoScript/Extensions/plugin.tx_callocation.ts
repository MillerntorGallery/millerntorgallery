plugin.tx_cal_controller {
	view {
		list {
			event {
				category.dataWrap = |
			}
		}
		event {
			event {
				dateFormat = <span class="day">%A, %d.</span> %B
				image.stdWrap.dataWrap = <div class="col-sm-4  event_image">|</div>
				image.layout.key.override = 18
				title.dataWrap = <h2>|</h2>
				startdate.dataWrap = |
				enddate.dataWrap = |
				starttime.dataWrap = |
				endtime.dataWrap = - | 
				location.dataWrap = <div class="location-container">|</div>
				organizer.dataWrap = <div class="organizer-container">|</div>
				description.dataWrap = <div class="desc-container"> |</div>
			}
			eventViewPid = 35
		}	
 
		locationgrid {
			enable = 1
			locationIds = 1;2;3;4
			locationText = Outdoor;Indoor;Ballsaal;Cinema
			stdWrap {
				#wrap = <table id="locationgrid">|</table>
				wrap = <div id="locationgrid">|</div>
			}
			row_stdWrap {
				wrap = <div class="row">|</div>
			}
			headerItem_stdWrap {
				wrap = <div class="col-xs-2 locationgrid_header">|</div>
			}
			headerItem_stdWrap2 {
				wrap = <div class="col-xs-1 col-xs-offset-1 locationgrid_header">|</div>
			}
			item_stdWrap {
				wrap = <div class="col-xs-2 locationgrid_item">|</div>
			}
			date_stdWrap {
				wrap = <div class="col-xs-1 col-xs-offset-1 locationgrid_date">|</div>
			}
			dateFormat = l d.m.
		}
	}	
}