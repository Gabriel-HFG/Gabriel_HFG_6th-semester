let userSelection = null;

function Heads() {
    userSelection = "Heads";
    updateButtons("Heads");
}

function tails() {
    userSelection = "Tails";
    updateButtons("Tails");
}

function updateButtons(selection) {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
        btn.style.cursor = "not-allowed";
        if (btn.innerText === selection) {
            btn.style.border = "2px solid white";
            btn.style.opacity = "1";
        }
    });
}

function flipCoin() {
    if (userSelection === null) {
        alert("FIRST SELECT HEADS OR TAILS");
        return;
    }

    const resultDisplay = document.getElementById('result');
    const outcome = Math.floor(Math.random() * 2);
    const resultText = (outcome === 0) ? "Heads" : "Tails";

    resultDisplay.innerText = resultText;
    resultDisplay.style.color = (outcome === 0) ? "#f1c40f" : "#ecf0f1";

    setTimeout(() => {
        if (userSelection === resultText) {
            alert("YOU WON:  " + resultText);
        } else {
            alert("YOU LOST: " + resultText);
        }
        resetGame();
    }, 100);
}

function resetGame() {
    userSelection = null;
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
        btn.style.border = "none";
    });
}
