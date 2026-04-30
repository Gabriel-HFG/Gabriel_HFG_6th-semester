function play() {
    if (!playerChoice) {
        alert("FIRST SELECT ROCK, PAPER OR SCISSORS");
        return;
    }

    const resultDisplay = document.getElementById('result');
    const computerChoiceDisplay = document.getElementById('computerChoice');
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)];

    computerChoiceDisplay.innerText = `Computer: ${computerChoice} | You: ${playerChoice}`;

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

    setTimeout(resetGame, 2000);
}
