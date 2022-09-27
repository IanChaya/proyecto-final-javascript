// Este script maneja el carrito de pedidos

let precioTotal = 0;
let cantidadItems = 0;
let carritoDeCompras = [];

const carritoIndex = (itemId) => {
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
		console.log(carritoDeCompras);

		item.cantidad = 1;

		let div = document.createElement("div");
		div.classList.add("productoEnCarrito");

		div.innerHTML = `<p>${item.nombre}:  $${item.precio}</p>`;
		// <p id="cantidad${item.id}">Cantidad: ${item.cantidad}</p>
		// <button id="eliminar${item.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
		contenedorCarrito.appendChild(div);

		for (let i = 0; i < carritoDeCompras.length; i++) {
			precioTotal += carritoDeCompras[i].precio; // Optimizacion de codigo
		}

		cantidadItems = carritoDeCompras.length;
	};

	renderProductosCarrito();
	actualizarPrecio(precioTotal);
	actualizarContadorCarrito(cantidadItems);
	localStorage.setItem("pedidoEnCurso", JSON.stringify(carritoDeCompras));
};
