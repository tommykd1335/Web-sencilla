
const inputUsuario = document.getElementById('usuarioGithub')
const password = document.getElementById('password')
const botonBuscar = document.getElementById('boton')

function buscar() {
  if (inputUsuario.value=== 'kamranahmedse' && password.value==='4921183') {
    window.location.href = 'https://github.com/kamranahmedse'
  }else{
    alert('Este usuario no esta registrado')
  }
}

botonBuscar.addEventListener('click', buscar)