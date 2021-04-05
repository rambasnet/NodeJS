let courses = require('../data/courses.json')

var express = require("express")
var router = express.Router();

router.get("/all", function(req, res, next) {
    res.json(courses);
});

module.exports = router;