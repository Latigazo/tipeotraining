
// Puedes agregar aquí cualquier otra lógica de inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
});

// Agregar un event listener para el evento de presionar una tecla
document.addEventListener('keydown', () => {
    playTypeSound();
    // Aquí puedes agregar cualquier otra lógica relacionada con la presión de teclas
});