/* This file maps your route matches
 * to functions defined in various
 * controller classes
 */
app = module.parent.exports.app;

/* require your controllers here */
var todoController = require('./controllers/todoController');

app.get('/todo', todoController.home);
app.post('/todo/add/', todoController.add);
app.get('/todo/delete/:id', todoController.delete);
app.use(function(req, res, next){
    res.redirect('/todo');
});