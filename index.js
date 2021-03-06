/**
 * name: index.js
 * author: Christophe Asselin
 * last modified: 2019-01-20
 */

let express = require("express");
var mongoose = require('mongoose');
let app = express();

let routes = require('./routes');

const connectionStr = 'mongodb+srv://shopify:shopify@cluster0-4k2cm.mongodb.net/test?retryWrites=true';
mongoose.connect(connectionStr, { useNewUrlParser: true }, function(err) {
    if(!err){
        console.log("no error!")
    }
});
var db = mongoose.connection;

app.use('/', routes);

const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, function () {
    console.log("app running on port", server.address().port);
});