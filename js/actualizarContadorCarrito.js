// Funcion para actualizar el contador en el carrito

const actualizarContadorCarrito = (cantidadItems) => {
	const contenedorContadorCarrito = document.getElementById("contador-carrito");
	contenedorContadorCarrito.innerHTML = `${cantidadItems}`;
}
