const express = require('express');
const teacher = express.Router();


teacher.get('/', (req, res) => {
    res.send("Teacher route");
})

// Books

teacher.post('/books', (req, res) => {
    res.send('add a book')
})

teacher.get('/books', (req, res) => {
    res.send('get all book');
})

teacher.get('/books/:book_id', (req, res) => {
    res.send('get a book')
})


teacher.patch('/books/:book_id', (req, res) =>{
    res.send('update a book')
})

teacher.delete('/books/:book_id', (req, res) =>{
    res.send('delete a book')
})


// Lesson Notes

teacher.post('/lessons', (req, res) =>{
    res.send('post a lesson')
})

teacher.get('/lessons', (req, res) =>{
    res.send('get all lesson')
})

teacher.get('/lessons/:lesson_id', (req, res) =>{
    res.send('get a lesson')
})

teacher.patch('/lessons/:lesson_id', (req, res) =>{
    res.send('update a lesson');
})

teacher.delete('/lessons/:lesson_id', (req, res) =>{
    res.send('delete a lesson')
})

module.exports = teacher;