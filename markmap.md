# Juego de Tipeo

## Descripción

- Juego de tipeo donde los jugadores deben escribir palabras que aparecen en pantalla.
- Puntuación basada en la cantidad de palabras escritas correctamente.

## Estructura del Proyecto

- **index.html**
  - Estructura principal del juego.
  - Elementos:
    - Campo de entrada para el nombre del jugador.
    - Pantalla de juego.
    - Pantalla de inicio.
    - Visualización de la puntuación y el tiempo.
- **styles.css**
  - Estilos para la interfaz del juego.
  - Temas:
    - Fondo oscuro.
    - Texto verde estilo "Matrix".
    - Input con efecto transparente.
- **gameLogic.js**
  - Lógica principal del juego.
  - Funciones:
    - `startGame()`
    - `changeWord()`
    - `checkInput()`
    - `resetScore()`
    - `saveScore()`
    - `displayTopScores()`
    - `updateTime()`
- **sounds.js**
  - Manejo de los efectos de sonido del juego.
  - Sonidos:
    - `typeSound`: sonido al presionar una tecla.
    - `tenWordsSound`: sonido al alcanzar múltiplos de 10 puntos.
    - `loseSound`: sonido al perder luego de tres palabras correctas.
  - Funciones:
    - `playTypeSound()`
    - `playTenWordsSound()`
    - `playLoseSound()`
- **words.txt**
  - Lista de palabras para el juego.

## Funcionalidades

- **Inicio del Juego**
  - Solicita el nombre del jugador.
  - Inicia el juego y muestra la primera palabra.
- **Ingreso de Palabras**
  - Detecta cuando el jugador escribe la palabra correcta.
  - Cambia la palabra y actualiza la puntuación.
- **Puntuación**
  - Incrementa la puntuación por cada palabra correcta.
  - Reproduce un sonido especial cada 10 puntos.
- **Top Scores**
  - Guarda y muestra las mejores puntuaciones.
  - Almacena las puntuaciones en el `localStorage`.

## Licencia

- **MIT License**
  - Permite el uso, copia, modificación y distribución del software.
  - Requiere incluir la misma licencia y el aviso de derechos de autor en todas las copias.

## Mejoras Futuras

- Adición de niveles de dificultad.
- Implementación de un temporizador de cuenta regresiva.
- Integración con una base de datos para puntuaciones en línea.
