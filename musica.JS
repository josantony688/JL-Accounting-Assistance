// Array con las rutas de las canciones
const canciones = [
    "musica/audio/utomp3.com - BLANKO X YUBEILI  Mientes Tan Bien Remix Official Music Video.mp3",
    "musica/audio/utomp3.com - Cartoon Jéja  On  On Lyrics feat Daniel Levi.mp3",
    "musica/audio/utomp3.com - Kiss  I Was Made For Lovin You.mp3",
    "musica/audio/utomp3.com - Danza Kuduro Remix  Don Omar ft Daddy Yankee  Arcangel  Letra.mp3",
    "musica/audio/utomp3.com - Pedro Capó Farruko  Calma Remix  Official Video.mp3",
    "musica/audio/utomp3.com - Daddy Yankee  Snow  Con Calma Video Oficial.mp3",
    "musica/audio/videoplayback.m4a",
    "musica/audio/utomp3.com - Oscar Maydon x Fuerza Regida  TU BODA.mp3",
    "musica/audio/videoplayback (1).m4a"
];
// Obtener elementos del DOM
const audio = document.getElementById('audio');
const nextBtn = document.getElementById('nextBtn');
// Variable para el índice actual
let indiceActual = 0;
// Función para cambiar a la siguiente canción
function siguienteCancion() {
    // Incrementar el índice y usar el operador % para volver al principio de la lista si es necesario
    indiceActual = (indiceActual + 1) % canciones.length;
    // Cambiar la fuente del audio
    audio.src = canciones[indiceActual];   
    // Reproducir la canción inmediatamente después de cambiarla
    audio.play();
}
// Event listener para el botón "Siguiente Canción"
nextBtn.addEventListener('click', siguienteCancion);