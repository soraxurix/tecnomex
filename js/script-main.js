const contenedorEnlacesNav = document.querySelector('#menu .contenedor-noresponsive'),
  esDispositivoMovil = () => window.innerWidth <= 800;

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
  e.preventDefault();
  if (contenedorEnlacesNav.classList.contains('activo')) {
    contenedorEnlacesNav.classList.remove('activo');
    document.querySelector('body').style.overflow = 'visible';
  } else {
    contenedorEnlacesNav.classList.add('activo');
    document.querySelector('body').style.overflow = 'hidden';
  }
});
