<?php
 echo " ".checkID();

 function checkID() {
   include("connection.php");
   do {
     $num=rand(10,12);
     echo $num;
     $consulta = "SELECT Nombre FROM clientes WHERE idCliente='$num'";
     $result = mysqli_query($con,$consulta);
   } while ($row = $result->fetch_array());
   return $num;
 }

?>
