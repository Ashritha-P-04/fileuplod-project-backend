var express = require('express');
var cors = require('cors');
var bodyparser = require("body-parser");
var mongoose = require('mongoose');
var todo = require("./model/todo.model");

var app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://akshaya:mongo123@cluster0.7muo0.mongodb.net/akshaya');
    
app.listen(5910, () => {
    console.log('Server is running on port 5910');
  });