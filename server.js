const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./02-Homework/Develop/public/assets/js/logger');
const uuid = require('uuid')
const noteArr = require('./02-Homework/Develop/db/db.json')

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + 'public', 'index.html')));
app.use(express.json());
// app.use(logger);
// route for index file..
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + './develop/public/index.html')) }); // <- the index.js file throws a jquery error for the method forEach() when this is active
// route for GET Notes
app.get('/notes', (req, res) => { res.sendFile(path.join(__dirname + '/public/notes.html')) });

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
    let id = req.params.id;
    for (let i = 0; i < noteArr.length; i++){
        if (id === noteArr[i].id){
            noteArr.splice(i, 1);
            res.json(noteArr);
        };
    };
});
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

//lkj