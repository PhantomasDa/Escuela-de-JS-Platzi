//extrucutra de control 

var christian = {
    nombre: 'Christian',
    apellido :  'Rios',
    edad: 28,
    peso : 81
}

console.log(`Al inicio del año ${christian.nombre} pesa ${christian.peso}KG`)
const INCREMENTO_PESO = 02
const Dias_DEl_ANO= 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona =>persona.peso -= INCREMENTO_PESO
const META = christian.peso -3
const comeMucho = ( ) => Math.random() <0.3
const deporte = ( ) => Math.random() < 0.4
var dias=0
while (christian.peso > META){

    if(comeMucho()){
        aumentarDePeso(christian)
    }
    if(deporte()){
        adelgazar(christian)
    }
dias +=1
}
console.log(`pasaron  ${dias} hasta que  ${christian.nombre} adelgazo 3kg`)