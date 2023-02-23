
const autosDisponibles = [
    {modelo: "Volkswagen Vento", precio: 16000, año:2023, stock: 4},
    {modelo: "Audi A4", precio: 23000, año:2022, stock: 2},
    {modelo: "Ford Mustang", precio: 29000, año:2023, stock: 5},
    {modelo: "Chevrolet Cruze Ltz", precio: 14000, año:2022, stock: 9},
    {modelo: "Fiat Cronos", precio: 10000, año:2023, stock: 13},
]

autosDisponibles.forEach((auto) => {
    console.log(auto.modelo)
})

let autoElegido = (prompt("Que auto, de la lista, le interesa?"));

console.log(autosDisponibles.find((auto) => auto.modelo == autoElegido));

const nuevosPrecios = autosDisponibles.map((auto) =>{
    return{
        modelo:auto.modelo,
        precio:auto.precio * 1.7
    }
})

console.log(nuevosPrecios);