class Cuenta{
    #id
    #nombre
    #saldo
    #movimientos=[]; 
    constructor(nombre){
        this.#id = Math.round(Math.random()*1000);
        this.#nombre= nombre;
        this.#saldo = 0;
    }
    set ingresar(monto){
        if(monto > 0 && ! isNaN(monto)){
            this.#agregarMovimiento(monto,"ingreso"); 
            this.#saldo = this.#saldo + monto; 
            console.log(`Su saldo actual es: ${this.#saldo}`);
        }else{
            console.log('ingrese un monto valido... ');
        }
    }
    set extraer(monto){
        if(this.#saldo !== 0 && monto <= this.#saldo && monto > 0){
            this.#agregarMovimiento(monto,"extraccion"); 
            this.#saldo = this.#saldo - monto; 
            console.log(`Su saldo actual es: ${this.#saldo}`);
        }else{
            console.log('Saldo Insuficiente');
        }
    }
    get informar(){
        return `La cuenta ${this.#id} al nombre de ${this.#nombre} tiene un saldo de :$ ${this.#saldo}`;
    }

    #agregarMovimiento(monto,movimientoCliente){
        let movimiento ={},  fechaHora = new Date(); 
        movimiento.tipo = movimientoCliente;
        movimiento.fecha = fechaHora.toLocaleDateString();
        movimiento.hora = fechaHora.toLocaleTimeString();
        switch (movimientoCliente) {
            case "ingreso":
                movimiento.monto = "+"+monto;
            break;
            default:
                movimiento.monto = "-"+monto;
            break;
        }
        this.#movimientos.push(movimiento); 
    }
    verMovimientos(){
        this.#movimientos.forEach(movimiento => {
            console.log(`Tipo Movimiento: ${movimiento.tipo} - Fecha: ${movimiento.fecha} - Hora: ${movimiento.hora} - Monto: ${movimiento.monto}`); 
        }); 
    }
}

const cuentaAhorroPriscila = new Cuenta('Priscila'); 