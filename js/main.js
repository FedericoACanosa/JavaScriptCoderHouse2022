let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecPrecios = document.getElementById('selecPrecios')
const buscador = document.getElementById('search')

//Diccionario de el filtro

// const diccionarioDelFiltros = [
//     {min: 0, max: 900},
//     {min: 1000, max: 1500},
//     {min: 1600, max: 2000},
// ]

//hacemos el Filtro

    // selecPrecios.addEventListener('change',()=>{

    // let productosFiltrados;

    //     if (selecPrecios.value == 'all') productosFiltrados = stockProductos
    //     else if (selecPrecios.value == '3') productosFiltrados = stockProductos.filter(item => item.precio >= 2000)
    //     else productosFiltrados = stockProductos.filter(item => item.precio >= diccionarioDelFiltros[selecPrecios.value].min && item.precio <= diccionarioDelFiltros[selecPrecios.value].max )

    //     mostrarProductos (productosFiltrados)
    // })

    selecPrecios.addEventListener('change',()=>{

        console.log(selecPrecios.value)
        if(selecPrecios.value == 'all'){
            mostrarProductos(stockProductos)
        }else{
            let arrayNuevo = stockProductos.filter(item => item.tipo == selecPrecios.value)
            
            //array nuevo
    
            mostrarProductos(arrayNuevo)
        }
    })


//EL STOCK
let stockProductos = [
	{id:1, nombre: "Body tigre", precio: 900, tipo: 1, desc: "Body de frizza estampado para bebé",  demora: "40min", img: './img/prod1.png'},
	{id:2, nombre: "Jean wide leg", precio: 2300, tipo: 4, desc: "Jean elastizado con roturas y corte Oxford", demora: "3hs", img:'./img/prod2.png'},
	{id:3, nombre: "Jean roturas", precio: 1700, tipo: 3, desc: "Jean elastizado con roturas, estampado y corte Oxford", demora: "4hs", img:'./img/prod3.png'},
	{id:4, nombre: "Jean roturas/razgados", precio: 4200, tipo: 4, desc: "Jeans elastizados con rotaras y/o razgados", demora: "60min", img:'./img/prod4.png'},
	{id:5, nombre: "Buzo anime", precio: 1200, tipo: 2, desc: "Buzo de algodón estampado.", demora: "45min", img:'./img/prod5.png'},
	{id:6, nombre: "Buzo Smile", precio: 2100, tipo: 4, desc: "Buzo de frizza con estampado. ", demora: "3hs", img:'./img/prod6.png'},
] 

//Buscador o search

mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){

    contenedorProductos.innerHTML = ""

    for(const el of array) {

        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                                <div class="card-image">
                                    <img src="${el.img}">
                                    <span id="nombre" class="card-titlesobre2">${el.nombre}</span>
                                    <br></br>
									<a id="boton${el.id}" href="#" class="btn btn-primary">Agregar<i class="bi bi-bag-heart"></i></a>
                                    <br></br>
                                </div>
                                <div class="card-content">
                                    <p id="desc">${el.desc}</p>
                                    <p id="precio""> $ ${el.precio}</p>
                                </div>
                            </div>`

        contenedorProductos.appendChild(div)
        
        let btnAgregar = document.getElementById(`boton${el.id}`)
        
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito(el.id);
        })

    }
    

}



function agregarAlCarrito(id) {
    let yaExiste = carritoDeCompras.find(elemento => elemento.id == id)

    if(yaExiste){
        yaExiste.cantidad = yaExiste.cantidad + 1
        document.getElementById(`cantidad${yaExiste.id}`).innerHTML = `<p id="cantidad${yaExiste.id}">cantidad: ${yaExiste.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoAgregar = stockProductos.find(ele => ele.id === id)
        productoAgregar.cantidad = 1 
carritoDeCompras.push(productoAgregar)
actualizarCarrito()
mostrarCarrito(productoAgregar) 
    }
}



function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML =`<p>${productoAgregar.nombre}</p>
                <p>Precio: $${productoAgregar.precio}</p>
                <p id="cantidad${productoAgregar.id}">cantidad: ${productoAgregar.cantidad}</p>
                <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="bi bi-trash"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar= document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.id !== productoAgregar.id)
            actualizarCarrito()
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
        document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">cantidad: ${productoAgregar.cantidad}</p>`
        actualizarCarrito()
        }
    

    })
}


function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
   precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad) , 0)                                                            
}

// Comenzamos LocalStorage

const nombre = document.getElementById("nombre")
const tipo = document.getElementById("tipo")
const desc = document.getElementById("desc")
const datos ={nombre:nombre.value, tipo:mostrarProductos, desc:desc.value}
console.log(datos);
localStorage.setItem("datos", JSON.stringify(datos))

function obtenerDatos() {

    let storage1 = JSON.parse(localStorage.getItem("datos"))
    console.log(storage1);

}

obtenerDatos()