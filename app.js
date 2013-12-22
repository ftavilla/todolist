var express = require('express');

var app = module.exports = express();
var port;

// Check node_env, if not set default to development
process.env.NODE_ENV = (process.env.NODE_ENV || "development");

var createToDoList = function(req, res,  next) {
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next();
}

// Configuration, defaults to ejs as the view engine
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.cookieParser());
    app.use(express.session({secret: 'todotopsecret'}));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
    app.use(createToDoList);
    app.use(app.router);
});

/*
 * This section is for environment specific configuration
 */
app.configure('development', function(){
    port = 8080;
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    port = 80;
    app.use(express.errorHandler());
});

app.listen(port, function(){
    console.log("Express server listening on port %s in %s mode", port, app.settings.env);
});

/*
 * Exports the express app for other modules to use
 * all route matches go the routes.js file
 */
module.exports.app = app;
routes = require('./routes');