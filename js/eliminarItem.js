// En este Script se maneja la eliminacion de un item en particular en el Modal

const eliminarItem = async (itemId) => {
	try {
		items = await getStock();
	} catch (error) {
		console.log(error);
	}

	let item = items.find((item) => item.id == itemId);
	let indexItem = carritoDeCompras.findIndex((item) => item.id == itemId);
	carritoDeCompras.splice(indexItem, 1);

	console.log("Despues", carritoDeCompras);

	let divi = document.getElementById("carrito-contenedor");
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
	precioTotal = precioTotal - item.precio;
	actualizarPrecio(precioTotal);
	actualizarContadorCarrito(carritoDeCompras.length);
	localStorage.setItem("pedidoEnCurso", JSON.stringify(carritoDeCompras));

	const contenedorCarrito = document.getElementById("carrito-contenedor");

	if (carritoDeCompras?.length > 0) {
		let contador = 0;
		carritoDeCompras.forEach((item) => {
			contador = contador + 1;
			let idItem = `${item.id}${contador}`;

			let div = document.createElement("div");
			div.classList.add("productoEnCarrito");

			div.innerHTML = `<button id="eliminarItem${idItem}" class="boton-eliminar">
            <i class="fa-solid fa-trash-can"></i>
            </button> <span>${item.nombre}:  $${item.precio}</span><p></p>`;

			contenedorCarrito.appendChild(div);

			const botonEliminar = document.getElementById(`eliminarItem${idItem}`);
			botonEliminar.addEventListener("click", () => {
				eliminarItem(item.id);
				Toast.fire({
					icon: "error",
					title: `Se eliminó el producto ${item.nombre}`,
				});
			});
		});
	} else {
		const contenedorFrase = document.getElementById("contenedor-frase");
		let div = document.createElement("div");
		div.innerHTML = "No hay productos";
		contenedorFrase.appendChild(div);
	}
};
