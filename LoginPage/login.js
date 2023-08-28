const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    errorMessage.textContent = "";
    const loginButton = document.querySelector("button[type='submit']");
    loginButton.disabled = true;

    setTimeout(function() {
        window.location.href = "/ToDoListApp/index.html";
    }, 1000); 

});
