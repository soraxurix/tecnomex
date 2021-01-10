button = document.getElementById("button");
form = document.getElementById("form");
const dataForm = new FormData(form);

button.addEventListener('click', function(e) {
  e.preventDefault();

  const dataForm = new FormData(form);

  if (dataForm.get('firstname') != '' && dataForm.get('lastname') != '' && dataForm.get('email') != '' && dataForm.get('pass') != '' && dataForm.get('Rpass') != '') {
    if (dataForm.get('pass') == dataForm.get('Rpass')) {

      fetch("resources/php/connection_signin.php", {
          method: "POST",
          body: dataForm
        })
        .then(res => res.json())
        .then(data => {
          if (data == 201) {
            aler('El correo electronico ya existe.', 'error');
          }else if (data == 200) {
            aler('Te has registrado exitosamente.', 'success');
          }
        });
    } else {
      aler('Las contraseñas no son iguales.', 'error');
    }
  } else {
    aler('Los campos están vacios', 'error');
  }

});

function aler(msg, status) {
  Swal.fire({
    title: msg,
    icon: status,
    confirmButtonText: 'OK',
    backdrop: true,
    toast: true,
    allowOutsideClick: false,
    position: 'center'
  });
}
