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
for(var i = 1; i<=  Dias_DEl_ANO; i++) {
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(christian)
    }else if (random < 0.5){
        adelgazar(christian)
    }
}
console.log(`al final del años ${christian.peso} pesa ${christian.peso.toFixed(2)}KG`)