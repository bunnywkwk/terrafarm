document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const errorMessage = document.getElementById("error-message");
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const fullNameInput = document.getElementById("fullName");
    const numberInput = document.getElementById("number");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Toggle password visibility
    togglePassword.addEventListener("click", function () {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        togglePassword.textContent = passwordInput.type === "password" ? "👁️" : "🔒";
    });

    toggleConfirmPassword.addEventListener("click", function () {
        confirmPasswordInput.type = confirmPasswordInput.type === "password" ? "text" : "password";
        toggleConfirmPassword.textContent = confirmPasswordInput.type === "password" ? "👁️" : "🔒";
    });

    // Handle form submission
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        errorMessage.textContent = "";

        const fullName = fullNameInput.value.trim();
        const number = numberInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Regular expression for PH mobile numbers (09XXXXXXXXX format)
        const phNumberRegex = /^09\d{9}$/;

        if (!fullName || !number || !password || !confirmPassword) {
            errorMessage.textContent = "All fields are required.";
            return;
        }

        if (!phNumberRegex.test(number)) {
            errorMessage.textContent = "Please enter a valid Philippine phone number (09XXXXXXXXX).";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters long.";
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            return;
        }

        console.log("Signing up with:", { fullName, number, password });

        // Simulate API call (replace with actual fetch)
        setTimeout(() => {
            alert("Sign-up successful! Redirecting to login...");
            window.location.href = "login.html";
        }, 1000);
    });
});
