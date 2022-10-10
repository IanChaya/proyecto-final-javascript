// En este script se crea la pagina de Inicio y algunos funcionamientos generales

const mostrarMenu = async () => {
	try {
		items = await getStock();
	} catch (error) {
		console.log(error);
	}

	let comidas = items.filter((elemento) => elemento.categoria === "Comida");
	let bebidas = items.filter((elemento) => elemento.categoria === "Bebida");
	let postres = items.filter((elemento) => elemento.categoria === "Postre");

    const contenedorComidas = document.getElementById("comidas-contenedor");
	printArray(comidas, contenedorComidas);
	const contenedorBebidas = document.getElementById("bebidas-contenedor");
	printArray(bebidas, contenedorBebidas);
	const contenedorPostres = document.getElementById("postres-contenedor");
	printArray(postres, contenedorPostres);
	};

mostrarMenu(); 

