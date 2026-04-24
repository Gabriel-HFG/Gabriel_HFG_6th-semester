let totalClicks = 0;
let startTime = null;
let timerRunning = false;
let duration = 10;

function updateCPS() {
    const button = event.target;

    if (!timerRunning) {
        startTime = Date.now();
        timerRunning = true;

        setTimeout(() => {
            endGame(button);
        }, duration * 1000);
    }

    if (timerRunning) {
        totalClicks++;

        let timeElapsed = (Date.now() - startTime) / 1000;
        let cps = (totalClicks / (timeElapsed || 1)).toFixed(2);

        button.innerHTML = `Clicks: ${totalClicks} | CPS: ${cps}`;
    }
}

function endGame(button) {
    timerRunning = false;
    button.disabled = true;
    button.innerHTML = `¡FIN! Total: ${totalClicks} clics`;
    button.style.backgroundColor = "#ccc";

    document.querySelector('h1').innerHTML = `Resultado Final: ${totalClicks} clicks en 10 segundos`;
}
