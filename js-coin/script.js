
        function flipCoin() {
            const resultDisplay = document.getElementById('result');
            const outcome = Math.floor(Math.random() * 2);

            if (outcome === 0) {
                resultDisplay.innerText = "Heads";
                resultDisplay.style.color = "#f1c40f";
            } else {
                resultDisplay.innerText = "Tails";
                resultDisplay.style.color = "#ecf0f1";
            }
        }

