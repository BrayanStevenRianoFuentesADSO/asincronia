/**Basado en la solución del punto 2, transforme esta solución utilizando
async/await\

a. muestre los repositorios públicos de cada aprendiz en consola.
b. Una todos los resultados en un solo arreglo
c. Filtre la consulta con solo los aprendices que tengan el rol de
aprendiz, esta solución se deba dar antes de realizar la solicitud al
api.
 */

array_repositorios=[]
fetch("user.json")

  .then(response => response.json())
  
  .then(usuario => {

    usuario.forEach(datos => {

        if(datos.aprendiz==true){

        fetch(`https://api.github.com/users/${datos.user}/repos`)

        .then(respuestagit => respuestagit.json())
        .then(usuariogit=>{
            
            usuariogit.forEach(repositorios=>{
                array_repositorios.push(repositorios)
            })
            console.log(array_repositorios)
        })
        }
    });
  });

