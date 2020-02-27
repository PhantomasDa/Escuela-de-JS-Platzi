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

var personas = [vicky,luis,carlos];

for(var i = 0; i < personas.length; i++)
{
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}`)
}