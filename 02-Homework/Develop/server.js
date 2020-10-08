const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const logger = require('./public/assets/js/logger');
const { response, json } = require('express');
const { isBuffer } = require('util');
const uuid = require('uuid')
let noteArr = [];
// middleware
// app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// route for GET Notes
app.get('/notes', (req, res) => {res.sendFile(path.join(__dirname + '/public', 'notes.html'))});
// GETS Notes from db.JSON
app.get('/api/notes', (req, res) => {
    res.json(noteArr);
});

// first read the db.json file 
app.post('/api/notes', function (req, res) {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    };
    noteArr.push(newNote);
    res.json(noteArr);
    console.table(noteArr);
});

// deleting a note
app.delete("/api/notes/:id", function(req, res){
    let noteId = req.params.id;
    for (let i = 0; i < notesArr.length; i++){
        if (noteId === notesArr[i].id){
            notesArr.splice(i, 1);
            res.json(notesArr);
        };
    };
});
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

