var express = require("express")
var router = express.Router()

var title = "Grade Book"

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: title })
})

module.exports = router
