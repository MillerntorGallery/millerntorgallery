/***************************************************************
 *  Copyright notice
 *
 *  (c) sgalinski Internet Services (http://www.sgalinski.de)
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

function submitBackupForm(filename, langFile, del, restore, deleteAll, origDiff) {
	document.mainForm.elements['delete'].value = del;
	document.mainForm.elements['restore'].value = restore;
	document.mainForm.elements['deleteAll'].value = deleteAll;
	document.mainForm.elements['origDiff'].value = origDiff;
	document.mainForm.elements['file'].value = filename;
	document.mainForm.elements['langFile'].value = langFile;
	document.mainForm.submit();
}

function submitRedirectForm(label, value, token) {
	document.mainForm.elements[label].value = value + token;
	document.mainForm.submit();
}

function submitLanguageFileEdit(buttonType) {
	document.forms.contentForm.elements['tx_lfeditor_user_lfeditorlfeditor[buttonType]'].value = buttonType;
}

/**
 * Renders confirmation dialog for cancel button.
 *
 * @returns {boolean}
 */
function confirmCancelFileEdit() {
	var warningText = AY.lang.Lfeditor['function.langfile.confirmCancel'];
	if (window.confirm(warningText)) {
		submitLanguageFileEdit(-1);
		return true;
	}
	return false;
}

/** args -- fieldID(id), picID(id), bottom(boolean) */
function openCloseTreeEntry(prefix, args) {
	var length = arguments.length;
	var pic, curTreeHide;

	for (var i = 1; i < length; i += 3) {
		curTreeHide = 0;
		if (!document.getElementById(arguments[i]).style.display) {
			curTreeHide = 1;
		}

		if (curTreeHide) {
			document.getElementById(arguments[i]).style.display = 'none';
			pic = 'Plus';
		} else {
			document.getElementById(arguments[i]).style.display = '';
			pic = 'Minus';
		}

		if (arguments[i + 2]) {
			pic = pic + 'Bottom';
		}

		document.getElementById(arguments[i + 1]).src = prefix + '/tree' + pic + '.png';
		document.getElementById(arguments[i + 1]).alt = 'tree' + pic + '.png';
	}
}

var hideAll = null;

/**
 * Folds and un folds all constants in tree, on tree view.
 */
function hideUnHideAll() {
	if (hideAll === null) {
		hideAll = document.getElementById('ul-Root').style.display !== 'none';
	}

	var ulIdRegex = /^ul-/;
	var treeUlElements = [];
	var allUl = document.getElementsByTagName('ul');
	for (var iterator = allUl.length; iterator--;) {
		if (ulIdRegex.test(allUl[iterator].id)) {
			treeUlElements.push(allUl[iterator]);
		}
	}

	var imageIdRegex = /^icon-/;
	var imageMinusSrcRegex = /treeMinus/;
	var imagePlusSrcRegex = /treePlus/;
	var treeImgMinusElements = [];
	var treeImgPlusElements = [];
	var allImg = document.getElementsByTagName('img');
	for (var iterator = allImg.length; iterator--;) {
		if (imageIdRegex.test(allImg[iterator].id)) {
			if (imageMinusSrcRegex.test(allImg[iterator].src)) {
				treeImgMinusElements.push(allImg[iterator]);
			} else if (imagePlusSrcRegex.test(allImg[iterator].src)) {
				treeImgPlusElements.push(allImg[iterator]);
			}
		}
	}

	if (hideAll) {
		for (var iterator = treeUlElements.length; iterator--;) {
			treeUlElements[iterator].style.display = 'none';
		}
		for (var iterator = treeImgMinusElements.length; iterator--;) {
			treeImgMinusElements[iterator].src = treeImgMinusElements[iterator].src.replace(imageMinusSrcRegex, 'treePlus');
		}
		hideAll = false;
	} else {
		for (var iterator = treeUlElements.length; iterator--;) {
			treeUlElements[iterator].style.display = '';
		}
		for (var iterator = treeImgPlusElements.length; iterator--;) {
			treeImgPlusElements[iterator].src = treeImgPlusElements[iterator].src.replace(imagePlusSrcRegex, 'treeMinus');
		}
		hideAll = true;
	}
}