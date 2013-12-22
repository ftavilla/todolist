/* This file maps your route matches
 * to functions defined in various
 * controller classes
 */
app = module.parent.exports.app;

/* require your controllers here */
var todoController = require('./controllers/todo');

app.get('/todo', todoController.home);
app.post('/todo/ajouter/', todoController.add);
app.get('/todo/supprimer/:id', todoController.delete);
app.use(function(req, res, next){
    res.redirect('/todo');
});