const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');

// code for all CORP errors in the console
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }
)

// Database Connection function called from db.js
mongoDB();

app.get('/', (req, res) => {
    res.send('Backend server is running here for Webcart')
})

app.listen(port, ()=>{
    console.log(`We are listening on port ${port}`)
})