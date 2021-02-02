const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
const passport = require('passport');
//login
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/register', (req, res) => {
    res.render('register')
})
//register
router.post('/login', (req, res) => {
    passport.authenticate('local',{
        successRedirect : '/dashboard',
        failureRedirect : '/users/login',
        failureFlash : true,
        })(req,res,next);
})
//register post
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    console.log(' Name ' + name + ' email :' + email + ' pass:' + password);
    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields." })
    }
    //pass match?
    if (password !== password2) {
        errors.push({ msg: "Passwords dont match!" });
    }

    //pass length
    if (password.length < 8) {
        errors.push({ msg: 'Password must contain at least 8 characters!' })
    }
    if (errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2
        })
    } else {
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
                            newUser.save()
                                .then((value) => {
                                    console.log(value)
                                    req.flash('success_msg', 'You is registered!')
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
})
module.exports = router;