const express = require('express');
const teacher = express.Router();


teacher.get('/', (req, res) => {
    res.send("Teacher route");
})

module.exports = teacher;