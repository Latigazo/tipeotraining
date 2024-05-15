let score = 0;
let wordList = [];
let currentWord = '';
let wordTimer;
let playerName = '';
const topScores = JSON.parse(localStorage.getItem('topScores')) || [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('words.txt')
        .then(response => response.text())
        .then(data => {
            wordList = data.split('\n');
            displayTopScores();
        });
});

function startGame() {
    playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert('Introduce Tu Nombre Para Comenzar.');
        return;
    }
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    document.getElementById('userInput').value = '';
    changeWord();
    setInterval(updateTime, 1000);
    document.getElementById('userInput').addEventListener('input', checkInput);
}

function changeWord() {
    if (wordTimer) clearTimeout(wordTimer);
    currentWord = wordList[Math.floor(Math.random() * wordList.length)].trim();
    document.getElementById('wordToType').textContent = currentWord;
    wordTimer = setTimeout(() => {
        saveScore();
        resetScore();
        changeWord();
    }, 3000);
}

function checkInput() {
    const input = document.getElementById('userInput').value.trim();
    if (input === currentWord) {
        score++;
        document.getElementById('scoreDisplay').textContent = score;
        document.getElementById('userInput').value = '';
        changeWord();

        // Verificar si el puntaje alcanza un múltiplo de 10 y reproducir sonido de diez palabras
        if (score % 10 === 0) {
            playTenWordsSound();
        }
    }
}


function resetScore() {
    score = 0;
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('userInput').value = '';
}

function saveScore() {
    const existingPlayerIndex = topScores.findIndex(player => player.name === playerName);
    if (existingPlayerIndex !== -1) {
        // El jugador ya está en la lista; actualizamos su puntuación
        topScores[existingPlayerIndex].score = Math.max(topScores[existingPlayerIndex].score, score);
    } else {
        // El jugador no está en la lista; lo agregamos como una nueva entrada
        topScores.push({ name: playerName, score: score });
        topScores.sort((a, b) => b.score - a.score);
        if (topScores.length > 5) topScores.pop(); // Limitar a 5 jugadores
    }
    localStorage.setItem('topScores', JSON.stringify(topScores));
    displayTopScores();

    // Verificar si el puntaje es mayor que 0 y alcanza un múltiplo de 10, y reproducir sonido de diez palabras
    if (score > 0 && score % 10 === 0) {
        playTenWordsSound();
    }
}







function displayTopScores() {
    const scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = topScores.map(score => `<li>${score.name}: ${score.score}</li>`).join('');
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('timeDisplay').textContent = `${hours}:${minutes}`;
}

// SONIDO AL +10
score++;

// Si el puntaje alcanza un múltiplo de 10, reproducir sonido de diez palabras
if (score % 10 === 0) {
    playTenWordsSound();
}
