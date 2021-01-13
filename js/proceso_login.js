const button = document.getElementById('button');
const form = document.getElementById('form');


button.addEventListener('click', function(e) {
  e.preventDefault();
  const dataForm = new FormData(form);

  fetch("resources/php/connection_login.php", {
      method: "POST",
      body: dataForm
    })
    .then(res => res.json())
    .then(data => {
      const count = Object.keys(data).length;

      var nombre = "";
      for (const userInfo of data) {
        nombre = userInfo.Nombre;
      }

      if (count > 0) {
        alerta("usuarioCorrecto");
      } else {
        alerta("contraseñaError");
      }

      // for (const userInfo of data) {
      //   nombre= userInfo.Nombre;
      // }
    });
});



// Alertas
function alerta(accion) {
  switch (accion) {
    case "contraseñaError":
      Swal.fire({
        title: '<p class="alerta-bad">Ingrese un contraseña válida.',
        html: '<p class="alerta-bad">Debe tener mínimo 8 carácteres.',
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
    case "errorUsuario":
      Swal.fire({
        title: '<p class="alerta-bad">La contraseña o el email no coinciden.',
        html: '<p class="alerta-bad">Intentelo de nuevo.',
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
        title: '<p class="alerta-bad">Ingrese un correo válido.',
        html: '<p class="alerta-bad">Intentalo de nuevo.',
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
    case "usuarioCorrecto":
      (async () => {
        const {
          value: accept
        } = await Swal.fire({
          title: '<p class="alerta-ok">Has iniciado sesión exitosamente',
          icon: "success",
          allowOutsideClick: false,
          backdrop: true,
          confirmButtonText: '<p class="boton-ok">Continuar',
          toast: false,
          background: '#84D4F2',
          iconColor: '#034760',
          confirmButtonColor: '#034760',
          showClass: {
            popup: 'animate__animated animate__fadeInLeftBig'
          }
        })
        if (accept) {
          window.location.replace("index.php");
        }
      })()
      break;
  }
}
