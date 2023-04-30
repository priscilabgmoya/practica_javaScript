/**
 * if ... else
 * if(condifcion === true){
 *
 * }else {
 * }
 */
puedeVotar();
// solicitar la edad del usuario e informacion si puede votar
// 68 en adelante, 16 a 17 es opcioncial
// 18 a 67 es obligatorio
function puedeVotar() {
  var ingresoEdad = prompt("Ingrese su edad");
  var edad = parseInt(ingresoEdad);
  // isNaN es una funcion para verifcar que si es NaN
  if (edad < 0 || isNaN(edad) || edad >110 ) {
    alert("edad no valida");
  } else if ((edad >= 16 && edad < 18) || (edad >= 68 && edad <= 110)) {
    alert(" es opcional votar");
  } else if (edad >= 18 && edad <= 67) {
    alert(" es obligatorio votar ");
  } else {
    alert("no esta habilitado para votar");
  }
}
