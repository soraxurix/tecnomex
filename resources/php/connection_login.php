<?php
$email = $_POST['email'];
$pass = $_POST['pass'];

// $email = "uriel@gmail.com";
// $pass = "123456789*/";

include("connection.php");

$consulta1 = "SELECT idCliente from Clientes where Email = '$email'";
$result1 = mysqli_query($con, $consulta1);

$consulta2 = "SELECT idCliente from Clientes where Pass = '$pass' and Email = '$email'";
$result2 = mysqli_query($con, $consulta2);

if (!($row = $result1->fetch_array())) {
  echo json_encode(201); //Manda un error en caso que la contraseña no exista
}else if (!($row = $result2->fetch_array())) {
  echo json_encode(202); //Manda un error en caso que la contraseña del usuario no exista
}else{
  echo json_encode(200);
}

 ?>
