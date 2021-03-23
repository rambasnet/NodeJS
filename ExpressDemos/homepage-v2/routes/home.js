var express = require("express")
var router = express.Router()
var path = require("path")

var currentYear = new Date().getFullYear()

router.get("/", function(req, res, next) {
    let context = {
        title: "About",
        currentPage: "index",
        year: currentYear
    }
    res.render("index", context)
})

router.get("/index.html", function(req, res, next) {
    let context = {
        title: "About",
        currentPage: "index",
        year: currentYear
    }
    res.render("index", context)
})

router.get("/index", function(req, res, next) {
    let context = {
        title: "About",
        currentPage: "index",
        year: currentYear
    }
    res.render("index", context)
})

router.get("/teaching", function(req, res, next) {
    let context = {
        title: "Teaching Schedule",
        currentPage: "teaching",
        year: currentYear
    }
    res.render("teaching", context)
})

router.get("/research", function(req, res, next) {
    var context = {
        title: "Research",
        currentPage: "research",
        year: currentYear
    }
    res.render("research", context)
})

router.get("/resources", function(req, res, next) {
    var context = {
        title: "Useful Links",
        currentPage: "resources",
        year: currentYear
    }
    res.render("resources", context)
})

router.get("/contact", function(req, res, next) {
    var context = {
        title: "Contact me",
        currentPage: "contact",
        year: currentYear
    }
    res.render("contact", context)
})

module.exports = router
