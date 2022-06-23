//Entrega Final I


let catalogo = prompt(
    '¡Elegí tu producto! \n-Elegi opciones \n- Trown Inc \n- Pine Tree \n- Ice \n- salir / siguiente opcion'
);

// Inician Arrays para pushear

let carrito = [];
let precioenvio =[]

//Terminan Arrays para pushear

//Inicia Array de objetos

const mercaderia = [
    {
    id: 1,
    categoria: 'Gorras',
    nombre: 'Trown Inc',
    color: ['rojo', 'azul', 'verde'],
    talle: 'u',
    price: 2000 ,
    },
    {
    id: 2,
    categoria: 'Gorras',
    nombre: 'Pine Tree',
    color: ['rojo', 'azul', 'verde'],
    talle: 'u',
    price: 1555 ,
    },

    {
    id: 3,
    categoria: 'Gorras',
    nombre: 'Ice',
    stock: 1,
    color: ['rojo', 'azul', 'verde'],
    talle: 'u',
    price: 1665 ,
    },
];

// Termina Array de objetos

// Inicia opciones de catalogo

while (catalogo != 'salir') {
    switch (catalogo) {
    case 'Trown Inc':
        let trowninc = prompt(
            `El precio de  ${mercaderia[0].nombre} es de  ${mercaderia[0].price} ¿Quieres añadirlo al carrito? \n- Si \n- No`
            );
        if(trowninc=="si"){
            carrito.push(mercaderia[0].price).parseFloat;
            console.log(carrito); }
        break;
    case 'Pine Tree':
        let pinetree = prompt(
        `El precio de  ${mercaderia[1].nombre} es de  ${mercaderia[1].price} ¿Quieres añadirlo al carrito? \n- Si \n- No`
        );
        if(pinetree=="si"){
            carrito.push(mercaderia[1].price).parseFloat;
            console.log(carrito); }
        break;
    case 'Ice':
        let ice= prompt(
        `El precio de  ${mercaderia[2].nombre} es de  ${mercaderia[2].price} ¿Quieres añadirlo al carrito? \n- si \n- No`);
        if(ice=="si"){
        carrito.push(mercaderia[2].price).parseFloat;
        console.log(carrito);
    }
        break;
    default:
        alert('La opcion no es valida, vuelva a ingresar');
        break;
    }
    catalogo = prompt(
    '¡Elegí tu producto! \n-Elegi opciones \n- Trown Inc \n- Pine Tree \n- Ice \n- salir / siguiente opcion'
    );
}

// Termina opciones de catalogo

// Array para envío

const mediosDeEnvio = [
    {
    id: 1,
    nombre: 'Correo Argentino',
    price: 1000 ,
    },

    {
    id: 2,
    nombre: 'Andreani',
    price: 500 ,
    },

    {
        id: 3,
        nombre: 'Retiro por local',
        price: 0 ,
    },
];

// Finaliza Array para envío

//Inicia menú para costo de envío

let costoEnvio = prompt(
    '¡Calcula tu envío! \n-Elegi alguna de las siguientes opciones \n- Correo Argentino \n- Andreani \n- Retiro por local \n- salir / siguiente opcion'
);

while (costoEnvio != 'salir') {
    switch (costoEnvio) {
    case 'Correo Argentino':
        let CorreoArgentino= prompt(
            `El precio de  ${mediosDeEnvio[0].nombre} es de  ${mediosDeEnvio[0].price} ¿Quieres añadirlo al carrito? \n- si \n- No`);
            if(CorreoArgentino=="si"){
            precioenvio.push(mediosDeEnvio[0].price).parseFloat;
            console.log(precioenvio); }
        break;
    case 'Andreani':
        let Andreani= prompt(
            `El precio de  ${mediosDeEnvio[1].nombre} es de  ${mediosDeEnvio[1].price} ¿Quieres añadirlo al carrito? \n- si \n- No`);
            if(Andreani=="si"){
            precioenvio.push(mediosDeEnvio[1].price).parseFloat;
            console.log(precioenvio); }
        break;
    case 'Retiro por local':
        let retiroPorLocal= prompt(
            `El precio de  ${mediosDeEnvio[2].nombre} es de  ${mediosDeEnvio[2].price} ¿Quieres añadirlo al carrito? \n- si \n- No`);
            if(retiroPorLocal=="si"){
            precioenvio.push(mediosDeEnvio[2].price).parseFloat;
            console.log(precioenvio); }
        break;
    default:
        alert('La opcion no es valida, vuelva a ingresar');
        break;
    }
    costoEnvio = prompt(
    'Elegi alguna de las siguientes opciones \n- Correo Argentino \n- Andreani \n- Retiro por local \n- salir / siguiente opcion'
    );
}

// Termina menú para costo de envío

// Inicia bloque de determinación de resultados.
let resultado = parseFloat(carrito) + parseFloat(precioenvio) 

let impresion= document.getElementById('Container-principal')

function mostrar(mensaje) {

    const unaCuota= document.createElement('button'); 
    unaCuota.type = 'button'; 
    unaCuota.innerText = 'Pagar en una cuota'; 
    document.body.appendChild(unaCuota);
    unaCuota.addEventListener("click", function(){ console.log(`pago final de  ${parseFloat(resultado).toFixed(2)}`) });

    const tresCuotas= document.createElement('button'); 
    tresCuotas.type = 'button'; 
    tresCuotas.innerText = 'Pagar en 3 cuotas'; 
    document.body.appendChild(tresCuotas);
    tresCuotas.addEventListener("click", function(){ console.log(`pago final de  ${parseFloat(resultado/3).toFixed(2)}`) });

    const seisCuotas= document.createElement('button'); 
    seisCuotas.type = 'button'; 
    seisCuotas.innerText = 'Pagar en 6 cuotas'; 
    document.body.appendChild(seisCuotas);
    seisCuotas.addEventListener("click", function(){ console.log(`pago final de  ${parseFloat(resultado/6).toFixed(2)}`) });

    impresion.innerHTML=`El precio total a pagar es de ${mensaje }`;

}


mostrar(resultado);

// Termina bloque de determinación de resultados.

// DOM, procedo a capturar mediante un prompt una salida al html


