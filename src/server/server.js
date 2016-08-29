module.exports = {
  app: function () {
    const express  = require('express');
    const app      = express();
    const api      = express();
    const port     = process.env.PORT || 8080;
    const mongoose = require('mongoose');
    const passport = require('passport');
    const cookieParser = require('cookie-parser');
    const bodyParser   = require('body-parser');
    const session      = require('express-session');
    const User = require('./models/user');
  
    
    mongoose.connect('mongodb://localhost/flow-app');
    require('./config/passport')(passport); 

    app.use(cookieParser()); 
    app.use(bodyParser.json()); 

    app.use(session({ secret: 'thisisademo' })); 
    app.use(passport.initialize());
    app.use(passport.session()); 

    // routes ======================================================================
    var authRoutes = express.Router();  
    require('./routes/authRoutes.js')(authRoutes, passport);

    app.use('/api/auth/', authRoutes);

    return app
  }
}




