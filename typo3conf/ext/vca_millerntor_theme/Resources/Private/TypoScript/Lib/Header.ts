lib.pheader.social_media = COA
lib.pheader.social_media {
	10 = TEXT
	10 { 
		value = mail
		typolink {

        # This is the destination of the link,
        parameter = info@millerntorgallery.org

        # with a target ("_blank" opens a new window),
        extTarget = _blank

        # and add a class to the link so we can style it.
        ATagParams = class="mailto"
    }
	} 
	20 = TEXT
	20 {
		value = facebook
		typolink {

        # This is the destination of the link,
        parameter = http://facebook.com/millerntorgallery

        # with a target ("_blank" opens a new window),
        extTarget = _blank

        # and add a class to the link so we can style it.
        ATagParams = class="facebook"
    }
	
	} 
	30 = TEXT
	30 {
		value = twitter
		typolink {

        # This is the destination of the link,
        parameter = http://twitter.com/MG_SocialArt

        # with a target ("_blank" opens a new window),
        extTarget = _blank

        # and add a class to the link so we can style it.
        ATagParams = class="twitter"
    }
	
	} 
	35 = TEXT
	35 {
		value = instagram
		typolink {

        # This is the destination of the link,
        parameter = http://instagram.com/millerntorgallery

        # with a target ("_blank" opens a new window),
        extTarget = _blank

        # and add a class to the link so we can style it.
        ATagParams = class="instagram"
    }
	
	} 
	40 = TEXT
	40 {
		value = youtube
		typolink {

        # This is the destination of the link,
        parameter = http://www.youtube.com/channel/UC9RTHLkoR529JUxoJVgQE3A

        # with a target ("_blank" opens a new window),
        extTarget = _blank

        # and add a class to the link so we can style it.
        ATagParams = class="youtube"
    }
	
	}
	50 = TEXT
	50 {
		value = vimeo
		typolink {

        # This is the destination of the link,
        parameter = https://vimeo.com/millerntorgallery

        # with a target ("_blank" opens a new window),
        extTarget = _blank

        # and add a class to the link so we can style it.
        ATagParams = class="vimeo"
    }
	
	} 
}

lib.pheader.next_excebition = COA
lib.pheader.next_excebition {
	10 = CONTENT
	10 {
		table = tx_vcamillerntor_domain_model_ausstellung
	  select {
	  	pidInList = 4
	    where = deleted=0 AND hidden=0 AND start>UNIX_TIMESTAMP()
	    max = 1
	  }
	  renderObj = COA
	  renderObj {
	    wrap = <h2 class="claim">|</h2>
	    1 = TEXT
	    1 {	
	    	field = start
	    	data = date : U
  			strftime = %e
	    	wrap = | -
	    }	
	    2 = TEXT
	    2 {
	    	field = end
	    	data = date : U
  			strftime = %e %B %Y
	    }
	  }
	}
	//value = <h2 class="claim">29 - 31 May 2014</h2>
}

lib.pheader.logo = COA
lib.pheader.logo {
	wrap = <div class="foot_logos">|</div>
	/*
	10 = IMAGE
	10 {
		file = /typo3conf/ext/vca_millerntor_theme/Resources/Public/Images/fcstpauli_logo.png
		file.height = 60
		wrap = <div class="footer_logo">|</div>
	}
	20 = IMAGE
	20 {
		file = /typo3conf/ext/vca_millerntor_theme/Resources/Public/Images/vca_logo.png
		file.height = 50
		wrap = <div class="footer_logo">|</div>
	}
	*/
	10 = TEXT
	10 {
		value = <img width="50" height="50" alt="FC St. Pauli" src="typo3conf/ext/vca_millerntor_theme/Resources/Public/Images/fcstpauli_logo.png">
		wrap = <div class="footer_logo">|</div>
	}
	20 = TEXT
	20 {
		value = <img width="97" height="50" alt="Viva con Agua" src="typo3conf/ext/vca_millerntor_theme/Resources/Public/Images/vca_logo.png">
		wrap = <div class="footer_logo">|</div>
	}
	
}