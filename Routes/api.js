const express = require('express');
const path = require('path');
//Router is an object inside express
const router = express.Router();
// another way to write this is const router = require('express').Router();
const fs = require('fs');
// not sure if I need
//const { getNotes, saveNote, deleteNote } = require('../assets/js/index');
//const notesdata = require('../db/notesdata.json');
//used to attach unique id number to all notes added
//const { v4: uuidv4 } = require('uuid');
//const path = require('path');
//const { note } = require('./db/db.json');

// Load the routes
// router.get('/api/notes',(req,res) => {
//     res.json(notesdata);
// });

// router.post('/notes',(req,res) => {
//     notesdata.addNote(req.body)
//     .then(note => res.json(note));
// });

// router.delete('notes/:id', (req,res) => {
//     notesdata.removeNote(req.params.id)
//     .then(() => res.json({ ok:true}))
// });
// get api notes
router.get('/api/notes',(req,res) => {
    try {
        res.json(notesdata);
    } catch (error) {
        res.status(500).json(error);
    }
})

// post api notes

// function createNewNote(body, notesArray) {
//     const note = body;
//     notesArray.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, './db/db.json'),
//       JSON.stringify({ note: notesArray }, null, 2)
//     );
//     return note;
//   };

//   router.post('/api/notes', (req, res) => {
//     // set id based on what the npm returns
//     req.body.id = uuidv4();
  
//     if (!(req.body)) {
//       res.status(400).send('The note is not properly formatted.');
//     } else {
//       const note = createNewNote(req.body, note);
//       res.json(note);
//     }
//   });

//router.post('/api/notes', (req,res) => {
//     const newnote = {
//         title: req.body.title,
//         text: req.body.text,
//         id: uuidv4()
//     }
//     notesdata.push(newnote);
//     console.log(notesdata);
//     fs.writeFileSync(
//         path.join(__dirname,'./db/db.json'),
//         JSON.strignify9{  },null,2));
// })

// use id for extra credit deletion
// router.get('/api/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
//   });

module.exports = router;