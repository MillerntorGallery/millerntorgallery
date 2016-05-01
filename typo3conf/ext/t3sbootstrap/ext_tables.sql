#
# Table structure for table 'pages'
#
CREATE TABLE pages (
	tx_t3sbootstrap_glyphicon varchar(100) DEFAULT '' NOT NULL,
	tx_t3sbootstrap_fontawesome_icon varchar(100) DEFAULT '' NOT NULL,
	tx_t3sbootstrap_linkToTop tinyint(4) DEFAULT '0' NOT NULL,
);
#
# Table structure for table 'pages_language_overlay'
#
CREATE TABLE pages_language_overlay (
	tx_t3sbootstrap_glyphicon varchar(100) DEFAULT '' NOT NULL,
	tx_t3sbootstrap_fontawesome_icon varchar(100) DEFAULT '' NOT NULL,
	tx_t3sbootstrap_linkToTop tinyint(4) DEFAULT '0' NOT NULL,
);

#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
	tx_t3sbootstrap_imagestyle varchar(100) DEFAULT '' NOT NULL,
	tx_t3sbootstrap_content_slide tinyint(4) DEFAULT '0' NOT NULL,
	tx_t3sbootstrap_fontawesome_icon varchar(100) DEFAULT '' NOT NULL,
	tx_t3sbootstrap_flexform mediumtext,
);
