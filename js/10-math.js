// Objetos Math


let numero = 37.65; 
// redondea un numero
console.log(Math.round(numero));


// truncamiento--  saca los decimales 
console.log(Math.floor(numero));


//Encontrar Maximo  y Minimo
let maximo = Math.max(1,35,56,89,100); 
console.log(`el numero mayor es: ${maximo}`); 

let minimo = Math.min(15,24,6,34,1);
console.log(`el numero minimo es: ${minimo}`); 


// potencia 
console.log(Math.pow(3,2));
console.log(Math.pow(3,3));


// raiz 
console.log(Math.sqrt(100));
console.log(Math.cbrt(27));


// nros aleatorios 
let aleatorio = Math.random();
let aleatorio_2 = Math.round(aleatorio*10); 
console.log(aleatorio_2);


// parsear cadenas 
// forma 1
let numero_2 = "45.76";
console.log(parseInt(numero_2));
// forma 2 -- parsea cuando solo tiene numeros 
console.log(Number(numero_2));
//forma 3
console.log(parseFloat(numero_2));


// limitar la cantidad de caracteres
let aleatorio_3 = Math.random();
console.log(aleatorio_3.toFixed(5));