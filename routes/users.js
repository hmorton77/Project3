const passport = require('passport');
const router = require('express').Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');

//login handle
// router.get('/register', (req, res) => {
//     res.render('register')
// })

//register handle

router.post('/login', function (req, res, next) {
    //console.log(req.body)
    passport.authenticate('local', function (err, user, info) {
        //console.log("authed")
        if (err) { return next(err); }
        if (!user) { return res.json("user not found"); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.json(user);
        });
    })(req, res, next);
});
router.post('/register', (req, res) => {
    console.log(req.body)
    var newUser = req.body
    bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(req.body.password, salt,
            (err, hash) => {
                if (err) throw err;
                //save pass to hash
                newUser.password = hash;
                //save user
                User.create(newUser).then(dbModel => res.json(dbModel))
            }));
    
})
//register post handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    console.log(' Name ' + name + ' email :' + email + ' pass:' + password);
    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" })
    }

    //check if match
    if (password !== password2) {
        errors.push({ msg: "passwords dont match" });
    }

    //check if password is more than 6 characters
    if (password.length < 6) {
        errors.push({ msg: 'password atleast 6 characters' })
    }
    if (errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2
        })
    }
    else {
        //validation passed
        User.findOne({ email: email }).exec((err, user) => {
            console.log(user);
            if (user) {
                errors.push({ msg: 'email already registered' });
                res.render('register', { errors, name, email, password, password2 })
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });

                //hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if (err) throw err;
                            //save pass to hash
                            newUser.password = hash;
                            //save user
                            newUser
                                .save()
                                .then((value) => {
                                    console.log(value)
                                    req.flash('success_msg', 'You have now registered!')
                                    res.redirect('/users/login');
                                })
                                .catch(value => console.log(value));

                        }));
            }
        })
    }
})

//logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Now logged out');
    res.redirect('/users/login');
})
module.exports = router;