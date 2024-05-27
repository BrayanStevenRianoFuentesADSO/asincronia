/**2. Lea el archivo users.json suministrado por el instructor y tome como base
las capturas para luego mostrar todos los datos de usuario de cada
aprendiz, este ejercicio se desarrolla con promesas.

a. Imprima el resultado en una tabla donde solo nos mostrar el nombre
y el avatar de cada aprendiz */



fetch("user.json")

  .then(response => response.json())
  .then(usuario => {

    usuario.forEach(dato => {

      fetch(`https://api.github.com/users/${dato.user}`)

        .then(respuestagit => respuestagit.json())
        
        .then(datosgit => {
          console.log(datosgit.login, datosgit.avatar_url); 
        });
    });
  });
 










