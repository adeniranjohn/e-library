const express = require('express');
const index = express.Router();


index.get('/', (req, res) => {
    res.send("Home route");
})

index.post('/register', (req, res) => {
    res.send("Register route");
})


module.exports = index;