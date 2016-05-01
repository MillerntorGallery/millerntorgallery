<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "compatibility6".
 *
 * Auto generated 01-05-2016 23:38
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Compatibility Mode for TYPO3 CMS 6.x',
  'description' => 'Provides an additional backwards-compatibility layer with legacy functionality for sites that haven\'t fully migrated to v7 yet.',
  'category' => 'be',
  'state' => 'stable',
  'uploadfolder' => false,
  'createDirs' => '',
  'clearCacheOnLoad' => 0,
  'author' => 'TYPO3 CMS Team',
  'author_email' => '',
  'author_company' => '',
  'version' => '7.6.2',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '6.0.0-7.99.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
  'autoload' => 
  array (
    'psr-4' => 
    array (
      'TYPO3\\CMS\\Compatibility6\\' => 'Classes',
    ),
  ),
  'clearcacheonload' => false,
);

