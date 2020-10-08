const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const logger = require('./public/assets/js/logger');




// middleware
// app.use(logger);
app.use(express.static('./public/assets/index.html'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//route for home page?
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public', 'index.html'))
})

// route for GET Notes
app.get('/notes.html', (req, res) => {
    // console.log(res);
    res.sendFile(path.join(__dirname + '/public', 'notes.html'))
    // res.json(notes)
});

// GETS Notes from db.JSON
// RETURNS as JSON format from /api/notes
app.get('/api/notes', (req, res) => {
    // console.log(res);
    fs.readFile(__dirname + '/db/db.json', (err, data) => {
        if (err) throw err;
        const note = JSON.parse(data)
        return res.json(note)
    })
})

app.post('/api/notes', function (req, res) {
    fs.writeFile(__dirname + '/db/db.json', function (err, data) {
        if (err) throw err;
        const newNote = req.body;
        console.log(`new note ${newNote}`);
        // create array to push new notes to
        let notes = [];
        // give each note an id
        let id = [];


    })
});





app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

