import { Radio } from './routes/radio';
import * as bodyParser from "body-parser";
import * as express from "express";
// import * as path from "path";
import fs = require('fs');

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
  let radio = require('./routes/radio');

  let radioObj : Radio = new Radio();
  return radioObj.get(req, res);
});

// catch 404 and forward to error handler
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    var error = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
