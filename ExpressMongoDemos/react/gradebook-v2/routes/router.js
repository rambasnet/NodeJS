var express = require("express")
var router = express.Router()
// https://github.com/dcodeIO/bcrypt.js
var bcrypt = require("bcryptjs")

// https://express-validator.github.io/docs/
const { check, validationResult } = require('express-validator/check')
//const { check } = require("express-validator/check")
const { sanitizeBody } = require("express-validator/filter")

// import models
var User = require("../models/user")
var Course = require("../models/course")
const { MongoError } = require("mongodb")

let title = "Grade Book"

function userLoggedIn(req, res) {
  let user = req.session.user
  if (user) return user
  res.redirect("/login")
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: title })
})

// authenticated page; check if session exists
router.get("/dashboard", (req, res, next) => {
  let user = userLoggedIn(req, res)
    res.render("dashboard", {
      title: "Gradebook Dashboard",
      user: user,
  })
})

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Log in" }) // pug template
})

router.post("/login", function (req, res, next) {
  var email = req.body.email
  var password = req.body.password
  User.findOne({ email: email }, function (err, user) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(user);
    var validUser = false;
    if (user) {
      var hash = user.password;
      validUser = bcrypt.compareSync(password, hash)
    }
    if (validUser) {
      // add user to session
      req.session.user = user
      res.redirect("/dashboard")
    } else {
      let context = {
        title: "Log in",
        errors: [{msg:"Invalid username and/or password"}]
      }
      res.render("login", context)
    }
  })
})

// new user registration
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register an account" })
})

router.post(
  "/register",
  [
    // Validate fields.
    // express-validator
    check("firstName", "First name must not be empty")
      .trim()
      .isLength({ min: 1 })
      .withMessage('must be at least 1 character'),
    check("lastName", "Last name must not be empty.")
      .trim()
      .isLength({ min: 1 }),
    check("email", "Email must not be empty.")
      .trim()
      .isLength({ min: 3 })
      .withMessage('Email must be at least 3 characters long'),
    // email must be valid
    check("email", "Not a valid email.")
      .trim()
      .isEmail(),
    check("password", "Password must be at leat 5 chars long")
      .trim()
      .isLength({ min: 5 }),
    check("password1", "Two passwords do not match")
      .trim()
      .exists()
      .custom((value, { req }) => value === req.body.password),
    // Sanitize all fields.
    sanitizeBody("*")
      .trim()
      .escape()
  ],
  function (req, res, next) {
    // check authentication
    //var user = userLoggedIn(req, res)
    // extract the validation errors from a request
    const errors = validationResult(req)
    // check if there are errors
    //console.error(errors.array())
    if (!errors.isEmpty()) {
      let context = {
        title: "Register",
        errors: errors.array(),
        firstName: req.body.firstName
      }
      res.render("register", context)
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
    req.session.destroy(function () {
      console.log(`user: ${user.email} logged out...`)
    })
  }
  res.redirect("/")
})

/* profile... */
router.get("/profile", function (req, res, next) {
  user = userLoggedIn(req, res)
  res.render("/profile", { title: "Profile", user: user })
})

router.post("/profile", function (req, res, next) {
  // Is a user logged in?
  var user = userLoggedIn(req, res)
  var condition = { _id: user._id }
  var update = {
    email: req.body.email,
    firstName: req.body.fname,
    lastName: req.body.lname
  }
  var options = {}
  User.updateOne(condition, update, options, (err, numAffected) => {
    if (err) throw err
    // project/return all attributes but password.
    User.findById(user._id, '-password', function (err, updateduser) {
      if (err) throw err
      req.session.user = updateduser
      //console.log(updateduser)
      res.render("./private/profile", {
        title: "Profile",
        user: updateduser,
        errors: [{msg: "Profile updated successfully!"}]
      })
    })
  })
})

router.get("/courses", function (req, res, next) {
  // get logged in user
  let user = userLoggedIn(req, res)
  Course.find({user_id: user._id}, (err, courses) => {
    if (err) throw err;
    //console.log(courses)
    res.render("courses", {
      title: "All courses",
      courses: courses,
      errors: []
    })
  });
})

// Individual course page...
// *? optional request parameter
router.get("/course/:id?", function (req, res, next) {
  // get logged in user
  var user = userLoggedIn(req, res)
  var courseID = req.params.id
  if (courseID) {
    console.log(`courseID: ${courseID}`)
    var course = Course.findOne({ _id: courseID }, function (err, course) {
      res.render("./components/course", {
        title: "Update existing course",
        course: course,
        errors: []
      })
    })
  } else {
    res.render("./components/course", {
      title: "Add a new course",
      course: null,
      errors: []
    })
  }
})

// either add new or update existing course
// optional course_id
router.post(
  "/course/:id?",
  [
    // Validate fields.
    check("name", "Short name must not be empty.")
      .trim()
      .isLength({ min: 1 }),
    check("fullName", "Full name must not be empty.")
      .trim()
      .isLength({ min: 1 }),
    check("crn", "CRN must not be empty.")
      .trim()
      .isLength({ min: 1 }),
    // email must be valid
    check("section", "Section must not be empty.")
      .isLength({ min: 1 })
      .trim(),
    // Sanitize fields.
    sanitizeBody("*")
      .trim()
      .escape()
  ],
  function (req, res) {
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
      res.render("./components/course", context)
    } else {
      // create a user document and insert into mongodb collection
      let course = {
        name: req.body.name,
        fullName: req.body.fullName,
        crn: req.body.crn,
        section: req.body.section,
        user_id: user._id
      }
      // check if data is there on console
      console.log(course)
      // check if the form data is for update or new course
      var id = req.params.id
      if (id) {
        // update
        updateCourse(res, id, course)
        let context = {
          title: "Update course",
          errors: [{msg: "Course updated successfully!"}],
          course: course
        }
        res.render("./components/course", context)
      }
      // add new course
      else {
        addCourse(res, course).then((errors) => {
          console.log('Errors: ', errors)
          if (errors && errors.length !== 0) {
            let context = {
              title: "Add a new course",
              errors: errors
            }
            res.render("./components/course", context)
          }
          else {
            res.redirect("/courses")
          }
        })
      }
      // successful - redirect to dashboard
      //res.redirect("/courses")
    }
  }
)

function updateCourse(res, id, course) {
  var condition = { _id: id }
  var option = {}
  var update = {}
  Course.updateOne(condition, course, option, (err, rowsAffected) => {
    if (err) {
      console.log(`caught the error: ${err}`)
      return res.status(500).json(err);
    }
  })
}

async function addCourse(res, course) {
  var c = new Course(course)
  try {
    await c.save();
  }
  catch(e) {
    if (e instanceof MongoError) {
      console.log(`Exception: ${e.message}`)
      if (e.message.includes('duplicate key error'))
        return [{msg: "Duplicate CRN not allowed"}]
      else return []
    }
    else throw e;
  }
}

// either add new or update existing course
router.post("/deletecourse", function (req, res, next) {
  // create a user document and insert into mongodb collection
  console.log(req.body)
  let query = {
    id: req.body.courseID
  }
  // check if data is there on console
  console.log(query)
  Course.deleteOne(query, function (err) {
    if (err) throw err
    else {
      console.log(`Deleted course id: ${query}`)
      res.redirect("/grade")
    }
  })
})

router.get("/addstudent", function (req, res, next) {
  res.send("FIXME...")
})

module.exports = router
