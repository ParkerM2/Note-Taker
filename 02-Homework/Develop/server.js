const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const logger = require('./public/assets/js/logger')
app.use(logger);

// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());



// route for GET Notes
app.get('/notes', (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname + '/public', 'notes.html'))
    // res.json(notes)
});


app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

