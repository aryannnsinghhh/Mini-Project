// Function to handle password reset
function resetPassword() {
    var email = document.querySelector("input[type='email']").value;
  
    // Check if email is provided
    if (email) {
      // Send password reset instructions to the provided email (You can implement this functionality)
      alert("Password reset instructions sent to your email.");
    } else {
      alert("Please provide your email address.");
    }
  }
  
  // Event listener for the reset password button
  document.getElementById("resetPasswordBtn").addEventListener("click", resetPassword);
  