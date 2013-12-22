/* This file maps your route matches
 * to functions defined in various
 * controller classes
 */
app = module.parent.exports.app;

/* require your controllers here */
var todoController = require('./controllers/todoController');
var loginController = require('./controllers/loginController');
var errorsController = require('./controllers/errorsController');

//Login
app.get('/', loginController.portal);
app.post('/login', loginController.login);
app.get('/logoff', loginController.logoff);

//Urls
app.all('/*', requireLogin, function(req, res, next){ next();})
app.get('/todo', todoController.home);
app.post('/todo/add/', todoController.add);
app.get('/todo/delete/:id', todoController.delete);

//Errors
app.get('/error404', errorsController.error404);
app.use(function(req, res, next){res.redirect('/error404');});


function requireLogin(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/");
    }
}