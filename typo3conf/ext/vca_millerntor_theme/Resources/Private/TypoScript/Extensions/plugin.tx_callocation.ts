plugin.tx_cal_controller {
	view {
		locationgrid {
			enable = 1
			locationIds = 1|2,3|4,5
			locationText = Millerntor,Reeperbahn,Sonstige
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
			dateFormat = d.m.
		}
	}	
}