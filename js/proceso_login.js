const button = document.getElementById('button');
const form = document.getElementById('form');
const loader = document.querySelector('.loader');

window.addEventListener('load', function() {
  loader.classList.add('hidden');
});


button.addEventListener('click', function(e) {
  e.preventDefault();
  const dataForm = new FormData(form);

  fetch("resources/php/connection_login.php", {
      method: "POST",
      body: dataForm
    })
    .then(res => res.json())
    .then(data => {
      if (data == 201) {
          alerta("errorEmailExiste");
      }else if (data == 202) {
        alerta("errorContraseñaNoExiste");
      }else{
        alerta("usuarioCorrecto");
      }
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
    case "errorEmailExiste":
      Swal.fire({
        title: '<p class="alerta-bad">El email no existe.',
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
      case "errorContraseñaNoExiste":
        Swal.fire({
          title: '<p class="alerta-bad">El contraseña no es correcta.',
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
