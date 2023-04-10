const path = require('path');
const router = require('express').Router();

// if user makes a get request using the /notes route handler, then they will be sent to the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// if a user makes a get request that does not match any previous route handlers then the user will be sent to the index.html page
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;