function interseccion() {
    // Obtener las direcciones desde los campos de entrada
    let calle1 = document.getElementById("calle1").value;
    let calle2 = document.getElementById("calle2").value;

    // Validar si ambos campos tienen valores
    if (!calle1 || !calle2) {
        alert("Por favor ingrese ambas calles.");
        return;
    }

    // Construir la URL de la API
    let url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(calle1)}%20y%20${encodeURIComponent(calle2)}`;

    // Realizar la solicitud GET utilizando Axios
    axios.get(url)
        .then(function(response) {
            // Ver la respuesta completa en la consola
            console.log(response);
            console.log(response.data);

            // Asumimos que la respuesta contiene un objeto con la dirección normalizada
            // Si la API retorna un objeto o una cadena, actualizar el campo de resultado
            document.getElementById("resultado").value = response.data || "No se encontraron resultados.";
        })
        .catch(function(error) {
            // Manejar cualquier error en la solicitud
            console.error("Hubo un error al realizar la solicitud:", error);
            alert("Ocurrió un error al obtener la información.");
        });
}
