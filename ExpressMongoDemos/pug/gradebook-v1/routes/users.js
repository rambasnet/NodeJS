var express = require("express")
var router = express.Router()

var User = require("../models/user")

/* GET users listing. */
router.get("/profile", function(req, res, next) {
    user = req.session.user
    if (user) res.render("profile", { title: "Profile", user: user })
    else res.redirect("/login")
})

router.post("/profile", function(req, res, next) {
    var user = req.session.user
    if (!user) res.redirect("/login")
    console.log('body = ', req.body)
    var conditions = { _id: user._id }
    var update = {
        email: req.body.email,
        firstName: req.body.fname,
        lastName: req.body.lname
    }
    var options = {}
    User.updateOne(conditions, update, options, (err, numAffected) => {
        if (err) throw err
        // mongoose query projection; include all attributes but password
        // https://mongoosejs.com/docs/api.html#query_Query-projection
        User.findById(user._id, '-password', function(err, updateduser) {
            if (err) throw err
            req.session.user = updateduser
            //console.log(updateduser)
            // check if request is AJAX
            if (req.xhr)
            {
                // send json data
                res.json({msg: 'Profile updated successfully using AJAX!',
                    user: updateduser
                });
            }
            // if regular post render the whole profile.pug
            else res.render("profile", {
                    title: "Profile",
                    user: updateduser,
                    msg: "Profile updated successfully!"
                });
        })
    })
})

module.exports = router
