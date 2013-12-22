exports.home = function(req, res) {
    res.render('todoList.ejs', {todolist: req.session.todolist});
};

exports.add = function(req, res) {
    if (req.body.newtodo != '') {
        req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
};

exports.delete = function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
};