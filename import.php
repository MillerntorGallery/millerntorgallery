<?php


$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$table = 'tx_vcamillerntor_domain_model_kuenstler';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}




mysql_select_db('ml_62');




$row_count = 1;
if (($handle = fopen("artist.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 4000, ";")) !== FALSE) {
        $num = count($data);
        
        echo $row_count.':'.$num.':'.$data[0].'<br />'; 
    
     $search_sql = 'SELECT * FROM '.$table.' WHERE name LIKE ("%'.$data[0].'%")';
  
	$result = mysql_query( $search_sql, $conn );
	if(! $result )
	{
	  die('Could not enter data: ' . mysql_error());
	} else {
		if (mysql_num_rows($result) == 0) {
			
			//INSERT
			$sql = 'INSERT INTO  '.$table.'(name,decription,url,facebook,pid,tstamp,crdate) '.
			'VALUES ( "'.$data[0].'","'.addslashes ( $data[3]).'","'.$data[1].'","'.$data[2].'", 4,NOW(),NOW() )';
			echo $sql.'<br />';
			
			$retval = mysql_query( $sql, $conn );
			if(! $retval )
			{
			  die('Could not enter data: ' . mysql_error());
			}
			$uid = mysql_insert_id();
			
		} else {
			while ($row = mysql_fetch_assoc($result)) {
			  	$sql = 'UPDATE  '.$table.' SET decription="'.addslashes ( utf8_decode($data[3])).'",url="'.$data[1].'",facebook="'.$data[1].'" WHERE uid='.$row['uid'];
				echo $sql.'<br />';
				$retval = mysql_query( $sql, $conn );
				if(! $retval )
				{
				  die('Could not enter data: ' . mysql_error());
				}
			
			    echo $row['name'].':';
			    echo $row['uid'].'<br /><br />';
			    $uid = $row['uid'];
			}			
		}	
	}
    
        //SET Gallery 2014
		//
		// Already set?
		$gal_sql = 'SELECT * FROM tx_vcamillerntor_ausstellung_kuenstler_mm WHERE uid_local=3 AND uid_foreign='.$uid;
		$res_gal = mysql_query( $gal_sql, $conn );
		if (mysql_num_rows($res_gal) == 0) {
			$ins_sql = 'INSERT INTO tx_vcamillerntor_ausstellung_kuenstler_mm (uid_local,uid_foreign) VALUES (3,'.$uid.')';
			$retval = mysql_query( $ins_sql, $conn );
		}
        $row_count++;    
        
    }
    fclose($handle);
}

mysql_close($conn);

?> 