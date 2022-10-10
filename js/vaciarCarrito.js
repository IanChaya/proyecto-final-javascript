// Este Script maneja como vaciar el carrito

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