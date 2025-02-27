document.addEventListener("DOMContentLoaded", function () {
    // Get all forms
    const loginForm = document.getElementById("loginForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    // Get all input fields and error message containers for Login Form
    const emailInputLogin = document.getElementById("emailInput");
    const passwordInputLogin = document.getElementById("passwordInput");
    const emailErrorLogin = document.getElementById("emailError");
    

    // Get all input fields and error message containers for Forgot Password Form
    const emailInputForgot = document.getElementById("emailInputForgot");
    const lastPasswordInput = document.getElementById("lastPasswordInput");
    const newPasswordInput = document.getElementById("newPasswordInput");

    const emailErrorForgot = document.getElementById("emailErrorForgot");
    const lastPasswordError = document.getElementById("lastPasswordError");
    const newPasswordError = document.getElementById("newPasswordError");

    
    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission immediately
    
            let isValid = true;
    
            // Reset error messages and styling
            emailErrorLogin.textContent = ""; // Reset error message
            emailInputLogin.classList.remove("error");
            passwordInputLogin.classList.remove("error");
    
            // Validate email for Login
            if (!validateEmail(emailInputLogin.value)) {
                emailErrorLogin.textContent = "Please enter a valid email address.";
                emailInputLogin.classList.add("error");
                isValid = false;
            }
    
            // Validate password for Login
            if (passwordInputLogin.value.trim() === "") {
                alert("Please enter your password.");
                passwordInputLogin.classList.add("error");
                isValid = false;
            }
    
            // Redirect to Landing page if validation is successful
            if (isValid) {
                loginForm.submit(); // Redirect to landing page
            }
        });
    }

    // Handle forgot password form submission
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission immediately
    
            let isValid = true;
    
            // Reset error messages
            emailErrorForgot.textContent = "";
            lastPasswordError.textContent = "";
            newPasswordError.textContent = "";
    
            emailInputForgot.classList.remove("error");
            lastPasswordInput.classList.remove("error");
            newPasswordInput.classList.remove("error");
    
            // Validate email for Forgot Password
            if (!validateEmail(emailInputForgot.value)) {
                emailErrorForgot.textContent = "Please enter a valid email address.";
                emailInputForgot.classList.add("error");
                isValid = false;
            }
    
            // Validate last remembered password
            if (lastPasswordInput.value.trim() === "") {
                lastPasswordError.textContent = "Please enter your last remembered password.";
                lastPasswordInput.classList.add("error");
                isValid = false;
            }
    
            // Validate new password (must be at least 6 characters)
            if (newPasswordInput.value.length < 6) {
                newPasswordError.textContent = "New password must be at least 6 characters.";
                newPasswordInput.classList.add("error");
                isValid = false;
            }
    
            // Redirect to Landing page if validation is successful
            if (isValid) {
                window.location.href = "Landing.html"; // Redirect to landing page
            }
        });
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
