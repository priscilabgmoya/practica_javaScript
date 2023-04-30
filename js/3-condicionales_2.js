/**
 * una persona esta por comprar un inmueble , si llevo anteojos podra leer que en la letra pequeña se avisa 
 * que en el inmueble esta construido sobre un cementerio indio embrujado 
*/

let respuesta =  confirm("¿Trae Anteojos?  \n SI -> confirm  \n NO -> cancel");


if(respuesta === true){
    alert('El inmueble esta construido sobre un cementerio indio embrujado');
}else{
    alert('Compra Tranquilo');
}

/**Esta bien hacerlo con comfirm ? */
//Solucicion de la profe en clase

/**
 * let pregunta = propmt('¿Trae Anteojos?').toLocaleLowerCase();
 *      if(pregunta.indexOf('si') != -1){
 *         alert('El inmueble esta construido sobre un cementerio indio embrujado');
 *      }else if(pregunta.indexOf('no') != -1){
 *          alert('Compra Tranquilo');
 *       }else{
 *          alert('Solo se admite respuestas entre SI y NO');
 *       }
 */