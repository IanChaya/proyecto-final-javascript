function actualizarPrecio(precioTotal){
    const contenedorPrecioTotal = document.getElementById("contenedor-precio-total");
    contenedorPrecioTotal.innerHTML = `Precio Total: $${precioTotal}`;
}