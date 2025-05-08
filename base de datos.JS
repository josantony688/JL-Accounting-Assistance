document.getElementById('sendDataButton').addEventListener('click', function () {
    const table = document.getElementById('suggestionsTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const data = [];
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = {
            idnombre: parseInt(cells[0].querySelector('input').value) || null, // Acepta números o null
            Apellido: cells[1].querySelector('input').value,
            Correo: cells[2].querySelector('input').value,
            estado: cells[3].querySelector('input').value,
            pais: cells[4].querySelector('input').value,
            sugerencia_a_favor: cells[5].querySelector('input').value,
            sugerencia_en_contra: cells[6].querySelector('input').value
        };
        data.push(rowData);
    }
    fetch('insertData.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data }) // Empaquetamos los datos en un objeto con clave "data"
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
    const fields = ["idnombre", "Apellido", "Correo", "estado", "pais", "sugerencia_a_favor", "sugerencia_en_contra"];

    fields.forEach((field, index) => {
        const cell = newRow.insertCell(index);
        cell.innerHTML = `<input type="text" placeholder="${field}">`;
    });
});
// Enviar datos al backend insertData.php
//no funciana de aqi a
document.getElementById('sendDataButton').addEventListener('click', function () {
    const table = document.getElementById('suggestionsTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = {
            idnombre: parseInt(cells[0].querySelector('input').value) || null,
            Apellido: cells[1].querySelector('input').value,
            Correo: cells[2].querySelector('input').value,
            estado: cells[3].querySelector('input').value,
            pais: cells[4].querySelector('input').value,
            sugerencia_a_favor: cells[5].querySelector('input').value,
            sugerencia_en_contra: cells[6].querySelector('input').value
        };
        data.push(rowData);
    }
//a aca
    fetch('insertData.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
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

// Agregar una nueva fila con inputs al presionar el botón
document.getElementById('addRowButton').addEventListener('click', () => {
    const table = document.getElementById('suggestionsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const fields = ["idnombre", "Apellido", "Correo", "estado", "pais", "sugerencia_a_favor", "sugerencia_en_contra"];

    fields.forEach((field, index) => {
        const cell = newRow.insertCell(index);
        cell.innerHTML = `<input type="text" placeholder="${field}">`;
    });
});

// Agrega la primera fila automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addRowButton').click();
});
