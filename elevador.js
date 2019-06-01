var Elevador = /** @class */ (function () {
    function Elevador(parametroPT) {
        this.pisosTotales = parametroPT;
        this.pisoActual = 1;
        this.estadoPuerta = 1;
    }
    Elevador.prototype.getPisosTotales = function () {
        return this.pisosTotales;
    };
    Elevador.prototype.getPisoActual = function () {
        return this.pisoActual;
    };
    Elevador.prototype.getEstadoPuerta = function () {
        return this.estadoPuerta;
    };
    //MÉTODOS
    Elevador.prototype.abrirPuerta = function () {
        if (this.estadoPuerta == 0) {
            console.log("La puerta se abre");
            return this.estadoPuerta = 1;
        }
        /*else{
            console.log("La puerta está abierta");
            return this.estadoPuerta;
        }*/
    };
    Elevador.prototype.cerrarPuerta = function () {
        if (this.estadoPuerta == 1) {
            console.log("La puerta se cierra");
            return this.estadoPuerta = 0;
        }
        /*else{
            console.log("La puerta está cerrada");
            return this.estadoPuerta;
        }*/
    };
    Elevador.prototype.subir = function () {
        return this.pisoActual++;
    };
    Elevador.prototype.bajar = function () {
        return this.pisoActual--;
    };
    Elevador.prototype.estadoPiso = function () {
        return this.estadoPiso;
    };
    Elevador.prototype.irAPiso = function (pisoDestino) {
        console.log('Estás en el piso ' + this.getPisoActual());
        if (this.pisoActual != pisoDestino) {
            this.cerrarPuerta();
            if (this.getPisoActual() > pisoDestino && pisoDestino <= this.getPisosTotales()) {
                while (pisoDestino !== this.getPisoActual()) {
                    this.bajar();
                    console.log('Bajando... estás en el piso ' + this.getPisoActual());
                }
                console.log('Llegaste a tu destino, piso: ' + this.getPisoActual());
                this.abrirPuerta();
            }
            else if (this.getPisoActual() < pisoDestino && pisoDestino <= this.getPisosTotales()) {
                while (pisoDestino !== this.getPisoActual()) {
                    this.subir();
                    console.log('Subiendo... estás en el piso ' + this.getPisoActual());
                }
                console.log('Llegaste a tu destino, piso: ' + this.getPisoActual());
                this.abrirPuerta();
            }
            else {
                console.log('El piso al que quieres ir no es válido');
            }
        }
        else {
            this.cerrarPuerta();
            console.log('Seleccionaste el mismo piso en el que estás');
            this.abrirPuerta();
        }
    };
    return Elevador;
}());
//PROBAR EL CÓDIGO
var elevador = new Elevador(10);
elevador.irAPiso(5);
