// Toda variable que no este definida dentro de una funcion quiere decir que esta en el alcance global 
// podremos acceder a ella desde el objeto global.

var nombre = 'christian'

function impimirNombreEnMayuscula(n){
    n = n.toUpperCase()
    console.log(n)
}


impimirNombreEnMayuscula(nombre)

