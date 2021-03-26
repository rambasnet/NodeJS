var express = require("express")
var router = express.Router()
// https://express-validator.github.io/docs/
const { check, validationResult } = require("express-validator/check")
const { sanitizeBody } = require("express-validator/filter")

var User = require("../models/user")

var title = "A Grade Book App"

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: title })
})

router.get("/login", function(req, res, next) {
    res.render("login", { title: "Log in" })
})

router.post("/login", function(req, res, next) {
    let email = req.body.email
    let password = req.body.password
    // mongoose query projection; include all attributes but password
    // https://mongoosejs.com/docs/api.html#query_Query-projection
    User.findOne({ email: email, password: password }, '-password', function(err, user) {
        if (err) {
            console.log(err)
            throw err
        }
        console.log(user)
        if (!user) {
            let context = {
                title: "Log in",
                error: "Invalid username and/or password"
            }
            res.render("login", context)
        } else {
            // add user to session
            req.session.user = user
            res.redirect("/dashboard")
        }
    })
})

router.get("/signup", function(req, res, next) {
    res.render("signup", { title: "Sign up" })
})

router.post(
    "/signup",
    [
        // Validate fields.
        check("email", "Email must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        // email must be valid
        check("email", "Not a valid email.")
            .isEmail()
            .trim(),
        check("password", "Password must be at least 5 chars long")
            .isLength({ min: 5 })
            .trim(),
        check("password1", "two passwords do not match")
            .exists()
            .custom((value, { req }) => value === req.body.password),
        // Sanitize fields.
        sanitizeBody("*")
            .trim()
            .escape()
    ],
    function(req, res, next) {
        // extract the validation errors from a request
        const errors = validationResult(req)
        // check if there are errors
        if (!errors.isEmpty()) {
            let context = {
                title: "Sign up",
                errors: errors.array()
            }
            res.render("signup", context)
        } else {
            // create a user document and insert into mongodb collection
            let user = new User({
                email: req.body.email,
                password: req.body.password
            })
            console.log(user)
            user.save(err => {
                if (err) {
                    return next(err)
                }
                // successful - redirect to login page
                res.redirect("/login")
            })
        }
    }
)

// authenticated page; check if session exists
router.get("/dashboard", (req, res, next) => {
    var user = req.session.user
    if (user)
        res.render("dashboard", { title: "All Students Grades", user: user })
    else res.redirect("/login")
})

router.get("/logout", (req, res, next) => {
    var user = req.session.user
    if (user) {
        req.session.destroy(function () {
            console.log(`user: ${user.email} logged out...`)
        })
    }
    res.redirect("/login")
})

module.exports = router
