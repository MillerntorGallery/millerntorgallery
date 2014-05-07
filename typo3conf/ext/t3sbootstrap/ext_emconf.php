<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "t3sbootstrap".
 *
 * Auto generated 06-05-2014 19:13
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Bootstrap Components',
	'description' => 'Startup extension to use bootstrap 3 classes and components out of the box. Suitable for small projects to save development time. Example and info: www.t3sbootstrap.de',
	'category' => 'templates',
	'shy' => false,
	'version' => '0.0.4',
	'dependencies' => '',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => NULL,
	'module' => '',
	'state' => 'beta',
	'uploadfolder' => false,
	'createDirs' => '',
	'modify_tables' => 'tt_content,pages',
	'clearcacheonload' => false,
	'lockType' => '',
	'author' => 'Helmut Hackbarth',
	'author_email' => 'typo3@t3solution.de',
	'author_company' => 't3solution',
	'CGLcompliance' => NULL,
	'CGLcompliance_note' => NULL,
	'constraints' => 
	array (
		'depends' => 
		array (
			'typo3' => '6.2.0-6.2.99',
			'gridelements' => '2.9.9-0.0.0',
		),
		'conflicts' => 
		array (
		),
		'suggests' => 
		array (
		),
	),
);

?>