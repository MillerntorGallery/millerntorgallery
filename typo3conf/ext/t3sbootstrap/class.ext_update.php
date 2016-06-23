<?php
/**
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

use TYPO3\CMS\Core\Messaging\FlashMessage;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Update class for the extension manager.
 *
 * @package TYPO3
 * @subpackage tx_t3sbootstrap
 */
class ext_update
{

	/**
	 * Array of flash messages (params) array[][status,title,message]
	 *
	 * @var array
	 */
	protected $messageArray = [];

	/**
	 * @var \TYPO3\CMS\Core\Database\DatabaseConnection
	 */
	protected $databaseConnection;


	/**
	 * Constructor
	 */
	public function __construct()
	{
		$this->databaseConnection = $GLOBALS['TYPO3_DB'];

	}

	/**
	 * Main update function called by the extension manager.
	 *
	 * @return string
	 */
	public function main()
	{
		$this->processUpdates();
		return $this->generateOutput();
	}

	/**
	 * Called by the extension manager to determine if the update menu entry
	 * should by showed.
	 *
	 * @return bool
	 */
	public function access()
	{
		return true;
	}

	/**
	 * The actual update function. Add your update task in here.
	 *
	 * @return void
	 */
	protected function processUpdates()
	{

		// Update 'BE-Layouts' in table pages 
		foreach ([1,2,3,4,5,6,7,8,9,10] as $NR) {
			$count = $this->databaseConnection->exec_SELECTcountRows('*', 'pages','backend_layout = "t3sbootstrap__'.$NR.'"');
			if ($count) {
				$this->databaseConnection->exec_UPDATEquery(
					'pages',
					'pages.backend_layout=' . $this->databaseConnection->fullQuoteStr('t3sbootstrap__'.$NR.'', 'pages'),
					[
						'backend_layout' => 'pagets__t3sbootstrap_'.$NR.'',
					]
				);
				$this->messageArray[] = [FlashMessage::OK, 'Migrate backend_layout t3sbootstrap__'.$NR.' to pagets__t3sbootstrap_'.$NR.'', 
				$count.$NR.' records have been updated!'];
			}

			$count = $this->databaseConnection->exec_SELECTcountRows('*', 'pages','backend_layout_next_level = "t3sbootstrap__'.$NR.'"');
			if ($count) {
				$this->databaseConnection->exec_UPDATEquery(
					'pages',
					'pages.backend_layout_next_level=' . $this->databaseConnection->fullQuoteStr('t3sbootstrap__'.$NR.'', 'pages'),
					[
						'backend_layout_next_level' => 'pagets__t3sbootstrap_'.$NR.'',
					]
				);
				$this->messageArray[] = [FlashMessage::OK, 'Migrate backend_layout_next_level t3sbootstrap__'.$NR.' to pagets__t3sbootstrap_'.$NR.'', 
				$count.' records have been updated!'];
			}
		}

		// Update 't3sbs_header' records 
		$count_t3sbs_header = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_header"');
		if ($count_t3sbs_header) {
			$this->databaseConnection->exec_UPDATEquery(
				'tt_content',
				'tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_header', 'tt_content'),
				[
					'CType' => 'header',
				]
			);
			$this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_header to header', $count_t3sbs_header.' records have been updated!'];
		}
		
