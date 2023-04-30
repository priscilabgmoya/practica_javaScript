// herencia 

class Persona {
    #nombre
    #edads 
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edads = edad; 
    }
    get getNombre(){
        return this.#nombre; 
    }
    get getEdad(){
        return this.#edads; 
    }
    set setNombre(nombre){
        this.#nombre = nombre; 
    }
    set setEdad(edad){
        this.#edads = edad; 
    }
    saludar(){
        console.log(`Hola! ${this.#nombre}`); 
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, comision){
        super(nombre, edad); 
        this.comision = comision; 
    }
}

let priscila = new Estudiante("priscila", 24, "48i"); 

priscila.saludar(); 
