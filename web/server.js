/*
 * A simple express server designed to do server side rendering.
 */

// Require express dependencies
var Express = require('express');
var server = Express();



// Get all static files
server.use('/assets', express.static(__dirname + '../assets'));
server.use('/webassets', express.static(__dirname + '/webassets'))

// Server side rendering of components
server.use(function(req, res, next) {

});

var port = process.env.PORT || 3000;
server.listen(port, () => console.log("Listening on port " + port));
