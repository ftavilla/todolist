exports.portal = function(req, res) {
    res.render('login.ejs');
};

exports.login = function(req, res) {
    req.session.loggedIn = true;
    req.session.username = req.body.username;
    console.log(req.session.username);
    res.redirect('/todo');
};