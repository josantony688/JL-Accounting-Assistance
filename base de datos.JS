document.getElementById('sendDataButton').addEventListener('click', function () {
    const table = document.getElementById('suggestionsTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = {
            nombre: cells[0].querySelector('input').value,
            apellido: cells[1].querySelector('input').value,
            correo: cells[2].querySelector('input').value,
            estado: cells[3].querySelector('input').value,
            pais: cells[4].querySelector('input').value,
            sugerenciaFavor: cells[5].querySelector('input').value,
            sugerenciaContra: cells[6].querySelector('input').value
        };
        data.push(rowData);
    }

    fetch('insertData.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Éxito:', result);
        alert("Datos enviados correctamente.");
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Agregar una fila nueva automáticamente con inputs
document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('suggestionsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const fields = ["idNombre", "Apellido", "Correo Electrónico", "Estado", "País", "Sugerencia a Favor", "Sugerencia en Contra"];

    fields.forEach((field, index) => {
        const cell = newRow.insertCell(index);
        cell.innerHTML = `<input type="text" placeholder="${field}">`;
    });
});
