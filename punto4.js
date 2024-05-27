/**4. Basados en la solución del punto 3 daremos solución a los siguientes
puntos:

a. Muestre solo los resultados que tengan menos de 5 repositorios
públicos en una tabla por consola.
b. Muestre solo los resultados de los repositorios que contengan la
palabra JavaScript en su name
c. Ordene de menor a mayor según el nombre del repositorio
d. Muestre solo los repositorios que tengan mas de cinco letras en su
nombre
 */

array_repositorios=[]
fetch("user.json")

  .then(response => response.json())
  
  .then(usuario => {

    usuario.forEach(datos => {

        fetch(`https://api.github.com/users/${datos.user}/repos`)

        .then(respuestagit => respuestagit.json())
        .then(usuariogit=>{
            
            usuariogit.forEach(repositorios=>{
                array_repositorios.push(repositorios)
            })

            if(array_repositorios.length<5){
            console.log(array_repositorios)
        }
        })
    });
  });

