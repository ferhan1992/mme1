<?php
//include db configuration file
include_once("config.php");

$subject=$_POST['subject'];
$geo=$_POST['geo'];
$url=$_POST['url'];
$email=$_POST['email'];
$date=$_POST['date'];
$time=$_POST['time'];

//MySQLi query
$results = mysql_query("INSERT INTO appointment(subject, coordinates, url, email, date, time) values ('$subject', '$geo', '$url','$email', '$date', '$time')");

if($results){
    echo "Your comment has been sent";
  }
  else{
    echo "Error in sending your comment";
  }
?>