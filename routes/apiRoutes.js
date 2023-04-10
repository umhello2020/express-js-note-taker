const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');


// this will retrieve the notees
router.get('/notes', (req,res) => {
    res.json(notes);
});

// posting the newly created note to the db.json file and assigning a random id to the new note
router.post('/notes', (req, res) => {
    req.body.id = Math.floor(Math.random()*1000000);
    notes.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
})

// grabbing the id from the specific note and removing from the db.json file
router.delete('/notes/:id', (req,res) => {

    for (let i = 0; i < notes.length; i++) {
        if (req.params.id == notes[i].id) {
            notes.splice(i,1);
        }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
})

module.exports = router;