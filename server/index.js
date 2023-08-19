const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const pool = require("./config/db");

const app = express();

// middleware 
app.use(cors());
app.use(express.json()); // req.body

// ROUTES

// register and login router 
app.use('/auth', require("./routes/jwtAuth"));

// dashboard 
app.use('/dashboard',require('./routes/dashboard'));

app.get('/', (req,res)=>{
    res.send("hello")
});


// PORT 
const port = process.env.PORT || 8000
app.listen(port, ()=>{console.log(`Your server is listening on ${port}`)})