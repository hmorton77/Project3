const express = require("express");
const mongoose = require("mongoose");
// const router = express.Router();
const app = express();
const bcrypt = require("bcrypt");
const expressEjsLayout = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
var bodyParser = require("body-parser");
const User = require("./models/user");
const PORT = process.env.PORT || 3001;
//EJS
app.set("view engine", "ejs");
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      console.log(email, password);
      console.log("arrived in strat");
      User.findOne({ email: email })
        .then(function (user) {
          console.log(user);
          if (!user) {
            console.log("incorrect username");
            return done(null, false, { message: "Incorrect username." });
          }
          bcrypt.compare(password, user.password).then(function (isMatch) {
            console.log(password, user.password);
            console.log(isMatch);
            if (isMatch) {
              console.log("password match");
              return done(null, user);
            } else {
              console.log("no pass match");
              return done(null, false, { message: "pass incorrect" });
            }
          });
        })
        .catch((err) => console.log(err));
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
//use flash
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
//Routes

app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));

//other routes
console.log("sup");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Stonx"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
