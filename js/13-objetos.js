let persona = {
    nombre: 'priscila',
    edad: 24, 
    dni: 41182280,
    domicilio: 'pje hipolito buchardo 2015',
    hijos: 0, 
    profesion: 'estudiante', 
    saludar: function(){
        console.log(`Hola! soy ${this.nombre}`);
    }, 
    listar: function (){
        for (const key in this) {
            alert(`${key}: ${this[key]}`);
        }
    }
}

function Teams (nombre, cantidad, lider){
    this.nombre = nombre;
    this.cantidad = cantidad; 
    this.lider = lider; 
}

class Paises {
    constructor(nombre, habitantes){
        this.nombre = nombre; 
        this.habitantes = habitantes; 
    }
}


let listaPeliculas= [];

class Pelicula {
    constructor(titulo = "titulo por defecto", genero, año, sipnosis){
        this.titulo = titulo; 
        this.genero = genero; 
        this.año = año;
        this.sipnosis = sipnosis; 
    }
    
    listar(){
        for (const key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

let peliculaDeTerror = new Pelicula("el exorsista","terror", 2011,"doloremque doloribus corrupti, reprehenderit magni perferendis repellendus consectetur ut vel quaerat. Quod, nesciunt neque");
listaPeliculas.push(peliculaDeTerror);