var sacha = {
    nombre: 'christian',
    Apellido : 'Mock',
    edad: 28
}

var arturo = {
    nombre: 'arturo',
    Apellido : 'rios',
    edad: 28
}

function impimirNombreEnMayuscula({ nombre }){
    console.log(nombre.toUpperCase())
}


impimirNombreEnMayuscula(sacha)
impimirNombreEnMayuscula(arturo)
impimirNombreEnMayuscula({nombre: 'pepito'})



