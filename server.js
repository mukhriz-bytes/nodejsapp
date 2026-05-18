// A simple Node.js server that responds with "Hello MERN zrmkhrz" to any request.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Open http://127.0.0.1:3000/
app.get('/', (req, res) => {
    res.send('Hello MERN zrmkhrz with Express!');
});

// Open http://127.0.0.1:3000/api
app.get('/api', (req, res) => {
    res.send('Hello MERN zrmkhrz batch 3!');
});

app.get('/data', (req, res) => {
    res.send('This is some data to test the CI/CD pipeline.');
});

app.get('/endpoint', (req, res) => {
    res.send('This is the API endpoint.');
});

app.get('/update', (req, res) => {
    res.send('This is an updated endpoint for CI/CD pipeline testing.');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});