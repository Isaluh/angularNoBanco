const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
var bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(bodyParser.json()); 
app.use('/user', userRoute);

module.exports = app;
