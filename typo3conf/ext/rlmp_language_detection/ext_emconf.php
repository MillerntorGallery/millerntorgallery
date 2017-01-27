<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "rlmp_language_detection".
 *
 * Auto generated 22-11-2016 16:16
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Language Detection',
  'description' => 'This plugin detects the visitor\'s preferred language and sets the local configuration for TYPO3\'s language engine accordingly. Both, one-tree and multiple tree concepts, are supported. It can also select from a list of similar languages if the user\'s preferred language does not exist.',
  'category' => 'misc',
  'version' => '7.0.8',
  'state' => 'stable',
  'uploadfolder' => false,
  'clearcacheonload' => false,
  'author' => 'Thomas Löffler',
  'author_email' => 'thomas.loeffler@typo3.org',
  'author_company' => '',
  'constraints' => 
  array (
    'depends' => 
    array (
      'php' => '5.3.0',
      'typo3' => '6.2.0-7.99.99',
      'static_info_tables' => '6.3.0',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
  'createDirs' => NULL,
);

