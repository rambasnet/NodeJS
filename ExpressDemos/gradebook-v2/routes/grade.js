var express = require("express")
var router = express.Router()
// https://github.com/dcodeIO/bcrypt.js
var bcrypt = require("bcryptjs")

// https://express-validator.github.io/docs/
const { check, validationResult } = require("express-validator")
const { body } = require("express-validator")

// import models
var User = require("../models/user")
var Course = require("../models/course")

function userLoggedIn(req, res) {
    var user = req.session.user
    if (user) return user
    res.redirect("/grade/login")
}

// authenticated page; check if session exists
router.get("/", (req, res, next) => {
    user = userLoggedIn(req, res)
    Course.find({}, function(error, courses) {
        if (error) throw error
        res.render("./private/dashboard", {
            title: "Gradebook Dashboard",
            user: user,
            courses: courses
        })
    })
})

router.get("/dashboard", (req, res, next) => {
    res.redirect("/grade")
})

router.get("/login", function(req, res, next) {
    res.render("./private/login", { title: "Log in" }) // pug template
})

router.post("/login", function(req, res, next) {
    var email = req.body.email
    var password = req.body.password
    User.findOne({ email: email }, function(err, user) {
        if (err) {
            console.log(err)
            throw err
        }
        var validUser = false
        if (user) {
            var hash = user.password
            validUser = bcrypt.compareSync(password, hash)
        }
        if (validUser) {
            // add user to session
            req.session.user = user
            res.redirect("/grade")
        } else {
            let context = {
                title: "Log in",
                error: "Invalid username and/or password"
            }
            res.render("./private/login", context)
        }
    })
})

// new user registration
router.get("/register", function(req, res, next) {
    res.render("./private/register", { title: "Register for an account" })
})

router.post(
    "/register",
    [
        // Validate fields.
        // express-validator
        check("firstName", "First name must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        check("lastName", "Last name must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        check("email", "Email must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        // email must be valid
        check("email", "Not a valid email.")
            .isEmail()
            .trim(),
        check("password", "Password must be at leat 5 chars long")
            .isLength({ min: 5 })
            .trim(),
        check("password1", "two passwords do not match")
            .exists()
            .custom((value, { req }) => value === req.body.password),
        // Sanitize all fields.
        body("*")
            .trim()
            .escape()
    ],
    function(req, res, next) {
        // check authentication
        var user = userLoggedIn(req, res)
        // extract the validation errors from a request
        const errors = validationResult(req)
        // check if there are errors
        if (!errors.isEmpty()) {
            let context = {
                title: "Register",
                errors: errors.array()
            }
            res.render("./private/register", context)
        } else {
            // create a user document and insert into mongodb collection
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            })
            //console.log(user)
            user.save(err => {
                if (err) {
                    return next(err)
                }
                // successful - redirect to dashboard
                // add update user to session
                console.log('Register successful:', user)
                //req.session.user = user
                //res.redirect("/grade")
                res.redirect('/login')
            })
        }
    }
)

router.get("/logout", (req, res, next) => {
    var user = req.session.user
    if (user) {
        req.session.destroy(function() {
            console.log(`user: ${user.email} logged out...`)
        })
    }
    res.redirect("/")
})

/* profile... */
router.get("/profile", function(req, res, next) {
    user = userLoggedIn(req, res)
    res.render("./private/profile", { title: "Profile", user: user })
})

router.post("/profile", function(req, res, next) {
    // Is a user logged in?
    var user = userLoggedIn(req, res)
    var condition = { _id: user._id }
    var update = {
        email: req.body.email,
        firstName: req.body.fname,
        lastName: req.body.lname
    }
    var options = {}
    User.update(condition, update, options, (err, numAffected) => {
        if (err) throw err
        // project/return all attributes but password.
        User.findById(user._id, '-password', function(err, updateduser) {
            if (err) throw err
            req.session.user = updateduser
            //console.log(updateduser)
            res.render("./private/profile", {
                title: "Profile",
                user: updateduser,
                msg: "Profile updated successfully!"
            })
        })
    })
})

// course...
// *? optional request parameter
router.get("/course/:id?", function(req, res, next) {
    // get logged in user
    var user = userLoggedIn(req, res)
    var courseID = req.params.id
    if (courseID) {
        console.log(`courseID: ${courseID}`)
        var course = Course.findOne({ _id: courseID }, function(err, course) {
            res.render("./private/course", {
                title: "Update existing course",
                course: course,
                errors: []
            })
        })
    } else {
        res.render("./private/course", {
            title: "Add a new course",
            errors: []
        })
    }
})

// either add new or update existing course
router.post(
    "/course/:id?",
    [
        // Validate fields.
        check("name", "Short name must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        check("fullName", "Full name must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        check("crn", "CRN must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        // email must be valid
        check("section", "Section must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        // Sanitize fields.
        body("*")
            .trim()
            .escape()
    ],
    function(req, res, next) {
        // check authentication
        var user = userLoggedIn(req, res)
        // extract the validation errors from a request
        const errors = validationResult(req)
        // check if there are errors
        if (!errors.isEmpty()) {
            let context = {
                title: "Add a new course",
                errors: errors.array()
            }
            res.render("./private/course", context)
        } else {
            // create a user document and insert into mongodb collection
            let course = {
                name: req.body.name,
                fullName: req.body.fullName,
                crn: req.body.crn,
                section: req.body.section
            }
            // check if data is there on console
            console.log(course)
            // check if the form data is for update or new course
            var id = req.params.id
            if (id)
                // update
                updateCourse(res, id, course)
            // add new course
            else addCourse(res, course)
            // successful - redirect to dashboard
            res.redirect("/grade")
        }
    }
)

function updateCourse(res, id, course) {
    var condition = { _id: id }
    var option = {}
    var update = {}
    Course.update(condition, course, option, (err, rowsAffected) => {
        if (err) {
            throw err
        }
    })
}

function addCourse(res, course) {
    var c = new Course(course)
    c.save(err => {
        if (err) {
            return next(err)
        }
    })
}

// either add new or update existing course
router.post("/deletecourse", function(req, res, next) {
    // create a user document and insert into mongodb collection
    console.log(req.body)
    let query = {
        id: req.body.courseID
    }
    // check if data is there on console
    console.log(query)
    Course.deleteOne(query, function(err) {
        if (err) throw err
        else {
            console.log(`Deleted course id: ${query}`)
            res.redirect("/grade")
        }
    })
})

router.get("/addstudent", function(req, res, next) {
    res.send("FIXME...")
})

module.exports = router
