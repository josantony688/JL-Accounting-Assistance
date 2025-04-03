document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('spreadsheet');
    const headerRow = table.querySelector('thead tr');
    const body = table.querySelector('tbody');
    const numRows = 50;
    const numCols = 50;
    const resultsDiv = document.getElementById('results'); // Obtener el div de resultados

    // Generar encabezados de columnas (A, B, C, ...)
    for (let i = 0; i < numCols; i++) {
        const headerCell = document.createElement('th');
        headerCell.textContent = String.fromCharCode(65 + i); // A, B, C, ...
        headerRow.appendChild(headerCell);
    }

    // Generar filas de la tabla
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        const rowHeader = document.createElement('td');
        rowHeader.textContent = i + 1;
        row.appendChild(rowHeader);
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            cell.contentEditable = true;
            cell.classList.add('editable');
            row.appendChild(cell);
        }
        body.appendChild(row);
    }

    document.getElementById('sum').addEventListener('click', function() {
        calculate('sum');
    });

    document.getElementById('subtract').addEventListener('click', function() {
        calculate('subtract');
    });

    document.getElementById('multiply').addEventListener('click', function() {
        calculate('multiply');
    });

    document.getElementById('divide').addEventListener('click', function() {
        calculate('divide');
    });

    document.getElementById('sendEmail').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const results = calculateTotals();
        sendEmail(email, results);
    });

    function calculate(operation) {
        const results = {};
        for (let j = 0; j < numCols; j++) {
            let result = 0;
            if (operation === 'multiply' || operation === 'divide') {
                result = 1;
            }
            for (let i = 0; i < numRows; i++) {
                const cell = table.rows[i + 1].cells[j + 1];
                const value = parseFloat(cell.textContent) || 0;
                if (operation === 'sum') {
                    result += value;
                } else if (operation === 'subtract') {
                    result -= value;
                } else if (operation === 'multiply') {
                    result *= value || 1;
                } else if (operation === 'divide') {
                    result /= value || 1;
                }
            }
            results[String.fromCharCode(65 + j)] = result;
        }

        // Mostrar resultados en el div
        let resultsText = '';
        for (const col in results) {
            resultsText += `${col}: ${results[col].toFixed(2)} | `;
        }
        resultsDiv.textContent = resultsText;
    }

    function calculateTotals() {
        // ... (La función calculateTotals se mantiene igual) ...
    }

    function sendEmail(email, results) {
        // ... (La función sendEmail se mantiene igual) ...
    }
});