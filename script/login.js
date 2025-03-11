document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const numberInput = document.getElementById("number");

    // Toggle password visibility
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "🔒";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "👁️";
        }
    });

    // Handle form submission
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        errorMessage.textContent = "";

        const number = numberInput.value.trim();
        const password = passwordInput.value.trim();

        // Regular expression for PH mobile numbers (09XXXXXXXXX format)
        const phNumberRegex = /^09\d{9}$/;

        if (!number || !password) {
            errorMessage.textContent = "Phone number and password are required.";
            return;
        }

        if (!phNumberRegex.test(number)) {
            errorMessage.textContent = "Please enter a valid Philippine phone number (09XXXXXXXXX).";
            return;
        }

        console.log("Logging in with:", { number, password });

        // Simulate API call (replace with actual fetch)
        setTimeout(() => {
            if (number === "09123456789" && password === "password") {
                localStorage.setItem("token", "fake-jwt-token");
                alert("Login successful! Redirecting...");
                window.location.href = "dashboard.html";
            } else {
                errorMessage.textContent = "Invalid phone number or password.";
            }
        }, 1000);
    });
});
