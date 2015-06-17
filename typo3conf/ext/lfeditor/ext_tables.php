<?php

if (!defined('TYPO3_MODE')) {
	die('Access denied!!!');
}

if (TYPO3_MODE == 'BE') {
	TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
		'SGalinski.lfeditor',
		'user',
		'LFEditor',
		'',
		array(
			'General' => 'index, general, changeSelection, generalSave, goToEditFile, switchInsertMode,
			switchEditingMode',
			'EditFile' => 'editFile, changeSelection, editFileSave',
			'EditConstant' => 'editConstant, changeSelection, editConstantSave, prepareEditConstant',
			'AddConstant' => 'addConstant, changeSelection, addConstantSave',
			'DeleteConstant' => 'deleteConstant, changeSelection, deleteConstantSave',
			'RenameConstant' => 'renameConstant, changeSelection, renameConstantSave',
			'SearchConstant' => 'searchConstant, changeSelection, searchConstantSearch',
			'ViewTree' => 'viewTree, changeSelection, selectExplodeToken',
			'ManageBackups' => 'manageBackups, changeSelection, deleteBackup, recoverBackup, showDifferenceBackup,
			deleteAllBackup',
		),
		array(
			'access' => 'user,group',
			'icon' => 'EXT:lfeditor/ext_icon.png',
			'labels' => 'LLL:EXT:lfeditor/Resources/Private/Language/locallang_mod.xml',
		)
	);
}

?>