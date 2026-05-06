document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    console.log("Hi " + name);
}
