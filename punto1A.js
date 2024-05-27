


const filtrar = x => x.name === "Evaluacion"; 
// define una funcion que filtra los repositorios por nombre, en este caso los repositorios llamados "Evaluacion".

(async () => {
// Inicia una función asincrónica 

  let response = await fetch(`main.json`); 
  // Realiza una solicitud para obtener el archivo `main.json` y espera a que se complete.

  let user = await response.json();  
  // Convierte la respuesta de la solicitud a json y la guarda en la variable `user`.

  let respuestagithub = await fetch(`https://api.github.com/users/${user.name}/repos`); 
  // Realiza una solicitud a la api de github para obtener los repositorios del usuario,
  // usando el nombre de usuario obtenido del archivo json anterior.

  let usuariogithub = await respuestagithub.json(); 
  // Convierte la respuesta de la solicitud a la api de github a json y la guarda en `usuariogithub`.

  usuariogithub.forEach(element => { 
  // Recorre cada elemento (repositorio) en `usuariogithub`.

    if (element.name === "Evaluacion") {
      console.log(element);
      // Si el nombre del repositorio es "Evaluacion", lo imprime en la consola.
    }
  });

  let data = usuariogithub.filter(filtrar);
  // Filtra los repositorios usando la función `filtrar` definida al principio.
  // El resultado es un nuevo array que contiene solo los repositorios cuyo nombre es "Evaluacion".

  console.log(data);
  // Imprime el array filtrado en la consola (un repositorio llamado Evaluacion, si lo hay)

  console.log(usuariogithub);
  // Imprime la lista completa de repositorios en la consola.

})();

