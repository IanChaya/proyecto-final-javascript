// En este script se crea la pagina de Inicio
//let items= [];

const mostrarMenu = async () => {
	try {
		items = await getStock();
	} catch (error) {
		console.log(error);
	}

	let comidas = items.filter((elemento) => elemento.categoria === "Comida");
	let bebidas = items.filter((elemento) => elemento.categoria === "Bebida");
	let postres = items.filter((elemento) => elemento.categoria === "Postre");

    const contenedorComidas = document.getElementById("comidas-contenedor");
	printArray(comidas, contenedorComidas);
	const contenedorBebidas = document.getElementById("bebidas-contenedor");
	printArray(bebidas, contenedorBebidas);
	const contenedorPostres = document.getElementById("postres-contenedor");
	printArray(postres, contenedorPostres);
	};

//const productos = [comidas, bebidas, postres];

mostrarMenu(); // Operador Spread

// Actualizacion carrito en Storage
// let compraEnCurso = [];
// let carritoStorage = localStorage.getItem("pedidoEnCurso");
// compraEnCurso = JSON.parse(carritoStorage);

let compraEnCurso = JSON.parse(localStorage.getItem("pedidoEnCurso")) || []; // Operador OR

if (compraEnCurso?.length > 0) {
	//Acceso condicional
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
	Swal.fire({
		title: "Está seguro que desea eliminar su pedido?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Sí, Eliminar",
		cancelButtonText: "Cancelar",
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire("", "Su pedido ha sido eliminado", "success");
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
		}
	});
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

const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});
