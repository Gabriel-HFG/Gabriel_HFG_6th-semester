let countdown;
const display = document.getElementById('display');
const alarm = document.getElementById('alarm');

function startTimer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTime(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            alarm.play();
            return;
        }

        displayTime(secondsLeft);
    }, 1000);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    const displayString = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    display.textContent = displayString;
}
