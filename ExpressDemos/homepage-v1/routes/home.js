var express = require("express")
var router = express.Router()
var path = require("path")

router.get("/", function(req, res, next) {
    //res.send(path.join(__dirname + "/../views/index.html"))
    res.sendFile(path.join(__dirname + "/../views/index.html"))
})

router.get("/index.html", function(req, res, next) {
    //res.send(path.join(__dirname + "/../views/index.html"))
    res.sendFile(path.join(__dirname + "/../views/index.html"))
})

router.get("/teaching.html", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../views/teaching.html"))
})

router.get("/research.html", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../views/research.html"))
})

router.get("/resources.html", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../views/resources.html"))
})

router.get("/contact.html", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../views/contact.html"))
})

module.exports = router
