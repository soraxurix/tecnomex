<?php
 include("connection.php");

 // $id=checkID();
 // $nombre = "Pedro";
 // $apellido = "Hernandez";
 // $email = "soa@gmail.com";
 // $pass = "123456789*/";
 // $fechareg = date("d/m/y");

 $id=checkID();
 $nombre = $_POST['firstname'];
 $apellido = $_POST['lastname'];
 $email = $_POST['email'];
 $pass = $_POST['pass'];
 $Rpass = $_POST['Rpass'];
 $fechareg = date("d/m/y");

 $consulta = "SELECT Nombre FROM Clientes WHERE Email = '$email'";

 $result = mysqli_query($con,$consulta);

 if ($row = $result->fetch_array()) {
   echo json_encode(201);
 }else{
   $consulta = "INSERT INTO Clientes VALUES ('$id','$nombre','$apellido','$email','$pass', '$fechareg')";
   $result = mysqli_query($con, $consulta);
   echo json_encode(200);
 }

 function checkID() {
   include("connection.php");
   do {
     $num=rand(1,99999);
     $consulta = "SELECT Nombre FROM Clientes WHERE idCliente='$num'";
     $result = mysqli_query($con,$consulta);
   } while ($row = $result->fetch_array());
   return $num;
 }
?>
