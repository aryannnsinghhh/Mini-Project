const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint for sign-up
app.post('/signup', (req, res) => {
    const userData = req.body; // Assuming user data is sent as JSON
    // Here, you can store userData in your database
    console.log(userData);
    res.send("Sign-up successful!");
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
// Endpoint for sign-in
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    // Here, you would typically check the user's credentials against your database
    // For simplicity, let's assume you have a hardcoded user for demonstration
    const hardcodedUser = {
        email: 'example@example.com',
        password: 'password123'
    };
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        res.send("Sign-in successful!");
    } else {
        res.status(401).send("Invalid email or password");
    }
});

