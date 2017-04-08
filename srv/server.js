"use strict";
exports.__esModule = true;
var radio_1 = require("./routes/radio");
var bodyParser = require("body-parser");
var express = require("express");
var express = require('express');
var app = express();
//mount json form parser
app.use(bodyParser.json());
//mount query string parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist'));
app.get('/api/radio', function (req, res) {
    // fs.readFile('./srv/resource/teste.txt', 'utf8', (err, data) => {
    //   if (err) data = err.message;
    //   res.json({msg:data});
    // });
    var radio = require('./routes/radio');
    var radioObj = new radio_1.Radio();
    return radioObj.get(req, res);
});
// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
    var error = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.listen(3030, function () {
    console.log('Example app listening on port 3030!');
});
