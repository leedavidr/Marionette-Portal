// DEPENDENCIES
// ============
require('./server/config/config');

var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.configure(function () {
	server.use(express.logger()); 
    server.use(express["static"](__dirname + "/public"));
    server.use(express.bodyParser());
    server.use(express.methodOverride());
    server.use(server.router);

    server.use(express.errorHandler({
        dumpExceptions:true,
        showStack:true

    }));
});

require('./server/config/routes')(server);


// SERVER
// ======

// Start Node.js Server
http.createServer(server).listen(port);

console.log('Welcome to Marionette-Require-Boilerplate!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Marionette');