
jQuery(document).ready(function() {
 
	var $container = jQuery('#container');
	var iso_page = $container.is('ul');
	if($container ) {
	
	var $container = jQuery('#container'),
          // object that will keep track of options
          isotopeOptions = {},
          // defaults, used if not explicitly set in hash
          defaultOptions = {
            filter: '*',
            sortBy: 'original-order',
            sortAscending: true,
            layoutMode: 'masonry'
          };

      // ensure no transforms used in Opera
     /*
      if ( jQuery.browser.opera ) {
        defaultOptions.transformsEnabled = false;
      }
	  */
	  var setupOptions = jQuery.extend( {}, defaultOptions, {
        itemSelector : '.item',
        masonry : {
          columnWidth : 330,
          gutterWidth: 15
        },
        masonryHorizontal : {
          rowHeight: 350,
          gutterHeight: 15
        },
        
        cellsByColumn : {
          columnWidth : 330,
  
        }, 
        getSortData : {
          category : function( $elem ) {
            return $elem.attr('data-category');
          },
          number : function( $elem ) {
            return parseInt( $elem.find('.number').text(), 10 );
          },
          name : function ( $elem ) {
            return $elem.find('.name').text();
          },
		  alphabetical: function( $elem ) {
			var name = $elem.find('.name'),
				itemText = name.length ? name : $elem;
			return itemText.text();
		  }
        }
      });
  
      // set up Isotope
      $container.isotope( setupOptions );


	  
		var $optionSets = jQuery('#options').find('.option-set'),
          isOptionLinkClicked = false;
  
      // switches selected class on buttons
      function changeSelectedLink( $elem ) {
        // remove selected class on previous item
        $elem.parents('.option-set').find('.selected').removeClass('selected');
        // set selected class on new item
        $elem.addClass('selected');
      }
  
  
  
  
  
      $optionSets.find('a').click(function(){
        var $this = jQuery(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return;
        }
        changeSelectedLink( $this );
            // get href attr, remove leading #
        var href = $this.attr('href').replace( /^#/, '' );
            // convert href into object
            // i.e. 'filter=.inner-transition' -> { filter: '.inner-transition' }
           var option = jQuery.deparam( href, true );
		   //debug.log( 'option', option );
		   if(option.layoutMode) {
		   $container.toggleClass('straightDown').isotope('reLayout');
		   }
        // apply new option to previous
        jQuery.extend( isotopeOptions, option );
		// set hash, triggers hashchange on window
        jQuery.bbq.pushState( isotopeOptions );
        isOptionLinkClicked = true;
        if(iso_page) {
			return false;
		} else {
			//go to startpage
			document.location.href= '/' + $this.attr('href');
			return true;
		}
      });
/*
      var hashChanged = false;

      jQuery(window).bind( 'hashchange', function( event ){
        // get options object from hash
        var hashOptions = window.location.hash ? jQuery.deparam.fragment( window.location.hash, true ) : {},
            // do not animate first call
            aniEngine = hashChanged ? ( jQuery.browser.opera ? 'jquery' : 'best-available' ) : 'none',
            // apply defaults where no option was specified
            options = jQuery.extend( {}, defaultOptions, hashOptions, { animationEngine: aniEngine } );
			//alert(hashOptions);
			//debug.log( 'coerced', hashOptions );
			jQuery("#container a").fragment( hashOptions );
        // apply options from hash
        $container.isotope( options );
        // save options
        isotopeOptions = hashOptions;
    
        // if option link was not clicked
        // then we'll need to update selected links
        if ( !isOptionLinkClicked ) {
          // iterate over options
          var hrefObj, hrefValue, $selectedLink;
          for ( var key in options ) {
            hrefObj = {};
            hrefObj[ key ] = options[ key ];
            // convert object into parameter string
            // i.e. { filter: '.inner-transition' } -> 'filter=.inner-transition'
            hrefValue = jQuery.param( hrefObj );
            // get matching link
            $selectedLink = $optionSets.find('a[href="#' + hrefValue + '"]');
            changeSelectedLink( $selectedLink );
			if(key === 'layoutMode' && options[ key ] === 'straightDown') {
				$container.addClass('straightDown').isotope('reLayout');
			} 
        
          }
        }
    
        isOptionLinkClicked = false;
        hashChanged = true;
      })
        // trigger hashchange to capture any hash data on init
        .trigger('hashchange');

*/	  
	  
  
	  
	  	
	/*
	jQuery('#nav-panel').portamento({
		
		gap: 80
	});
	*/
	} else {
	
	//jQuery('#nav-panel').hide();
	}
});