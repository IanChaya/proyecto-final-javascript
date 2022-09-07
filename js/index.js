// Declaro las clases a utilizar
class item {
	constructor(categoria, nombre, precio) {
		this.categoria = categoria;
		this.nombre = nombre;
		this.precio = precio;
	}
}

class pedido {
	constructor(articulo, precio) {
		this.articulo = articulo;
		this.precio = precio;
	}
}

// Declaro los objetos a utlizar

const item1 = new item("Comida", "Hamburguesa con Papas Fritas", 1500);
const item2 = new item("Comida", "Pizza Napolitana", 1850);
const item3 = new item("Comida", "Lasagna", 1250);

const item4 = new item("Bebida", "Agua", 250);
const item5 = new item("Bebida", "Coca Cola", 350);
const item6 = new item("Bebida", "Cerveza Artesanal", 500);

const item7 = new item("Postre", "Brownie", 650);
const item8 = new item("Postre", "Cheesecake", 750);
const item9 = new item("Postre", "Tiramisu", 700);

// Declaro arreglos
let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];

let comidas = items.filter((elemento) => elemento.categoria === "Comida");
let bebidas = items.filter((elemento) => elemento.categoria === "Bebida");
let postres = items.filter((elemento) => elemento.categoria === "Postre");

//Declaro variables
let precioArticulo = 0;
let precioTotal = 0;
let decision = 0;
let eleccion = 0;
let busqueda;
comidaString = [];
bebidaString = [];
postreString = [];
laCuenta = [];
laCuentaString = [];

// Declaro las funciones a utilizar

const mostrarMenu = () => {
	for (let i = 0; i < comidas.length; i++) {
		comidaString[i] = `${i + 1} - ${comidas[i].nombre} : $${
			comidas[i].precio
		} \n`;
	}

	for (let i = 0; i < bebidas.length; i++) {
		bebidaString[i] = `${i + comidas.length + 1} - ${bebidas[i].nombre} : $${
			bebidas[i].precio
		} \n`;
	}

	for (let i = 0; i < postres.length; i++) {
		postreString[i] = `${i + comidas.length + bebidas.length + 1} - ${
			postres[i].nombre
		} : $${postres[i].precio} \n`;
	}

	mensaje = `Comidas:\n ${comidaString}\n Bebidas:\n ${bebidaString}\n Postres:\n ${postreString}\n`;
	eleccion = prompt(mensaje.replace(/,/g, " "));
};

const crearPedido = (eleccion) => {
	if (eleccion > 0 && eleccion <= comidas.length) {
		let articuloElegido = comidas[eleccion - 1].nombre;
		precioArticulo = comidas[eleccion - 1].precio;
		let nuevoPedido = new pedido(articuloElegido, precioArticulo);
		laCuenta.push(nuevoPedido);
	} else if (
		eleccion > comidas.length &&
		eleccion <= bebidas.length + comidas.length
	) {
		let articuloElegido = bebidas[eleccion - comidas.length - 1].nombre;
		precioArticulo = bebidas[eleccion - comidas.length - 1].precio;
		let nuevoPedido = new pedido(articuloElegido, precioArticulo);
		laCuenta.push(nuevoPedido);
	} else if (
		eleccion > comidas.length + bebidas.length &&
		eleccion <= comidas.length + bebidas.length + postres.length
	) {
		let articuloElegido =
			postres[eleccion - comidas.length - bebidas.length - 1].nombre;
		precioArticulo =
			postres[eleccion - comidas.length - bebidas.length - 1].precio;
		let nuevoPedido = new pedido(articuloElegido, precioArticulo);
		laCuenta.push(nuevoPedido);
	} else {
		alert("Opcion no valida");
	}
};

// Interactuo con el usuario mediante las funciones definidas

let confirmacion = prompt("Desea agregar un item? Ingrese si o no");

while (confirmacion.toLowerCase() === "si") {
	decision = prompt(
		`Desea ver el Menu o realizar una Busqueda?\n 1 - Ver menu \n 2 - Realizar una busqueda`);

	if (decision == 1) {
		mostrarMenu();
		console.log(eleccion);
		crearPedido(eleccion);

		confirmacion = prompt("Desea agregar otro item? Ingrese si o no");
	}
    else if(decision == 2){
        busqueda = prompt ("Ingrese lo que desea para verificar disponibilidad");
        let resultadoBusqueda = items.some((elemento) => elemento.nombre.toLowerCase() === busqueda.toLowerCase());
        let index = items.findIndex(articulo => articulo.nombre.toLowerCase() === busqueda.toLowerCase());
        if(resultadoBusqueda == true){
            alert(`Tenemos ${busqueda} en nuestro menu :). Lo encontrarà en la posicion ${index+1} del menu.`);
        }
        else{
            alert(`No tenemos ${busqueda} en nuestro menu :(. Lo tendremos en cuenta para la proxima!`)
        }
        
        confirmacion = prompt("Desea seguir pidiendo? Ingrese si o no");
    }
}

for (let i = 0; i < laCuenta.length; i++) {
	laCuentaString[i] = `${i + 1} - ${laCuenta[i].articulo}: $${
		laCuenta[i].precio
	}\n`;
	precioTotal = precioTotal + laCuenta[i].precio;
}

mensaje = `Usted ordeno:\n ${laCuentaString}\n Precio total: $${precioTotal}`;
alert(mensaje.replace(/,/g, " "));
