// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 27017;

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:3000/formDatabase', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Creating a user schema and model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/submit-form', (req, res) => {
    const { username, email, password } = req.body;

    // Here you would add validation logic
    if (username && email && password) {
        const newUser = new User({username, email, password});
    
        newUser.save((err) => {
            if (err) {
                res.status(500).send('Error saving to MongoDB');
            } else {
                res.status(200).send('User created successfully');
            }
        });
    } else {
        // Incomplete form submission
        res.status(400).send('All fields are required');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
