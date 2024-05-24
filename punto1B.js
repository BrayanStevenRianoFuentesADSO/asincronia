/**b. Solucione el mismo ejercicio, utilizando solo promesas no
async/await. */

function cargar_datos() { //definimos una funcion 
  
  fetch("main.json") //fetch que invoca el json que contiene el nombre de usuario para ingresar a los repositorios
  
    .then(user => user.json())
    
    fetch(`https://api.github.com/users/${user.name}/repos`) //fetch que llama a la api de github en la cual se ingresa el nombre de usuario especificado en el archivo json anterior
  .then(tomar_datos => tomar_datos.json()) //si se logra invocar la api se van a convertir sus datos a formato json


    .then(respuesta => {
      respuesta.forEach(usuario => {
        console.log((usuario))
      })
    })
}

cargar_datos();
