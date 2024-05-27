/**b. Solucione el mismo ejercicio, utilizando solo promesas no
async/await. */

filtrar=nombre_repositorio=>nombre_repositorio.name==="asincronia"//define una funcion que filtra 
//los repositorios por nombre, en este caso, los repositorios lamados "asincronia"


fetch("main.json")// Realiza una solicitud `fetch` para obtener el archivo `main.json`
.then(name_user=>name_user.json())
 // Convierte la respuesta de la solicitud a json y la guarda en la variable `name_user`.

.then(user=>{
  return fetch(`https://api.github.com/users/${user.name}/repos`) //realiza una solicitd a la api de github
})

.then(respuestagit=>respuestagit.json()) 
// Convierte la respuesta de la solicitud a json y la guarda en la variable `respuestagit`.

.then(usuariogit=>{
  usuariogit.forEach(elemento=>{
    if(elemento.name==="asincronia"){
      console.log(elemento)
    }
//  si el nombre del repositorio es asincronia, lo mostramos en la consola
  })

  let repos_filtrados=usuariogit.filter(filtrar) 
//define una variable que filtra los repositorios que cumplen con la condicion asignada en filtrar
//que se llamen "asincronia"
  console.log(repos_filtrados) 
  //imprime en consola los repositorios filtrados
  console.log(usuariogit)
  //imprime en consola todos los repositorios
})