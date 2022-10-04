// Con esta funcion se logra mostrar por pantalla un arreglo en un determinado contenedor
const printArray = (prods, contenedor) => {
	prods.forEach((prod) => {
		const div = document.createElement("div");

		div.innerHTML += `<div class="row row-cols-1 d-flex g-3 p-3">
                            <div class="col">
                                <div class="card">
                                    <img src="${prod.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${prod.nombre}</h5>
                                        <p class="card-text">Precio: $${prod.precio}</p>
                                        <button class="btn btn-dark" id=boton${prod.id}>Añadir</button>
                                    </div>               
                                </div>
                            </div>
                        </div>`;

		contenedor.appendChild(div);

		const boton = document.getElementById(`boton${prod.id}`);
		boton.addEventListener("click", () => {
			carritoIndex(prod.id);
			Toast.fire({
				icon: "success",
				title: `Se agrego el producto ${prod.nombre}`,
			});
		});
	});
};
