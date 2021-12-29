const express = require('express');
const auth = express.Router();


auth.get('/', (req, res) => {
    res.send("its auth route");
})

module.exports = auth;