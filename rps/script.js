let playerChoice = null;
let computerChoice = null;

function Rock() {
    playerChoice = "rock";
    updateButtons("rock");
}

function Paper() {
    playerChoice = "paper";
    updateButtons("paper");
}

function Scissors() {
    playerChoice = "scissors";
    updateButtons("scissors");
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

function play() {
    if (playerChoice === null) {
        alert("FIRST SELECT ROCK, PAPER OR SSCISSORS");
        return;
    }

    const resultDisplay = document.getElementById('result');
    const computerChoiceDisplay = document.getElementById('computerChoice');
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    computerChoice = choices[randomIndex];
    console.log(computerChoice);
    computerChoiceDisplay.innerText = `ComputerChoice: ${computerChoice}, PlayerChoice: ${playerChoice}`


    if (playerChoice === computerChoice) {
        resultDisplay.innerText = "It's a tie!";
    }
    else if (playerChoice === "rock") {
        resultDisplay.innerText = (computerChoice === "scissors") ? "You win! Rock beats Scissors." : "You lose! Paper beats Rock.";
    }
    else if (playerChoice === "paper") {
        resultDisplay.innerText = (computerChoice === "rock") ? "You win! Paper beats Rock." : "You lose! Scissors beats Paper.";
    }
    else if (playerChoice === "scissors") {
        resultDisplay.innerText = (computerChoice === "paper") ? "You win! Scissors beats Paper." : "You lose! Rock beats Scissors.";
    }
        resetGame();
}

function resetGame() {
    playerChoice = null;
    computerChoice = null;
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
        btn.style.border = "none";
    });
}
