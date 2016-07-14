<?php
//include db configuration file
$con=mysqli_connect("kaplanseren.de","mme","asdasd123","mme1_");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$subject=$_POST['subject'];
$geo=$_POST['geo'];
$url=$_POST['url'];
$email=$_POST['email'];
$date=$_POST['date'];
$time=$_POST['time'];

//MySQLi query
$sql = "INSERT INTO appointment(subject, geo, url, email, date, time) values ('$subject', '$geo', '$url','$email', '$date', '$time')";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "1 record added";

mysqli_close($con);

?>