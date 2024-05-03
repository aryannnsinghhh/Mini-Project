// Function to check if the provided email is valid
function isValidEmail(email) {
    // Regular expression for validating email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to handle password reset
function resetPassword() {
    var emailInput = document.querySelector("input[type='email']");
    var email = emailInput.value;

    // Check if email is provided and valid
    if (email) {
        if (isValidEmail(email)) {
            // Show confirmation dialog for password reset
            var confirmation = window.confirm("Password reset instructions will be sent to your email. Are you sure you want to proceed?");

            if (confirmation) {
                // Send password reset instructions to the provided email
                alert("Password reset instructions sent to your email.");

                // Clear the email input field
                emailInput.value = "";
            }
        } else {
            alert("Please provide a valid email address.");
        }
    } else {
        alert("Please provide your email address.");
    }
}

// Event listener for the reset password button
document.getElementById("resetPasswordBtn").addEventListener("click", resetPassword);
