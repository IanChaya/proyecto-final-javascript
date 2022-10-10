//	Esta funcion renderiza los productos en el carrito

const renderProductosCarrito = (items, itemId) => {
	precioTotal = 0;
	let item = items.find((item) => item.id == itemId);
	carritoDeCompras.push(item);
	let cantidadTotal = carritoDeCompras.length;
	let idItem = `${item.id}${cantidadTotal}`;
	console.log("ID Item:", idItem);
	item.cantidad = 1;

	let div = document.createElement("div");
	div.classList.add("productoEnCarrito");

	div.innerHTML = `<button id="eliminarItem${idItem}" class="boton-eliminar">
		<i class="fa-solid fa-trash-can"></i>
		</button> <span>${item.nombre}:  $${item.precio}</span><p></p>`;

	contenedorCarrito.appendChild(div);

	for (let i = 0; i < carritoDeCompras.length; i++) {
		precioTotal += carritoDeCompras[i].precio;
	}

	cantidadItems = carritoDeCompras.length;

	const botonEliminar = document.getElementById(`eliminarItem${idItem}`);
	botonEliminar.addEventListener("click", () => {
		eliminarItem(item.id);
		Toast.fire({
			icon: "success",
			title: `Se elimino el producto ${item.nombre}`,
		});
	});
};
