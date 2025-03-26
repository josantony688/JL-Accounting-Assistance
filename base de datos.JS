document.getElementById('addRowButton').addEventListener('click', function() {
    const table = document.getElementById('suggestionsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Crear celdas con inputs
    const cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6)
    ];

    cells[0].innerHTML = '<input type="text" placeholder="Nombre">';
    cells[1].innerHTML = '<input type="text" placeholder="Apellido">';
    cells[2].innerHTML = '<input type="email" placeholder="correo@ejemplo.com">';
    cells[3].innerHTML = '<input type="text" placeholder="Estado">';
    cells[4].innerHTML = '<input type="text" placeholder="País">';
    cells[5].innerHTML = '<input type="text" placeholder="Sugerencia a Favor">';
    cells[6].innerHTML = '<input type="text" placeholder="Sugerencias en Contra">';
});
