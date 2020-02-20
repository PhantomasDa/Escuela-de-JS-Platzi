var sacha = {
    nombre: 'christian',
    Apellido : 'Mock',
    edad: 19
}

var arturo = {
    nombre: 'arturo',
    Apellido : 'rios',
    edad: 29
}

function impimirNombreEnMayuscula(persona){
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}


impimirNombreEnMayuscula(sacha)
impimirNombreEnMayuscula(arturo)
// impimirNombreEnMayuscula({nombre: 'pepito'})

function imprimirNombreYEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log(`hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(arturo)
imprimirNombreYEdad(sacha)

function cumple(persona){
    return{
        ...persona,
        edad: persona.edad+1
    }

}


