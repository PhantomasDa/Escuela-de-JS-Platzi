function Persona (nombre , apellido ,altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  
  Persona.prototype.saludar =() => {
    console.log(`Hola me llamo ${this.nombre}${this.apellido}`);
  }
  
  Persona.prototype.soyAlto = function() {
     return this.altura >1.75;
  }
  
  
  var Robert = new Persona('Robert','Hurtado', 1.50);
  var Elza = new Persona('Elza','Rozo', 1.60);
  var Marcelo = new Persona('Marcelo','King',1.70);