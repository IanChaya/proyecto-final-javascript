//En este Script se maneja la Implementacion de una busqueda

const buscar = (itemBusqueda) => {
    
	let divi = document.getElementById("main");
	if (divi !== null) {
		while (divi.hasChildNodes()) {
			divi.removeChild(divi.lastChild);
		}
	}

	divi = document.getElementById("contenedor-busqueda");
	if (divi !== null) {
		while (divi.hasChildNodes()) {
			divi.removeChild(divi.lastChild);
		}
	}

	let resultadoBusqueda = items.some(
		(items) => items.nombre.toLowerCase() === itemBusqueda.toLowerCase()
	);
	if (resultadoBusqueda == true) {
		let itemEncontrado = items.find(
			(items) => items.nombre.toLowerCase() === itemBusqueda.toLowerCase()
		);
		console.log(itemEncontrado);
		const contenedorBusqueda = document.getElementById("contenedor-busqueda");
		const div = document.createElement("div");
		const { id, nombre, precio, img } = itemEncontrado; // Desestructuracion
		div.innerHTML += `<div class="row row-cols-1 d-flex g-3 p-3 h-50 w-50 mx-auto">
        					<div class="col">
            					<div class="card">
			    					<img src="${img}" class="card-img-top precarga" alt="...">
			    					<div class="card-body">
			    						<h5 class="card-title">${nombre}</h5>
			    						<p class="card-text">Precio :$${precio}</p>
			    						<button class="btn btn-dark mx-auto" id=boton${id}>Añadir</button>
                                        <button class="btn btn-dark mx-auto" id=reiniciarMenu>Menu Completo</button>
			    					</div>               
            					</div>
        					</div>
						</div>`;

		contenedorBusqueda.appendChild(div);

		const botonAñadir = document.getElementById(`boton${id}`);
		botonAñadir.addEventListener("click", () => {
			carritoIndex(id);
            Toast.fire({
				icon: "success",
				title: `Se agrego el producto ${nombre}`,
			});
			//alert(`Se agrego el producto ${nombre}`);
		});

		const botonReiniciar = document.getElementById(`reiniciarMenu`);
		botonReiniciar.addEventListener("click", () => {
			location.reload();
		});
	} else {
		Swal.fire({
			title: `No tenemos ${itemBusqueda} en nuestro menu :(`,
			text: "Lo tendremos en cuenta para la proxima!",
			icon: "error",
			confirmButtonColor: "#3085d6",
			confirmButtonText: "Okey",
		}).then((result) => {
			if (result.isConfirmed) {
				location.reload();
			}
		});
	}
}


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

