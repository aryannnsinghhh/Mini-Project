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
    var name = document.querySelector("#namefield input").value;
    var email = document.querySelector("input[type='email']").value;
    var password = document.querySelector("input[type='password']").value;

    if (name && email && password) {
        // Validate email format (you can use a regex or a library like validator.js)
        if (!isValidEmail(email)) {
            alert("Please provide a valid email address.");
            return;
        }

        // Create user object
        var user = {
            name: name,
            email: email,
            password: password
        };

        // Store user data securely (consider using encryption)
        storeUser(user);

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
    var email = document.querySelector("input[type='email']").value;
    var password = document.querySelector("input[type='password']").value;

    if (email && password) {
        // Send credentials to the server for authentication
        authenticateUser(email, password);
    } else {
        alert("Please provide both email and password.");
    }
}

// Function to store user securely (you can use encryption)
function storeUser(user) {
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));
}

function authenticateUser(email, password) {

    var storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        if (email === storedUser.email && password === storedUser.password) {
            window.location.href = "index.html"; // Redirect to index page upon successful sign-in
        } else {
            alert("Incorrect email or password.");
        }
    } else {
        alert("No user found. Please sign up first.");
    }
}

// Function to check if the provided email is valid
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Event listeners for sign-up and sign-in buttons
document.getElementById("signupBtn").addEventListener("click", signUp);
document.getElementById("signinBtn").addEventListener("click", signIn);
