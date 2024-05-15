// Ejemplo de configuración para sonido y idioma
const settings = {
    soundEnabled: true,
    language: 'es'
};

function toggleSound() {
    settings.soundEnabled = !settings.soundEnabled;
}

function setLanguage(lang) {
    settings.language = lang;
    // Aquí puedes agregar la lógica para cambiar el idioma del juego
}
