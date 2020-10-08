const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', '.\public\assets\js\index.js'))
// });

app.use(express.static(path.join(__dirname, 'public')))


// route
app.get('/api/notes', (req, res) => {
    res.json(notes)
});


app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

