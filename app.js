const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
const User = require("./models/user");

//mongoose
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected on port 3000.  open on http://localhost:3000'))
    .catch((err) => console.log(err));

//EJS
app.set('view engine', 'ejs');
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({ extended: false }));
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
    function(email, password, done) {
        console.log("arrived in strat")
      User.findOne({ email: email }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
//use flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})
//Routes

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.listen(3001); 