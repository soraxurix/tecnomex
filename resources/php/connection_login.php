<?php
$email = $_POST['email'];
$pass = $_POST['pass'];

include("connection.php");

$consulta = "SELECT * from Clientes where Email = '$email' and Pass = '$pass'";

$result = mysqli_query($con, $consulta);

$json_array = array();

while ($row = mysqli_fetch_assoc($result)) {
  $json_array[]= $row;
}
// echo'<pre>';
// print_r($json_array);
// echo'</pre>';

echo json_encode($json_array);
 ?>
