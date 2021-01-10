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
        (async () => {
          const {
            value: accept
          } = await Swal.fire({
            title: nombre + ', has inicado sesión exitosamente',
            icon: "success",
            allowOutsideClick: false,
            backdrop: true,
            confirmButtonText: 'Continuar'
          })
          if (accept) {
            window.location.replace("index.html");
          }
        })()

      } else {
        aler("Hubo un error", "error");
      }

      // for (const userInfo of data) {
      //   nombre= userInfo.Nombre;
      // }
    });
});

function aler(msg, status) {
  Swal.fire({
    title: msg,
    icon: status,
    confirmButtonText: 'Continuar',
    backdrop: true,
    toast: false,
    allowOutsideClick: false,
    position: 'center'
  });
}
