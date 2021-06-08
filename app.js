var express = require('express');
var logger = require('morgan');
//var cors = require('cors');
var medicinesRouter = require('./routes/medicines');


var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
//app.use(cors());


app.use('/api/medicines', medicinesRouter);


module.exports = app;
