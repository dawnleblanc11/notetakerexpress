const fs = require('fs');
const express = require('express');
const htmlroutes = require('./Routes/html');
const apiroutes = require('./Routes/api');
const noteData = require('./db/db.json');

const PORT = 3001;
// const PORT = process.env.PORT || 3001;
const app = express();
// TODO: Initialize app variable


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// picks up other files it might need to run
app.use(express.static('public'));

app.use("/", htmlroutes);
app.use('/api', apiroutes);
// TODO: Create a route for a GET request that will return the content of the `db.json` file
//app.get('/api/notes', (req, res) => res.json(noteData));

// Note sure what these do or if they are needed
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   }); 
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });
//  
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});

