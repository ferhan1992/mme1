<?php
//include db configuration file
$con=mysqli_connect("kaplanseren.de","mme","asdasd123","mme1_");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$appointmentid=$_POST['appointmentid'];
$subject=$_POST['subject'];
$geo=$_POST['geo'];
$url=$_POST['url'];
$email=$_POST['email'];
$date=$_POST['date'];
$time=$_POST['time'];

//MySQLi query
$sql = "SELECT * FROM appointment WHERE appointmentid='$appointmentid' OR WHERE subject='$subject' OR WHERE geo='$geo' OR WHERE url='$url' OR WHERE email='$email' OR WHERE date='$date' OR WHERE time='$time'";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "Record found";

mysqli_close($con);

?>