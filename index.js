/**
 * name: app.js
 * author: Christophe Asselin
 * last modified: 2019-01-20
 */

let express = require("express");
let app = express();

let routes = require('./routes');

app.use('/', routes);

var server = app.listen(3000, function () {
    console.log("app running on port", server.address().port);
});