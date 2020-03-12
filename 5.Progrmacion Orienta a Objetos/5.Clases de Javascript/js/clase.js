var flavio = {
    nombre:'flavio',
    altura:1.70,
    dinero: 100
  }
  
  var yaki = {
    nombre:'yaki',
    altura:1.60,
    dinero: 350
  }
  
  var cesar = {
    nombre:'cesar',
    altura:1.75,
    dinero:120
  }
  
  var ana = {
    nombre:'ana',
    altura:1.50,
    dinero:350
  }
  var personas = [yaki,flavio,cesar,ana]
  
  /* var acum = 0
  
  for (var i = 0; i < personas.length; i++) {
    acum += personas[i].dinero
  }
  
  console.log('en total hay ' + acum + ' soles');
   forma mas comun */
  
  const reducir = (acum, {dinero}) => acum + dinero
  
  var totalDeDinero = personas.reduce(reducir, 0)
  
  console.log('en total hay ' + totalDeDinero + ' soles');