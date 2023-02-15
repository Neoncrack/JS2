

class autos {
    constructor(modelo, año, precio){
        this.modelo= modelo;
        this.año= año;
        this.precio= precio;
    }

    
}

const corollaViejo= new autos("Corolla", 2020, 5000000);
const corollaNuevo= new autos("Corolla", 2023, 11000000);
const hiluxVieja= new autos("Hilux", 2016, 6000000);
const hiluxNueva= new autos("Hilux", 2023, 15000000);
const camryViejo= new autos("Camry", 2005, 36000000);
const camryNuevo= new autos("Camry", 2013, 7000000);
const etiosViejo= new autos("Etios", 2017, 2800000);
const etiosNuevo= new autos("Etios", 2023, 5500000);

let autoEscogido=prompt("Ingrese el modelo que le interesa: ");


if(autoEscogido="corolla"){
    let añoAuto= prompt("Ingrese el año del modelo que le interesa para continuar: ");
    if(añoAuto=2020){
        alert("El precio del TOYOTA COROLLA 2020 es de " + corollaViejo.precio)
    } else if(añoAuto=2023){
        alert("El precio del TOYOTA COROLLA es de " + corollaNuevo.precio)
    } else{
        alert("No tenemos el modelo de ese año, sepa disculpar atte: GhostCars")
    }

}

