/*document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    console.log("Hi " + name);
} */

              document.addEventListener('DOMContentLoaded', function() {
            const nameForm = document.getElementById('nameForm');
            const mainContent = document.getElementById('main-content');
            const now = new Date();

            nameForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const name = document.getElementById('userName').value;

                mainContent.style.display = 'block';
                updateUI(name);

                // nameForm.style.display = 'none'; // hidding if you want
            });

            function updateUI(userName) {
                const hour = now.getHours();
                let timeGreeting = "";
                if (hour < 12) timeGreeting = "Good morning";
                else if (hour < 18) timeGreeting = "Good afternoon";
                else timeGreeting = "Good evening";

                document.getElementById("greeting").innerHTML = `${timeGreeting}, ${userName}!`;

                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const dayNumber = now.getDay();
                document.getElementById("day-name").innerHTML = "Today is " + days[dayNumber];

                let statusMsg = "";
                if (dayNumber === 5) statusMsg = "Finally Fridaaaaaay! 🕺";
                else if (dayNumber === 0 || dayNumber === 6) statusMsg = "Just enjoy your weekend 🙌";
                else statusMsg = "Not Friday, yet!";

                document.getElementById("weekend-message").innerHTML = statusMsg;
            }
        });
