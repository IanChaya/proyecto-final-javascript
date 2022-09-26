// En este script se crea la pagina de Inicio

const mostrarMenu = (comidas, bebidas, postres) => {
	const contenedorComidas = document.getElementById("comidas-contenedor");

	comidas.forEach((comida) => {
		const div = document.createElement("div");

		div.innerHTML += `<div class="row row-cols-1 d-flex g-3 p-3">
        					<div class="col">
            					<div class="card">
			    					<img src="${comida.img}" class="card-img-top" alt="...">
			    					<div class="card-body">
			    						<h5 class="card-title">${comida.nombre}</h5>
			    						<p class="card-text">Precio: $${comida.precio}</p>
			    						<button class="btn btn-dark" id=boton${comida.id}>Añadir</button>
			    					</div>               
            					</div>
        					</div>
						</div>`;

		contenedorComidas.appendChild(div);

		const boton = document.getElementById(`boton${comida.id}`);
		boton.addEventListener("click", () => {
			carritoIndex(comida.id);
			alert(`Se agrego el producto ${comida.nombre}`);
		});
	});

	const contenedorBebidas = document.getElementById("bebidas-contenedor");
	bebidas.forEach((bebida) => {
		const div = document.createElement("div");

		div.innerHTML += `<div class="row row-cols-1 d-flex g-3 p-3">
        					<div class="col">
            					<div class="card">
			    					<img src="${bebida.img}" class="card-img-top" alt="...">
			    					<div class="card-body">
			    						<h5 class="card-title">${bebida.nombre}</h5>
			    						<p class="card-text">Precio :$${bebida.precio}</p>
			    						<button class="btn btn-dark" id=boton${bebida.id}>Añadir</button>
			    					</div>               
            					</div>
        					</div>
						</div>`;

		contenedorBebidas.appendChild(div);

		const boton = document.getElementById(`boton${bebida.id}`);
		boton.addEventListener("click", () => {
			carritoIndex(bebida.id);
			alert(`Se agrego el producto ${bebida.nombre}`);
		});
	});

	const contenedorPostres = document.getElementById("postres-contenedor");

	postres.forEach((postre) => {
		const div = document.createElement("div");

		div.innerHTML += `<div class="row row-cols-1 d-flex g-3 p-3">
        					<div class="col">
            					<div class="card">
			    					<img src="${postre.img}" class="card-img-top" alt="...">
			    					<div class="card-body">
			    						<h5 class="card-title">${postre.nombre}</h5>
			    						<p class="card-text">Precio :$${postre.precio}</p>
			    						<button class="btn btn-dark" id=boton${postre.id}>Añadir</button>
			    					</div>               
            					</div>
        					</div>
						</div>`;

		contenedorPostres.appendChild(div);

		const boton = document.getElementById(`boton${postre.id}`);
		boton.addEventListener("click", () => {
			carritoIndex(postre.id);
			alert(`Se agrego el producto ${postre.nombre}`);
		});
	});
};

const productos = [comidas, bebidas, postres];

mostrarMenu(...productos); // Operador Spread

// Actualizacion carrito en Storage
// let compraEnCurso = [];
// let carritoStorage = localStorage.getItem("pedidoEnCurso");
// compraEnCurso = JSON.parse(carritoStorage);

let compraEnCurso = JSON.parse(localStorage.getItem("pedidoEnCurso")) || []; // Operador OR

if (compraEnCurso?.length > 0) { //Acceso condicional
	compraEnCurso.forEach((item) => {
		carritoIndex(item.id);
	});
} else {
	const contenedorFrase = document.getElementById("contenedor-frase");
	let div = document.createElement("div");
	div.innerHTML = "No hay productos";
	contenedorFrase.appendChild(div);
}

let vaciarCarrito = document.getElementById("vaciar-carrito");
vaciarCarrito.addEventListener("click", () => {
	let divi = document.getElementById("carrito-contenedor");
	if (divi !== null) {
		while (divi.hasChildNodes()) {
			divi.removeChild(divi.lastChild);
		}
	}
	divi = document.getElementById("contenedor-precio-total");
	if (divi !== null) {
		while (divi.hasChildNodes()) {
			divi.removeChild(divi.lastChild);
		}
	}

	divi = document.getElementById("contenedor-frase");
	if (divi !== null) {
		while (divi.hasChildNodes()) {
			divi.removeChild(divi.lastChild);
		}
	}
	precioTotal = 0;
	carritoDeCompras = [];
	actualizarContadorCarrito(0);
	localStorage.clear();
	const contenedorFrase = document.getElementById("contenedor-frase");
	let div = document.createElement("div");
	div.innerHTML = "No hay productos";
	contenedorFrase.appendChild(div);
});

///////////////////////////////////////////////////////////////////////////////////77
//Implementacion de una busqueda
let hacerBusqueda = document.getElementById("buscar");
hacerBusqueda.addEventListener("click", () => {
	palabra = document.getElementById("buscador");
	palabra.addEventListener("submit", (e) => {
		e.preventDefault();
		let inputs = e.target.children;
		itemBusqueda = inputs[0].value;
		itemBusqueda = itemBusqueda.toLowerCase();
		buscar(itemBusqueda);
	});
});
