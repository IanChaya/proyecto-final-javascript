function buscar(itemBusqueda) {
	console.log(itemBusqueda);

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
        const {id,nombre,precio,img}=itemEncontrado; // Desestructuracion
		div.innerHTML += `<div class="row row-cols-1 d-flex g-3 p-3 h-50 w-50 mx-auto">
        					<div class="col">
            					<div class="card">
			    					<img src="${img}" class="card-img-top" alt="...">
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
			alert(`Se agrego el producto ${nombre}`);
		});

		const botonReiniciar = document.getElementById(`reiniciarMenu`);
		botonReiniciar.addEventListener("click", () => {
			location.reload();
		});
	} else {
		alert(
			`No tenemos ${itemBusqueda} en nuestro menu :(. Lo tendremos en cuenta para la proxima!`
		);
	}
}
