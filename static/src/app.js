// Obtener el elemento de tabla HTML
const tabla = document.querySelector("table tbody");

// Obtener los datos del archivo CSV
fetch("./data/steam_games.csv")
  .then((response) => response.text())
  .then((data) => {
    // Convertir los datos CSV en un array de objetos
    const juegos = parseCSV(data);

    // Generar las filas de la tabla a partir de los datos
    juegos.forEach((juego) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${juego.titulo}</td>
        <td>${juego.desarrollador}</td>
        <td>${juego.genero}</td>
        <td>${juego.plataforma}</td>
        <td>${juego.anio}</td>
      `;
      tabla.appendChild(fila);
    });
  })
  .catch((error) => console.error(error));

// Función para convertir datos CSV en un array de objetos
function parseCSV(data) {
  const filas = data.split("\n");
  const columnas = filas[0].split(",");
  const juegos = [];

  for (let i = 1; i < filas.length; i++) {
    const juego = {};
    const valores = filas[i].split(",");

    for (let j = 0; j < columnas.length; j++) {
      juego[columnas[j]] = valores[j];
    }

    juegos.push(juego);
  }

  return juegos;
}
