const series = [
    {
        nombre: 'Friends', 
        temporadas: 10,
        fechaCreacion: 10/08/1999,
        descripcion: 'grupos de amigos que la pasan bien',
        mostrarDescripcion: function (){
            console.log(`La serie se llama ${this.nombre}, un resumen breve es: ${this.descripcion}`);
        }
    },
    {
        nombre: 'The Crown',
        temporadas: 5,
        fechaCreacion: 10/08/1999, 
        descripcion: 'la vida de la reina isabel',
        mostrarDescripcion: function (){
            console.log(`La serie se llama ${this.nombre}, un resumen breve es: ${this.descripcion}`);
        }
    }
]; 

//series.forEach(serie => serie.mostrarDescripcion()); 

class Cancion{
    constructor(autor,nombreCancion, duracion){
        this.autor = autor;
        this.nombreCancion = nombreCancion;
        this.duracion = duracion; 
    }
    mostrarCancion(){
        console.log(`La cancion se llama ${this.nombreCancion}`);
    }
}
 
let cancionesPop = new Cancion("Harry Styles", "Matilda", "3:46"); 

cancionesPop.mostrarCancion(); 