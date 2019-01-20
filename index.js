/**
 * name: app.js
 * author: Christophe Asselin
 * last modified: 2019-01-18
 */

let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require('mongoose');
let app = express();

let routes = require('./routes');

app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/shopifychallenge');
var db = mongoose.connection;

app.use('/', routes);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});