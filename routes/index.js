const express = require('express');
const index = express.Router();


index.get('/', (req, res) => {
    res.send("Home route");
})

module.exports = index;