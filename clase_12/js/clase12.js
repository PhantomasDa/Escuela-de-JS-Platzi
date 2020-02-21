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

var juan = {
    nombre: 'juan',
    apellido : 'perez',
edad: 13
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

const MAYORIA_DE_EDAD = 18

function esmayordeedad(persona){
   return persona.edad >= MAYORIA_DE_EDAD 
}
function  imprimirsiesMayorDeEdad(persona){
    if(esmayordeedad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}


