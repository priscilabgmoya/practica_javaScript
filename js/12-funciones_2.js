/**
 *  funciones con Array
 */
const listaDeProductos = ['GASEOSA','AGUA','CERVEZA','FERNET','GIN','VODKA','VINO'];
let carritoCompras = []; 

function agregarProducto(){
    let producto = prompt(`Que producto desea agregar?`).toUpperCase(); 
    if(listaDeProductos.includes(producto)){
        carritoCompras.push(producto);
        alert('se agrego el producto...');
    }else{
        alert('no se encontro el producto...');
    }
}

const getCarritosCompras=()=>{
    alert(`Listado de Compras: \n ${carritoCompras.join('\n')}`)
}

const buscarProducto =()=>{
    let producto = prompt(`Que producto desea buscar?`).toUpperCase(); 
    if( producto !== null){
        carritoCompras.find(element => element == producto); 
    }
}
