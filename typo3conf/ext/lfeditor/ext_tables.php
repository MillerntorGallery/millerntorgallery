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
			switchEditingMode, refreshLanguageFileList',
			'EditFile' => 'editFile, changeSelection, editFileSave, refreshLanguageFileList',
			'EditConstant' => 'editConstant, changeSelection, editConstantSave, prepareEditConstant,
			refreshLanguageFileList',
			'AddConstant' => 'addConstant, changeSelection, addConstantSave, refreshLanguageFileList',
			'DeleteConstant' => 'deleteConstant, changeSelection, deleteConstantSave, refreshLanguageFileList',
			'RenameConstant' => 'renameConstant, changeSelection, renameConstantSave, refreshLanguageFileList',
			'SearchConstant' => 'searchConstant, changeSelection, searchConstantSearch, refreshLanguageFileList',
			'ViewTree' => 'viewTree, changeSelection, selectExplodeToken, refreshLanguageFileList',
			'ManageBackups' => 'manageBackups, changeSelection, deleteBackup, recoverBackup, showDifferenceBackup,
			deleteAllBackup, refreshLanguageFileList',
		),
		array(
			'access' => 'user,group',
			'icon' => 'EXT:lfeditor/ext_icon.png',
			'labels' => 'LLL:EXT:lfeditor/Resources/Private/Language/locallang_mod.xml',
		)
	);
}

?>