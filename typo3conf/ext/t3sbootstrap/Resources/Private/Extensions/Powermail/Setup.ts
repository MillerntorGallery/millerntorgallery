plugin.tx_powermail.view.templateRootPath = EXT:t3sbootstrap/Resources/Private/Extensions/Powermail/Templates/
plugin.tx_powermail.view.layoutRootPath = EXT:t3sbootstrap/Resources/Private/Extensions/Powermail/Layouts/
plugin.tx_powermail.view.partialRootPath = EXT:t3sbootstrap/Resources/Private/Extensions/Powermail/Partials/

# Prevent global integration of JS and CSS by powermail
page.includeJSFooterlibs {
	powermailJQuery >
	powermailJQueryUi >
	powermailJQueryUiDatepicker >
	powermailJQueryUiDatepicker >
	powermailJQueryFormValidationLanguage >
	powermailJQueryFormValidation >
	powermailJQueryTabs >
}
page.includeJSFooter.powermailForm >
page.includeCSS {
	powermailJQueryUiTheme >
	powermailJQueryUiDatepicker >
}
temp.vars < page.1000
page.1000 >

[globalVar = TSFE:id = {$plugin.t3sbootstrap_configuration.extensions.powermail.formPid}]
page.includeJSFooterlibs {
	# Include jQuery v1.8 on this page to ensure the validation (don't work with jQuery < 1.8)
	jquery = https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js
	powermailJQueryFormValidationLanguage = EXT:powermail/Resources/Public/Js/jquery.validationEngine-en.js
	powermailJQueryFormValidation = EXT:powermail/Resources/Public/Js/jquery.validationEngine.js
}
page.includeJSFooter {
	powermailForm = EXT:powermail/Resources/Public/Js/form.js
}
page.1000 < temp.vars
page.includeCSS {
	powermailCss = EXT:t3sbootstrap/Resources/Public/Template/css/Powermail.css
}
[global]