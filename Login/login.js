const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

// To store data
// localStorage.setItem('username', 'user');
// localStorage.setItem('password', 'pass');

// To retrieve data
// const username = localStorage.getItem('username');
// const password = localStorage.getItem('password');


loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Always consider login as successful without checking username and password
    errorMessage.textContent = "";
    window.location.href = "/index.html";
    alert("Login successful!");
});
