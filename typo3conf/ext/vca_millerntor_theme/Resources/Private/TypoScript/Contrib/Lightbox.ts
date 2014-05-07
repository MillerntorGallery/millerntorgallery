page {
	includeCSS {
		colorboxcss = EXT:t3sbootstrap/Resources/Public/Contrib/Colorbox/colorbox.css
	}
	includeJSFooter {
		colorboxjs = EXT:t3sbootstrap/Resources/Public/Contrib/Colorbox/jquery.colorbox-min.js
	}
}

tt_content.image.20.1.imageLinkWrap {
  JSwindow = 0
  directImageLink = 1
  linkParams.ATagParams.dataWrap = class="gallery"
  }
}

temp.colorbox.jsFooterInline = COA
temp.colorbox.jsFooterInline {

  10 = TEXT
  10.value (
	jQuery('a.gallery').colorbox({
		close:'<span class="glyphicon glyphicon-remove"></span>',
		maxWidth:'95%',
		maxHeight:'95%'
	});
  )

  20 = TEXT
  20.value (
	if (window.matchMedia) {
	    widthCheck = window.matchMedia("(max-width: 640px)");
	    if (widthCheck.matches){
	        $.colorbox.remove();
	    }
	}
  )
  20.if.value = 1
  20.if.equals = {$plugin.t3sbootstrap_configuration.extensions.lightbox.widthCheck}

}
