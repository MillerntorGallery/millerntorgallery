<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']=array (
  '_DEFAULT' => 
  array (
    'init' => 
    array (
      'enableCHashCache' => true,
      'appendMissingSlash' => 'ifNotFile,redirect',
      'adminJumpToBackend' => true,
      'enableUrlDecodeCache' => true,
      'enableUrlEncodeCache' => true,
      'emptyUrlReturnValue' => '/',
    ),
    'pagePath' => 
    array (
      'type' => 'user',
      'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
      'spaceCharacter' => '-',
      'languageGetVar' => 'L',
      'rootpage_id' => '1',
    ),
    'fileName' => 
    array (
      'defaultToHTMLsuffixOnPrev' => 1,
      'acceptHTMLsuffix' => 1,
      'index' => 
      array (
        'print' => 
        array (
          'keyValues' => 
          array (
            'type' => 98,
          ),
        ),
      ),
    ),
    'preVars' => 
    array (
      0 => 
      array (
        'GETvar' => 'L',
        'valueMap' => 
        array (
          1 => '1',
        ),
        'noMatch' => 'bypass',
      ),
    ),
    'fixedPostVars' => 
    array (
    ),
  	'postVarSets' => array(
  		'_DEFAULT' => array (
  			'kuenstler' => array(
  				array(
  					'GETvar' => 'tx_vcamillerntor_kuenstler[action]',
  				),	
//   				array(
//   					'GETvar' => 'tx_vcamillerntor_kuenstler[controller]',
//   				),	
  				array(
  					'GETvar' => 'tx_vcamillerntor_kuenstler[kuenstler]',
  					'lookUpTable' => array(
  						'table' => 'tx_vcamillerntor_domain_model_kuenstler',
  						'id_field' => 'uid',
  						'alias_field' => 'name',
  						'addWhereClause' => ' AND deleted=0',
  						'useUniqueCache' => 1,
  						'useUniqueCache_conf' => array(
  							'strtolower' => 1,
  							'spaceCharacter' => '-',
  						)
                     )
  				),
  			),		
  			'ausstellung' => array(
  				array(
  					'GETvar' => 'tx_vcamillerntor_ausstellungen[action]',
  				),	
   				array(
   					'GETvar' => 'tx_vcamillerntor_ausstellungen[controller]',
   				),	
  				array(
  					'GETvar' => 'tx_vcamillerntor_ausstellungen[ausstellung]',
  					'lookUpTable' => array(
  						'table' => 'tx_vcamillerntor_domain_model_ausstellung',
  						'id_field' => 'uid',
  						'alias_field' => 'title',
  						'addWhereClause' => ' AND deleted=0',
  						'useUniqueCache' => 1,
  						'useUniqueCache_conf' => array(
  							'strtolower' => 1,
  							'spaceCharacter' => '-',
  						)
                     )
  				),
  			),		
  		),	
  	),	
  ),
);
