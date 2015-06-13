# **********************************************************
# General configuration of a page
# **********************************************************

page {
	meta.viewport = width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no
#	meta.X-UA-Compatible = IE=edge
#	meta.X-UA-Compatible.httpEquivalent = 1

	config {
		index_enable = {$plugin.t3sbootstrap_configuration.general.index.enable}
		index_externals = {$plugin.t3sbootstrap_configuration.general.index.externals}
	}
}

page.headerData.5 = TEXT
page.headerData.5.value (
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
)


config {
	doctype = html5
	xmlprologue = none
	linkVars = L, print
	baseURL = {$plugin.t3sbootstrap_configuration.url}
//	prefixLocalAnchors = all
	no_cache = 0
	spamProtectEmailAddresses = 1
	
	 uniqueLinkVars                      = 1
    pageTitleFirst                      = 1
    
    renderCharset                       = utf-8
    metaCharset                         = utf-8
    doctype                             = html5
    removeDefaultJS                     = external
    inlineStyle2TempFile                = 1
    admPanel                            = 0
    debug                               = 0
    cache_period                        = 43200
    sendCacheHeaders                    = 0
    intTarget                           =
    extTarget                           =
    disablePrefixComment                = 1
    index_enable                        = 1
    index_externals                     = 1
    headerComment                       = Millerntor Gallery by Viva con Aqua de St. Pauli



    // Enable RealUrl
    tx_realurl_enable                   = 1
    simulateStaticDocuments             = 0

    // Disable Image Upscaling
    noScaleUp                           = 1

    // Language Settings
    sys_language_uid                    = 0
    sys_language_overlay                = 1
    sys_language_mode                   = content_fallback
    language                            = en
    locale_all                          = en_US.UTF-8
    htmlTag_setParams                   = lang="en" dir="ltr" class="no-js"

    // Compression and Concatenation of CSS and JS Files
    compressJs                          = 1
    compressCss                         = 1
    concatenateJs                       = 1
    concatenateCss                      = 1
	
}

[globalString = IENV:HTTP_HOST = cms.millerntorgallery.org]
config.baseURL = http://millerntorgallery.org/
[end]

[globalString = IENV:HTTP_HOST = millerntorgallery.org]
config.baseURL = http://millerntorgallery.org/
[end]
config.baseURL = http://millerntorgallery.org/
[globalString = IENV:HTTP_HOST = local.62]
config.baseURL = http://local.62/
[end]