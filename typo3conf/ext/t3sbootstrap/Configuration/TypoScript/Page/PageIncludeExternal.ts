page {
	# CSS files to be included
	includeCSS {
		bootstrap = //maxcdn.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/css/bootstrap.min.css
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1

		bootstrapTheme = //maxcdn.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/css/bootstrap-theme.min.css
		bootstrapTheme.external = 1
		bootstrapTheme.excludeFromConcatenation = 1
		bootstrapTheme.disableCompression = 1

		fontAwesome = //maxcdn.bootstrapcdn.com/font-awesome/{$plugin.t3sbootstrap_configuration.fontawesome.version}/css/font-awesome.min.css
		fontAwesome.external = 1
		fontAwesome.excludeFromConcatenation = 1
		fontAwesome.disableCompression = 1
	}
	# JS to be included
	includeJSFooterlibs {
		bootstrap = //maxcdn.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/js/bootstrap.min.js
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1

		jquery = //ajax.googleapis.com/ajax/libs/jquery/{$plugin.t3sbootstrap_configuration.jquery.version}/jquery.min.js
		jquery.external = 1
		jquery.excludeFromConcatenation = 1
		jquery.disableCompression = 1
	}
}