		// Update 't3sbs_text' records 
		$count_t3sbs_text = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_text"');
		if ($count_t3sbs_text) {
			$this->databaseConnection->exec_UPDATEquery(
				'tt_content',
				'tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_text', 'tt_content'),
				[
					'CType' => 'textmedia',
				]
			);
			$this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_text to textmedia', $count_t3sbs_text.' records have been updated!'];
		}
		
		// Update 't3sbs_menu' records 
		$count_t3sbs_menu = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_menu"');
		if ($count_t3sbs_menu) {
			$this->databaseConnection->exec_UPDATEquery(
				'tt_content',
				'tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_menu', 'tt_content'),
				[
					'CType' => 'menu',
				]
			);
			$this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_menu to menu', $count_t3sbs_menu.' records have been updated!'];
		}
		
		// Update 't3sbs_bullets' records 
		$count_t3sbs_bullets = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_bullets"');
		if ($count_t3sbs_bullets) {
			$this->databaseConnection->exec_UPDATEquery(
				'tt_content',
				'tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_bullets', 'tt_content'),
				[
					'CType' => 'bullets',
				]
			);
			$this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_bullets to bullets', $count_t3sbs_bullets.' records have been updated!'];
		}
		
		// Update 't3sbs_table' records 
		$count_t3sbs_table = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_table"');
		if ($count_t3sbs_table) {
			$this->databaseConnection->exec_UPDATEquery(
				'tt_content',
				'tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_table', 'tt_content'),
				[
					'CType' => 'table',
				]
			);
			$this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_table to table', $count_t3sbs_table.' records have been updated!'];
		}
		
		// Update 't3sbs_video' records 
		$count_t3sbs_video = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_video"');
		if ($count_t3sbs_video) {
			$this->databaseConnection->exec_UPDATEquery(
				'tt_content',
				'tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_video', 'tt_content'),
				[
					'CType' => 'textmedia',
				]
			);
			$this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_video to textmedia', $count_t3sbs_video.' records have been updated!'];
		}

		// Update 't3sbs_textpic, t3sbs_image' records, t3sbs_mediaobject and t3sbs_video
		$count_t3sbs_textpic = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_textpic"');
		$count_t3sbs_image = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_image"');
		$count_t3sbs_mediaobject = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','CType = "t3sbs_mediaobject"');

		if ($count_t3sbs_textpic || $count_t3sbs_image || $count_t3sbs_mediaobject ) {
			$query = '
				UPDATE tt_content
				LEFT JOIN sys_file_reference
				ON sys_file_reference.uid_foreign=tt_content.uid
				AND sys_file_reference.tablenames=' . $this->databaseConnection->fullQuoteStr('tt_content', 'sys_file_reference')
				. ' AND sys_file_reference.fieldname=' . $this->databaseConnection->fullQuoteStr('image', 'sys_file_reference')
				. ' SET tt_content.CType=' . $this->databaseConnection->fullQuoteStr('textmedia', 'tt_content')
				. ', tt_content.assets=tt_content.image,
				tt_content.image=0,
				sys_file_reference.fieldname=' . $this->databaseConnection->fullQuoteStr('assets', 'tt_content')
				. ' WHERE
				tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_textpic', 'tt_content')
				. ' OR tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_image', 'tt_content')
				. ' OR tt_content.CType=' . $this->databaseConnection->fullQuoteStr('t3sbs_mediaobject', 'tt_content');

			$this->databaseConnection->sql_query($query);
	
			if($count_t3sbs_textpic)
			 $this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_textpic to textmedia', $count_t3sbs_textpic.' records have been updated!'];
			if($count_t3sbs_image)
			 $this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_image to textmedia', $count_t3sbs_image.' records have been updated!'];
			if($count_t3sbs_mediaobject)
			 $this->messageArray[] = [FlashMessage::OK, 'Migrate CTypes t3sbs_mediaobject to textmedia', $count_t3sbs_mediaobject.' records have been updated!'];
		}

		// Update 't3sbs_thumbnails' records
		$count_t3sbs_thumbnails = $this->databaseConnection->exec_SELECTcountRows('image', 'tt_content','CType = "t3sbs_thumbnails" AND tt_content.image > 0');				

		if ($count_t3sbs_thumbnails) {
			$query = '
				UPDATE sys_file_reference
				LEFT JOIN tt_content
				ON sys_file_reference.uid_foreign = tt_content.uid
				AND sys_file_reference.tablenames =\'tt_content\'
				AND sys_file_reference.fieldname = \'image\'
				SET tt_content.assets = tt_content.image,
				tt_content.image = 0,
				sys_file_reference.fieldname = \'assets\'
				WHERE
				tt_content.CType = \'t3sbs_thumbnails\'
				AND tt_content.image > 0
			';

			$this->databaseConnection->sql_query($query);
			
			$this->messageArray[] = [FlashMessage::OK, 'Update old mediafile references for CTypes t3sbs_thumbnails', $count_t3sbs_thumbnails.' records have been updated!'];

		}

		// Update 't3sbs_carousel' records
		$count_t3sbs_carousel = $this->databaseConnection->exec_SELECTcountRows('image', 'tt_content','CType = "t3sbs_carousel" AND tt_content.image > 0');				

		if ($count_t3sbs_carousel) {
			$query = '
				UPDATE sys_file_reference
				LEFT JOIN tt_content
				ON sys_file_reference.uid_foreign = tt_content.uid
				AND sys_file_reference.tablenames =\'tt_content\'
				AND sys_file_reference.fieldname = \'image\'
				SET tt_content.assets = tt_content.image,
				tt_content.image = 0,
				sys_file_reference.fieldname = \'assets\'
				WHERE
				tt_content.CType = \'t3sbs_carousel\'
				AND tt_content.image > 0
			';

			$this->databaseConnection->sql_query($query);

			$this->messageArray[] = [FlashMessage::OK, 'Update old mediafile references for CTypes t3sbs_carousel', $count_t3sbs_carousel.' records have been updated!'];

		}

		// Update 'section_frame' records
		$ttcontentFields = $this->databaseConnection->admin_get_fields('tt_content');
		if (isset($ttcontentFields['section_frame'])) {
			$count_section_frames = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','section_frame > 0');
			$count_updateable = $this->databaseConnection->exec_SELECTcountRows('*', 'tt_content','tt_content.layout = 0 AND tt_content.section_frame > 0');
	
			if ($count_section_frames) {
				if ($count_updateable) {
					$this->databaseConnection->exec_UPDATEquery(
						'tt_content',
						'tt_content.layout = 0 AND tt_content.section_frame > 0',
						[
							'layout' => 'section_frame',
							'section_frame' => '0',
						]
					);
					$this->messageArray[] = [FlashMessage::OK, 'Migrate section_frame to layout', $count_updateable.' records have been updated!'];
				}
			}

		}	

		// Check for errors
		if ($this->databaseConnection->sql_error()) {
			$this->messageArray[] = [FlashMessage::ERROR, 'SQL-ERROR:', htmlspecialchars($this->databaseConnection->sql_error())];
			return $this->generateOutput();
		}
				
	}


	/**
	 * Generates output by using flash messages
	 *
	 * @return string
	 */
	protected function generateOutput()
	{
		$output = '';
		
		if ($this->messageArray[0]) {

			foreach ($this->messageArray as $messageItem) {
				/** @var \TYPO3\CMS\Core\Messaging\FlashMessage $flashMessage */
				$flashMessage = GeneralUtility::makeInstance(
					'TYPO3\\CMS\\Core\\Messaging\\FlashMessage',
					$messageItem[2],
					$messageItem[1],
					$messageItem[0]);
				$output .= $flashMessage->render();
			}

		} else {

			/** @var \TYPO3\CMS\Core\Messaging\FlashMessage $flashMessage */
			$flashMessage = GeneralUtility::makeInstance(
				'TYPO3\\CMS\\Core\\Messaging\\FlashMessage',
				'Nothing to do - everything is OK!',
				'Update script',
				'NOTICE');
			$output .= $flashMessage->render();
	
		}
 
		return $output;

	}
	
}
