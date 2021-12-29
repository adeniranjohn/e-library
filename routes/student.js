const express = require('express');
const student = express.Router();



student.get('/', (req, res) => {
    res.send("Student route");
});


// Books 


student.get('/books', (req, res) => {
    res.send('Get all books')
})

student.get('/books/:book_id', (req, res) => {
    res.send('Get a books')
})

student.get('/books/:book_id/comments', (req, res) => {
    res.send('Get comments for a book')
})

student.post('/books/:book_id/comments', (req, res) => {
    res.send('post a comment for a book')
})
student.get('/books/:book_id/comments/:comment_id', (req, res) => {
    res.send('Get a comment for a book')
})


// Lessons


student.get('/lessons', (req, res) => {
     res.send('Get all lessons')
})

student.get('/lessons/:lesson_id', (req, res) => {
    res.send('Get a lesson')
})

student.get('/lessons/:lesson_id/comments', (req, res) => {
    res.send('Get all comments for a particular lesson')
})

student.post('/lessons/:lesson_id/comments', (req, res) => {
    res.send('post a comment for a particular lesson')
})

student.get('/lessons/:lesson_id/comments/:comment_id', (req, res) => {
    res.send('get a comment for a particular lesson')
})

module.exports = student;