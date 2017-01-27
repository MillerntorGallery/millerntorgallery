<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "jh_opengraphprotocol".
 *
 * Auto generated 01-07-2016 17:16
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Open Graph protocol',
  'description' => 'Adds the Open Graph protocol properties in meta-tags to the html-header supporting multilingual-websites.',
  'category' => 'plugin',
  'version' => '1.2.0',
  'state' => 'stable',
  'uploadfolder' => false,
  'createDirs' => '',
  'clearcacheonload' => true,
  'author' => 'Jonathan Heilmann',
  'author_email' => 'mail@jonathan-heilmann.de',
  'author_company' => '',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '6.2.0-7.6.99',
    ),
    'conflicts' => 
    array (
      'jh_opengraph_ttnews' => '0.0.0-0.0.10',
    ),
    'suggests' => 
    array (
    ),
  ),
);

