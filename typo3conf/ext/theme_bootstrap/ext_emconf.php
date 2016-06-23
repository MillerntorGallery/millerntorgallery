<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "theme_bootstrap".
 *
 * Auto generated 01-05-2016 23:53
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Bootstrap Theme',
  'description' => 'Theme to use Twitter Bootstrap',
  'category' => 'templates',
  'version' => '7.0.0',
  'state' => 'beta',
  'uploadfolder' => true,
  'createDirs' => '',
  'clearcacheonload' => true,
  'author' => 'Themes-Team (Kay Strobach, Jo Hasenau, Thomas Deuling)',
  'author_email' => 'team@typo3-themes.org',
  'author_company' => '',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '7.6.0-7.6.99',
      'themes_gridelements' => '7.0.0-7.99.99',
      'dyncss_less' => '0.7.0-0.7.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
      'dyncss_scss' => '0.7.1-0.7.99',
    ),
  ),
  '_md5_values_when_last_written' => 'a:0:{}',
);

