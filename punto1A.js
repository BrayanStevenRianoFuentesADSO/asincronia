


const filtrar = x => x.name === "Evaluacion"; 

(async () => {

  let response = await fetch(`main.json`) //llama al archivo json mediante fetch

  let user = await response.json();  //convierte los datos a formato json

  let respuestagithub = await fetch(`https://api.github.com/users/${user.name}/repos`) //llama a la api de github mediante fetch, toma los repositorios publicos del usuario especificado por su nombre

  let usuariogithub = await respuestagithub.json(); //convierte los datos a formato json

  
  usuariogithub.forEach(element => { 
    if (element.name === "Evaluacion") {
      console.log(element)
    }
  });

   let data = usuariogithub.filter(filtrar)
   console.log(data)
   console.log(usuariogithub)
  
})();

