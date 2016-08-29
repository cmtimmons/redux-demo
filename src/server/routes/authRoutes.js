module.exports = function (app, passport) {

  app.get('/logout', function (req, res) {
    req.logout();
  });

  app.post('/login', passport.authenticate('local-login'), function (req, res) {
    res.status(201);
    res.send(req.user);
  });

  app.post('/signup', passport.authenticate('local-signup'), function (req, res) {
    res.status(201).end();
  });
};
 function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.status(401).end();
  };