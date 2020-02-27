
var vicky = {
    nombre:'Vicky',
    apellido:'Zapata',
    altura:1.56
}

var luis = {
    nombre:'Luis',
    apellido:'Camarena',
    altura:1.94
}

var carlos = {
    nombre:'Carlos',
    apellido:'Ortega',
    altura:1.79
}

const passarAlturaACms= persona => ({
    ...persona,
    altura:persona.altura * 100
})



var personas = [vicky,luis,carlos];

var personasCms=personas.map(passarAlturaACms)

console.log(personasCms)
