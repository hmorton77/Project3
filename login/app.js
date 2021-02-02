const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

require("./config/passport")(passport)

//mongoose
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected,,'))
    .catch((err) => console.log(err));
//express ejs
app.set('view engine', 'ejs');
app.use(expressEjsLayout);
app.use(express.urlencoded({ extended: false }));
//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//use flash
app.use(flash());
app.use((req, res, next) => {
    passport.authenticate('local',{
    successRedirect : '/dashboard',
    failureRedirect : '/users/login',
    failureFlash : true,
    })(req,res,next);
    })
//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
//port
app.listen(3000); 