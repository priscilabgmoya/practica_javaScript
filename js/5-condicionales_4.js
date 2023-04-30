/**
 * if(condicion){
 *    ......
 * }else{
 *  .......
 * }
 */
let numero =8; 
if( numero < 10){
    console.log('el numero es menor a 10');
}else if(numero > 10){
    console.log('el numero es mayor a 10');
}else{
    console.log('el numero es  igual  a 10');
}

/**
 * condicionales multiple 
 */

/**
 * Ejercicio descuento según marca y modelo del auto:
Le pedimos al usuario que ingrese marca y modelo del auto, en caso que el auto sea Ford fiesta el descuento que se aplica será del 5%,
 si es un Ford Focus el descuento será del 10%. Mostramos por consola el descuento que obtendrá.
 */

 let marca_modelo = prompt('Ingrese Marca y Modelo del Auto');

 const ford_fiesta = "ford fiesta";
 const ford_focus = "ford focus";

if(marca_modelo != null){
    let marca_modelo_auto = marca_modelo.toLocaleLowerCase(); 

    if(marca_modelo_auto == ford_fiesta){
       console.log('Tiene un 5% de descuento');
    }else if( marca_modelo_auto == ford_focus){
       console.log('Tiene un 10% de descuento');
    }else{
       console.log('No tiene ningun Descuento');
    }
}else{
    alert('Ingrese un Marca y Modelo del Auto correcto!'); 
}