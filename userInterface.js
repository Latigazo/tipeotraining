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
