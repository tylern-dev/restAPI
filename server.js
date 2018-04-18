const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5500;
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
require('./config/dbConnection')(mongoose);


//route imports
const userRoutes = require('./api/routes/userRoutes');

//routes
app.use('/', userRoutes);


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From my Express' });
});


app.listen(PORT, ()=> {
  console.log(`App running on port ${PORT}`)
})