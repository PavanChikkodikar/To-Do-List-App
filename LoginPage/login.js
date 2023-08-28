const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    errorMessage.textContent = "";

    if (usernameInput.value.trim() === "") {
        errorMessage.textContent = "Username is required";
        return;
    }

    if (passwordInput.value.trim() === "") {
        errorMessage.textContent = "Password is required";
        return;
    }

    const loginButton = document.querySelector("button[type='submit']");
    loginButton.disabled = true;

    setTimeout(function() {
        window.location.href = "/ToDoListApp/index.html";
    }, 1000);
});
