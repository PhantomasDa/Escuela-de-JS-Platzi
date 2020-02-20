//extrucutra de control 

var sacha = {
    nombre: 'Christian',
    apellido :  'Rios',
    edad: 28,
    ingenierio: false,
    cocinero: false,
    cantante:false,
    dj: false,
    guitarrista: false,
    gamer: true

}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingenierio){
        console.log(`Ingeniero`)
    }else{
        console.log('no es ingeniero')
    }
    if(persona.cocinero){
        console.log(`cocinero`)
    }

    if(persona.cantante){
        console.log(`cantante`)
    }
    if(persona.guitarrista){
        console.log(`guitarrista`)
    }
    
    if(persona.gamer){
        console.log(`gamer`)
    }
}

imprimirProfesiones(sacha)

function imprimirsiesMayorDeEdad(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.edad <= 17){
        console.log('menor de edad')
    }else{
        console.log('Es mayor de edad')
    }
}
imprimirsiesMayorDeEdad(sacha)