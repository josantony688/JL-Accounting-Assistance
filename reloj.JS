// Reloj en tiempo real
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
// Temporizador
let timerInterval;
let timerTime = 0;
document.getElementById('start-timer').addEventListener('click', () => {
    const inputTime = parseInt(document.getElementById('timer-input').value, 10);
    if (isNaN(inputTime) || inputTime <= 0) {
        alert('Por favor ingresa un número válido de segundos.');
        return;
    }

    timerTime = inputTime;
    document.getElementById('timer-display').textContent = formatTime(timerTime);
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        if (timerTime > 0) {
            timerTime--;
            document.getElementById('timer-display').textContent = formatTime(timerTime);
        } else {
            clearInterval(timerInterval);
            alert('¡El tiempo se ha acabado!');
        }
    }, 1000);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
}
// Actualizar reloj cada segundo
setInterval(updateClock, 1000);
// Inicializar el reloj al cargar la página
updateClock();