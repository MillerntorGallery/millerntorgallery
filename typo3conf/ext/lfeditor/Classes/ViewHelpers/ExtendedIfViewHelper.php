<?php

namespace SGalinski\Lfeditor\ViewHelpers;

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

use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper;

/**
 * ExtendedIfViewHelper
 */
class ExtendedIfViewHelper extends AbstractConditionViewHelper {
	/**
	 * renders <f:then> child if $condition or $or is true, otherwise renders <f:else> child.
	 *
	 * Note: The phpdoc data type of the parameter must be named "boolean".
	 * Otherwise Fluid doesn't evaluates conditions itself.
	 *
	 * @param boolean $condition
	 * @param boolean $or
	 * @param boolean $or2
	 * @param boolean $or3
	 * @param boolean $or4
	 * @param boolean $and
	 * @param boolean $and2
	 * @param boolean $and3
	 * @param boolean $and4
	 * @param boolean $negate
	 * @return string
	 */
	public function render(
		$condition, $or = FALSE, $or2 = FALSE, $or3 = FALSE, $or4 = FALSE,
		$and = TRUE, $and2 = TRUE, $and3 = TRUE, $and4 = TRUE, $negate = FALSE
	) {
		if ($this->evaluateConditionFunctionExists()) {
			return parent::render();
		}

		// @todo Remove the following part if only > 7.5 support.
		$conditionResult = ($condition || $or || $or2 || $or3 || $or4) && $and && $and2 && $and3 && $and4;
		if ($negate ? !$conditionResult : $conditionResult) {
			return $this->renderThenChild();
		} else {
			return $this->renderElseChild();
		}
	}

	/**
	 * This method decides if the condition is TRUE or FALSE. It can be overriden in extending viewhelpers to adjust functionality.
	 *
	 * @param array $arguments ViewHelper arguments to evaluate the condition for this ViewHelper, allows for flexiblity in overriding this method.
	 * @return bool
	 */
	static protected function evaluateCondition($arguments = NULL) {
		$conditionResult = (
				isset($arguments['condition']) && $arguments['condition'] ||
				isset($arguments['or']) && $arguments['or'] ||
				isset($arguments['or2']) && $arguments['or2'] ||
				isset($arguments['or3']) && $arguments['or3'] ||
				isset($arguments['or4']) && $arguments['or4']
			) && isset($arguments['and']) && $arguments['and'] &&
			isset($arguments['and2']) && $arguments['and2'] &&
			isset($arguments['and3']) && $arguments['and3'] &&
			isset($arguments['and4']) && $arguments['and4'];

		return isset($arguments['negate']) && $arguments['negate'] ? !$conditionResult : $conditionResult;
	}

	/**
	 * Returns true, if the function evaluateCondition exists in the AbstractConditionViewHelper class.
	 *
	 * @deprecated Remove this function if only > 7.5 support.
	 * @return boolean
	 */
	protected function evaluateConditionFunctionExists() {
		return method_exists('TYPO3\CMS\Fluid\Core\ViewHelper\AbstractConditionViewHelper', 'evaluateCondition');
	}
}

?>