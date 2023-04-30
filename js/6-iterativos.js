/**
 * Porque la luna es mayor que el sol
 */
/*
let resuesta = prompt("¿Porque la luna sale de noche?").toLocaleLowerCase(), contador =0;

while(resuesta !== "porque sale de noche"){
    respuesta = prompt("Casi... Segui Intentando...");
    if(contador === 3){
        alert('pista: Piensa en Batman..');
    }else if (contador === 5){
        alert('Aburrido!');
        resuesta = "porque sale de noche";
    }
    contador++;
}
*/

// ciclo for 
/**
 * pedir un numero al usuario y le devuelva la tabla de la misma
 */
let numeroUsurio = prompt("Ingrese un numero");

console.log(`La tabla del ${numeroUsurio}:`);

for (let index = 0; index <=10 ; index++) {
    console.log(`${index} X ${numeroUsurio} = ${index*numeroUsurio}`);
}
