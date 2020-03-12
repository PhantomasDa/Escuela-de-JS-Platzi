function persona(name,lastname,told) {
this.name = name
this.lastname = lastname
this.told = told
}

persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.name} ${this.lastname}`)
}

persona.prototype.alto = function() {
   if(this.told>=1.8){
       console.log('soy alto')
   }else{
       console.log('soy bajo')
   }
}
var christian = new persona('christian', 'Mock','1.7')
var erika = new persona( 'erika', 'martinez','1.8')
var arturo  = new persona('arturo', 'ponce','1.9')

