// Pedir al usurio su nombre y decirle cual es su último letra

var nombre;
const c = console.log

nombre=prompt('ingresa tu nombre')

c(`su nombre es ${nombre}`)
c(`la última letra de su nombre es ${nombre.charAt(nombre.length-1)}`)