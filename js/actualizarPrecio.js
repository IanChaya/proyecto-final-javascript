// Funcion para actualizar el precio Total de la cuenta en el Modal

const actualizarPrecio = (precioTotal) => {
	const contenedorPrecioTotal = document.getElementById(
		"contenedor-precio-total"
	);
	contenedorPrecioTotal.innerHTML = `Precio Total: $${precioTotal}`;
}
