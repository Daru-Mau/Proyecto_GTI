<?php
// Ruta al archivo CSV
$csv_file = '../../data/steam_games.csv';

// Abrir el archivo CSV
$file = fopen($csv_file, 'r');

// Leer la primera fila del archivo como encabezados de columna
$headers = fgetcsv($file);

// Crear un array para almacenar los datos
$data = array();

// Leer cada fila del archivo y agregarla al array de datos
while ($row = fgetcsv($file)) {
    $data[] = $row;
}

// Cerrar el archivo CSV
fclose($file);

// Crear la tabla HTML
$table = '<table>';
$table .= '<thead><tr>';

// Agregar los encabezados de columna a la tabla
foreach ($headers as $header) {
    $table .= '<th>' . $header . '</th>';
}

$table .= '</tr></thead>';
$table .= '<tbody>';

// Agregar los datos a la tabla
foreach ($data as $row) {
    $table .= '<tr>';
    foreach ($row as $value) {
        $table .= '<td>' . $value . '</td>';
    }
    $table .= '</tr>';
}

$table .= '</tbody></table>';

// Imprimir la tabla en la página
echo $table;
