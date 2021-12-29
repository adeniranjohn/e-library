const express = require('express');

const app = express();

const auth = require('./routes/auth');
const student = require('./routes/student');
const teacher = require('./routes/teacher');
const index = require('./routes/index')

const port = process.env.PORT || 3300;
app.use(express.urlencoded({extended:true}));
app.use(express.json());







app.use('/api', index);
app.use('/api/auth', auth);
app.use('/api/teacher', teacher);
app.use('/api/student', student);

app.listen(port, (req, res) => {
    console.log(`Server is listening on PORT:${port} `)
})