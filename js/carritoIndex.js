// Este script maneja el carrito de pedidos

let precioTotal = 0;
let cantidadItems = 0;
let carritoDeCompras = [];

const carritoIndex = async (itemId) => {
	try {
		items = await getStock();
	} catch (error) {
		console.log(error);
	}
	let divi = document.getElementById("contenedor-frase");
	if (divi !== null) {
		while (divi.hasChildNodes()) {
			divi.removeChild(divi.lastChild);
		}
	}

	const contenedorCarrito = document.getElementById("carrito-contenedor");

	const renderProductosCarrito = () => {
		precioTotal = 0;
		let item = items.find((item) => item.id == itemId);
		carritoDeCompras.push(item);
		let cantidadTotal = carritoDeCompras.length;
		console.log("Cantidad",cantidadTotal)
		console.log(carritoDeCompras);
		let idItem = `${item.id}${cantidadTotal}`;
		console.log("ID Item:",idItem);
		item.cantidad = 1;

		let div = document.createElement("div");
		div.classList.add("productoEnCarrito");

		div.innerHTML = `<button id="eliminarItem${idItem}" class="boton-eliminar">
		<i class="fa-solid fa-trash-can"></i>
		</button> <span>${item.nombre}:  $${item.precio}</span><p></p>`;

		contenedorCarrito.appendChild(div);

		for (let i = 0; i < carritoDeCompras.length; i++) {
			precioTotal += carritoDeCompras[i].precio; // Optimizacion de codigo
		}

		cantidadItems = carritoDeCompras.length;

		const botonEliminar = document.getElementById(`eliminarItem${idItem}`);
		botonEliminar.addEventListener("click", () => {
			eliminarItem(item.id);
			Toast.fire({
				icon: "error",
				title: `Se eliminó el producto ${item.nombre}`,
			});
		});
	};

	renderProductosCarrito();
	actualizarPrecio(precioTotal);
	actualizarContadorCarrito(cantidadItems);
	localStorage.setItem("pedidoEnCurso", JSON.stringify(carritoDeCompras));
};

// Actualizacion carrito en Storage

let compraEnCurso = JSON.parse(localStorage.getItem("pedidoEnCurso")) || []; // Operador OR

if (compraEnCurso?.length > 0) {
	compraEnCurso.forEach((item) => {
		carritoIndex(item.id);
	});
} else {
	const contenedorFrase = document.getElementById("contenedor-frase");
	let div = document.createElement("div");
	div.innerHTML = "No hay productos";
	contenedorFrase.appendChild(div);
}
