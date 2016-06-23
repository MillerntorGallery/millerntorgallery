temp.lightbox.jsFooterInline = COA
temp.lightbox.jsFooterInline {
	10 = TEXT
	10.value (
		lightbox.option({
		  'resizeDuration': 200,
		  'wrapAround': true,
		  'albumLabel' : 'Bild %1 von %2'
		});
	)
	10.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
}

temp.textmedia.jsFooterInline = COA
temp.textmedia.jsFooterInline {
	10 = TEXT
	10.value (
function inText(winWidth) {
	if(winWidth < 768) {
		$('.intext-pics' ).removeClass( 'pull-left').removeClass( 'pull-right');
		$('.oneColumn').css( 'margin-right', '0');
		$('.topOrBottom.pull-left' ).removeClass( 'pull-left').addClass( 'p-left');
		$('.topOrBottom.pull-right' ).removeClass( 'pull-right').addClass( 'p-right');
	}
	if(winWidth > 767) {
		$('.media-position-left .intext-pics' ).addClass( 'pull-left');
		$('.media-position-right .intext-pics' ).addClass( 'pull-right');
		$('.media-position-left .oneColumn' ).css( 'margin-right', '15px').css( 'margin-left', '0');
		$('.media-position-right .oneColumn' ).css( 'margin-left', '15px').css( 'margin-right', '0');
		$('.topOrBottom.p-left' ).addClass( 'pull-left');
		$('.topOrBottom.p-right' ).addClass( 'pull-right');
	}
}
$(window).resize(function() {
	var winWidth = $(window).width();
	$('.inlineJs').each(function(){
		inText(winWidth);
	});
});
var winWidth = $(window).width();
$('.inlineJs').each(function(){
	inText(winWidth);
});
)
}

temp.jsFooterInline = COA
temp.jsFooterInline {

	5 = TEXT
	5.value = jQuery(function() {
	# link to top
	20 = TEXT
	20.value (
		var offset = 220;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(duration);
			} else {
				jQuery('.back-to-top').fadeOut(duration);
			}
		});
		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
	)
	20.if.isTrue.field = tx_t3sbootstrap_linkToTop
	# tooltip
	30 = TEXT
	30.value = jQuery('.page-content a').tooltip({placement:'{$plugin.t3sbootstrap_configuration.general.tooltip_placement}'});
	30.if.isTrue = {$plugin.t3sbootstrap_configuration.general.tooltip}
	# lightbox
	50 < temp.lightbox.jsFooterInline
	50.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
	# navBar hover
	60 = TEXT
	60.value (
		function toggleNavbarMethod() {
			if (jQuery(window).width() > 768) {
				jQuery('ul.nav li.dropdown').hover(function() {
					$(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeIn();
				}, function() {
					$(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeOut();
				});
			}
		}
		toggleNavbarMethod();		
	)
	60.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.hover}
	# sitemap
	70 = TEXT
	70.value = $('.tree').treed({openedClass : 'glyphicon-folder-close', closedClass : 'glyphicon-folder-open'});
	70.if.isInList.data = TSFE:id
	70.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}
	80 = TEXT
	80.value = if (location.hash) $(location.hash).collapse('show');
	85 = TEXT
	85.value = $('.animated').viewportChecker();
	85.if.isTrue = {$plugin.t3sbootstrap_configuration.animateCss}	
	98 < temp.textmedia.jsFooterInline
	# closing 5.
	99 = TEXT
	99.value = });
}

page {
	# CSS files to be included
	includeCSS {
		bootstrapt3s = EXT:t3sbootstrap/Resources/Public/Styles/t3sbootstrap.css
		bootstrapt3s.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapLess = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/less/bootstrap.less
		bootstrapLess.forceOnTop = 1
		bootstrapLess.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}

		onePage = EXT:t3sbootstrap/Resources/Public/Styles/onePage.css
		onePage.if.value = pagets__t3sbootstrap_10
		onePage.if.equals.data = pagelayout

		stickyFooter = EXT:t3sbootstrap/Resources/Public/Styles/stickyFooter.css
		stickyFooter.if.isTrue = {$plugin.t3sbootstrap_configuration.styles.footer.sticky}

		bootstrapGlyphicons = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/glyphicons.css
		bootstrapGlyphicons.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}
		
		treed = EXT:t3sbootstrap/Resources/Public/Styles/treed.css
		treed.if.isInList.data = TSFE:id
		treed.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}

		lightbox = EXT:t3sbootstrap/Resources/Public/Contrib/Lightbox/css/lightbox.css
		lightbox.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
				
		animate = EXT:t3sbootstrap/Resources/Public/Contrib/Animate/animate.min.css
		animate.if.isTrue = {$plugin.t3sbootstrap_configuration.animateCss}
	}

	# JS to be included
	includeJSFooter {
		treed = EXT:t3sbootstrap/Resources/Public/Scripts/treed.js
		treed.if.isInList.data = TSFE:id
		treed.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}

		jquery_easing = EXT:t3sbootstrap/Resources/Public/Contrib/jquery.easing.min.js
		jquery_easing.if.value = pagets__t3sbootstrap_10
		jquery_easing.if.equals.data = pagelayout
	
		onePage = EXT:t3sbootstrap/Resources/Public/Scripts/onePage.js
		onePage.if.value = pagets__t3sbootstrap_10
		onePage.if.equals.data = pagelayout

		lightbox = EXT:t3sbootstrap/Resources/Public/Contrib/Lightbox/js/lightbox.js
		lightbox.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}		

		viewportchecker = EXT:t3sbootstrap/Resources/Public/Contrib/Animate/jquery.viewportchecker.js
		viewportchecker.if.isTrue = {$plugin.t3sbootstrap_configuration.animateCss}
	}

	jsFooterInline.5 < temp.jsFooterInline	
	
}

temp.jsFooterInline >
temp.textmedia.jsFooterInline >
temp.lightbox.jsFooterInline >
