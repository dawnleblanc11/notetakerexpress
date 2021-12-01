
const express = require('express');
const path = require('path');
//Router is an object inside express
const router = express.Router();

// render html home page
// req from front end
// res from backend
// check relative path if not working for some reason

// path for notes
router.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});
// send static assets to page

//default route
router.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;