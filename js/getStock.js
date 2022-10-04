// Esta funcion obtiene los items generados en el archivo stock.json
const getStock = async (data) => {
	const response = await fetch("./json/stock.json");
	data = await response.json();

	return data;
};
