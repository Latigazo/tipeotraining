// SONIDO DE TIPEO
const typeSound = new Audio('sounds/type-sound.mp3');

// Función para reproducir sonido al presionar una tecla
function playTypeSound() {
    // Clonar el elemento de audio para permitir múltiples reproducciones simultáneas
    const newSound = typeSound.cloneNode();
    // Reproducir el sonido
    newSound.play();
}

// SONIDO DE +10
const tenWordsSound = new Audio('sounds/ten-words-sound.mp3');

// Función para reproducir el sonido de diez palabras
function playTenWordsSound() {
    // Clonar el elemento de audio para permitir múltiples reproducciones simultáneas
    const newSound = tenWordsSound.cloneNode();
    // Reproducir el sonido
    newSound.play();
}
