function cargadatos(){
    fetch("datos.json")
    .then (tomar_datos=>tomar_datos.json())

    .then (respuesta=>{
        respuesta.forEach(empleado => {
            console.log((empleado.nombre), (empleado.puesto))
        });
    })
}

cargadatos();