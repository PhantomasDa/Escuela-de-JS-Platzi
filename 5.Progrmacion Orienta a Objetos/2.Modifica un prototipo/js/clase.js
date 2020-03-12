
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
const esAlta= ({altura}) => altura > 1.8
const esBajo= ({altura}) => altura < 1.8

var personas = [vicky,luis,carlos];
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBajo)

console.log(personasAltas)
console.log(personasBajas)