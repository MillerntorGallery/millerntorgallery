<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "lfeditor".
 *
 * Auto generated 16-06-2015 13:15
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Language File Editor',
	'description' => 'This module serves several functions for editing of language files.
The extension differs between editors and administrators with appropriate privileges.
Normal users are allowed to edit only languages for which they have permission.
Following functions are implemented in this module:
	* Formats: PHP, XML and XLF
	* Enhanced insert types (resizable text area, TinyMCE)
	* Conversion of formats
	* Splitting and merging of language files
	* Override mode
	* Editing L10n folder content
	* Simple editing of constants and languages (edit/add/rename/delete constants)
	* Flexible search and view of constants and values
	* Tree view of constants
	* Meta information handling
	* Backups, recovering and diff view',
	'category' => 'module',
	'version' => '3.1.5',
	'state' => 'stable',
	'uploadfolder' => false,
	'createDirs' => '',
	'clearcacheonload' => false,
	'author' => 'Stefan Galinski, Damjan Komlenac',
	'author_email' => 'stefan@sgalinski.de',
	'author_company' => 'sgalinski Internet Services',
	'constraints' => 
	array (
		'depends' => 
		array (
			'php' => '5.3.0-5.6.99',
			'typo3' => '6.2.0-7.99.99',
		),
		'suggests' => 
		array (
			'tinymce' => '4.2.0',
		),
		'conflicts' => 
		array (
		),
	),
);

