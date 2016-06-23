<?php
namespace T3SBS\T3sbootstrap\ViewHelpers\News;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
 

class ChunkViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

    /**
     * @param object $input
     * @param integer $size
     *
     * @return array
     */
    public function render( $input, $size ) {

    	$size = $size > 4 ? 4 : $size;

		if ( !is_array($input) ) $input = $this->object_to_array($input);

        return array_chunk($input, $size);

    }

    /**
     * @param object $data
     *
     * @return array
     */
    public function object_to_array($data) {

	        $result = [];
	        foreach ($data as $key => $value) {
	            $result[$key] = $value;
	        }
	        return $result;
	}


}
