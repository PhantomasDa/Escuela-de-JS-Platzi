function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona (nombre , apellido ,altura){
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar =() => {
  console.log(`hola me llamo ${this.nombre} ${this.apellido} `);
}

Persona.prototype.soyAlto = function() {
   return this.altura >1.75;
}

function desarrollador(nombre, apellido) {
  this.nombre=nombre
  this.apellido = apellido
}
heredaDe(desarrollador, Persona)
desarrollador.prototype.saludar = function () {
  console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var Robert = new Persona('Robert','Hurtado', 1.50);
var Robert0 = new desarrollador('Roberts','Hurtado', 1.50);
