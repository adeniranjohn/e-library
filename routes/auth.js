const express = require('express');
const auth = express.Router();


auth.post('/local', (req, res) => {
    res.send("check user name and password");
})

auth.post('/google', (req, res) => {
    res.send("login with google");
})

auth.post('/facebook', (req, res) => {
    res.send("login with facebook");
})


auth.get('/auth/:user', (req, res) => {
    res.send("Get user data")
})

module.exports = auth;