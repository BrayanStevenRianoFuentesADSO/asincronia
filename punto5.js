/**5. Lea el archivo user.json y transforme todos los nombres a mayúsculas
(recorra usuario por usuario) validando que solo se permita ingresar letras
mayúsculas (se valida con un proxy)


a. Modifique solo los usuarios que tengan el rol aprendiz en true

b. Modifique solo los usuarios que más de dos nombres ejemplo (John
Becerra)
c. Modifique solo los usuarios que contenga la palabra ADSO en su
user */


fetch("user.json")


  .then(response => response.json())
  
  .then(usuario => {

    usuario.forEach(datos => {

        if(datos.aprendiz==true){

        fetch(`https://api.github.com/users/${datos.user}/repos`)

        .then(respuestagit => respuestagit.json())
        .then(usuariogit=>{
            
            usuariogit.forEach(repositorios=>{
                console.log(repositorios)
            })
            
        })
        }
    });
  });