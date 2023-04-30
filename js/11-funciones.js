//los callback son funciones que se pasan como argumento de otras funciones....
const hi = nombre => alert(`Hola ${nombre}`);
const bye = nombre => alert(`Chau! ${nombre}`); 
/*
function userRegister(funcion){
    const name = prompt('Ingrese su nombre..'); 
    funcion(name);
}
*/
userRegister(hi); 
userRegister(bye); 


// data base de edades de usuario
let ageDataBase =[23,50,45,97,18,32,18,25,26,28,30];


function mayoresDe25 (edad){
     if(edad >= 25){
        return edad; 
     }
}

let age25DataBase = ageDataBase.filter(edad => mayoresDe25(edad)); 

console.log(age25DataBase);
