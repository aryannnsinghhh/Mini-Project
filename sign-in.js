let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

// Function to handle sign-up
function signUp() {
    // Get input field values
    var name = document.querySelector("#namefield input").value;
    var email = document.querySelector("input[type='email']").value;
    var password = document.querySelector("input[type='password']").value;

    // Validate input
    if (name && email && password) {
        // Create user object
        var user = {
            name: name,
            email: email,
            password: password
        };

        // Store user data locally
        localStorage.setItem('user', JSON.stringify(user));

        // Clear input fields
        document.querySelector("#namefield input").value = "";
        document.querySelector("input[type='email']").value = "";
        document.querySelector("input[type='password']").value = "";

        // Redirect to sign-in section
        namefield.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signinBtn.classList.add("disable");
        signupBtn.classList.remove("disable");
    } else {
        alert("Please fill in all fields.");
    }
}


// Function to handle sign-in
function signIn() {
    // Retrieve user data from local storage
    var storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        var emailInput = document.querySelector("input[type='email']").value;
        var passwordInput = document.querySelector("input[type='password']").value;

        // Check if the input credentials match stored credentials
        if (emailInput === storedUser.email && passwordInput === storedUser.password) {
            // Redirect to index page upon successful sign-in
            window.location.href = "index.html"; // Redirect to index page
        } else {
            alert("Incorrect email or password.");
        }
    } else {
        alert("No user found. Please sign up first.");
    }
}

// Event listeners for sign-up and sign-in buttons
document.getElementById("signupBtn").addEventListener("click", signUp);
document.getElementById("signinBtn").addEventListener("click", signIn);
