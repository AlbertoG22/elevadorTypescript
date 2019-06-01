class Elevador{
    private pisosTotales: number;
    private pisoActual: number;
    private estadoPuerta: number;

    constructor(parametroPT: number){
        this.pisosTotales = parametroPT;
        this.pisoActual = 1;
        this.estadoPuerta = 1;
    }

    public getPisosTotales() : number {
        return this.pisosTotales;
    }
    public getPisoActual() : number {
        return this.pisoActual;
    }
    public getEstadoPuerta() : number {
        return this.estadoPuerta;
    }

    //MÉTODOS
    public abrirPuerta(){
        if(this.estadoPuerta==0){
            console.log("La puerta se abre");
            return this.estadoPuerta=1;
        }
        /*else{
            console.log("La puerta está abierta");
            return this.estadoPuerta;
        }*/
    }
    public cerrarPuerta(){
        if(this.estadoPuerta==1){
            console.log("La puerta se cierra");
            return this.estadoPuerta=0;
        }
        /*else{
            console.log("La puerta está cerrada");
            return this.estadoPuerta;
        }*/
    }
    private subir(){
        return this.pisoActual++;
    }
    private bajar(){
        return this.pisoActual--;
    }

    public estadoPiso(){
        return this.estadoPiso;
    }
    public irAPiso(pisoDestino: number){
        console.log('Estás en el piso ' + this.getPisoActual())
        if(this.pisoActual != pisoDestino){
            this.cerrarPuerta();
            if (this.getPisoActual() > pisoDestino && pisoDestino <= this.getPisosTotales()) {
                while (pisoDestino !== this.getPisoActual()) {
                    this.bajar();
                    console.log('Bajando... estás en el piso ' + this.getPisoActual());
                }
                console.log('Llegaste a tu destino, piso: ' + this.getPisoActual());
                this.abrirPuerta();
            }
            else if(this.getPisoActual() < pisoDestino && pisoDestino <= this.getPisosTotales()){
                while (pisoDestino !== this.getPisoActual()) {
                    this.subir();
                    console.log('Subiendo... estás en el piso ' + this.getPisoActual());
                }
                console.log('Llegaste a tu destino, piso: ' + this.getPisoActual());
                this.abrirPuerta();
            }
            else{
                console.log('El piso al que quieres ir no es válido')
            }
        }
        else{
            this.cerrarPuerta();
            console.log('Seleccionaste el mismo piso en el que estás');
            this.abrirPuerta();
        }
    }
}

//PROBAR EL CÓDIGO
var elevador = new Elevador(10);
elevador.irAPiso(5)
