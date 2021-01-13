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
            alerta('errorCorreo');
          }else if (data == 200) {
            alerta('registroCorrecto');
          }
        });
    } else {
      alerta('contraseñaRepError');
    }
  } else {
    alerta('camposVacios');
  }

});

// Alertas
function alerta(accion) {
  switch (accion) {
    case "contraseñaRepError":
      Swal.fire({
        title: '<p class="alerta-bad">Las contraseñas no son iguales.',
        icon: "error",
        background: '#F39090',
        iconColor: '#990404',
        showConfirmButton: false,
        position: 'bottom-start',
        toast: true,
        showClass: {
          popup: 'animate__animated animate__fadeInLeftBig'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutRightBig'
        }
      });
      break;
    case "camposVacios":
      Swal.fire({
        title: '<p class="alerta-bad">Los campos están vacíos.',
        html: '<p class="alerta-bad">Ingreselos para poder continuar.',
        icon: "error",
        background: '#F39090',
        iconColor: '#990404',
        showConfirmButton: false,
        position: 'bottom-start',
        toast: true,
        showClass: {
          popup: 'animate__animated animate__fadeInLeftBig'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutRightBig'
        }
      });
      break;
    case "errorCorreo":
      Swal.fire({
        title: '<p class="alerta-bad">El email ya existe.',
        html: '<p class="alerta-bad">Ingrese otro.',
        icon: "error",
        background: '#F39090',
        iconColor: '#990404',
        showConfirmButton: false,
        position: 'bottom-start',
        toast: true,
        showClass: {
          popup: 'animate__animated animate__fadeInLeftBig'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutRightBig'
        }
      });
      break;
    case "registroCorrecto":
      (async () => {
        const {
          value: accept
        } = await Swal.fire({
          title: '<p class="alerta-ok">Has crado tu cuenta exitosamente',
          icon: "success",
          allowOutsideClick: false,
          backdrop: true,
          confirmButtonText: '<p class="boton-ok">Continuar',
          toast: false,
          background: '#84D4F2',
          iconColor: '#034760',
          confirmButtonColor: '#034760',
          showClass: {
            popup: 'animate__animated animate__fadeInLeftBig bordes'
          }
        })
        if (accept) {
          window.location.replace("index.php");
        }
      })()
      break;
  }
}
