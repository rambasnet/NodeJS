let express = require("express")
let app = express()
const port = 9999

// This responds to GET request to home page
app.get("/", function(req, res) {
    console.log("Got a GET request for the homepage")
    res.send("Hello GET")
})

// This responds to a POST request for the homepage
app.post("/", function(req, res) {
    console.log("Got a POST request for the homepage")
    res.send("Hello POST")
})

app.get("/del_user", function(req, res) {
    res.send("GET del_user route")
})

// This responds to a DELETE request for the /del_user page.
app.delete("/del_user", function(req, res) {
    console.log(`Got a DELETE request for ${req.originalUrl}`)
    res.send("Hello DELETE")
})

// This responds to a GET request for the /current_user page.
app.get("/current_user", function(req, res) {
    var path = req.originalUrl
    console.log(`Got a GET request for ${path}`)
    res.send(`Hello ${path}`)
})

// This responds to a GET request for the /list_user page.
app.get("/list_user", function(req, res) {
    var path = req.originalUrl
    console.log(`Got a GET request for ${path}`)
    res.send(`Hello ${path}`)
})

// path with regular expression
// This responds a GET request for ab*cd, ab[any character]cd, e.g. ab123cd, abcd, abbbbcd, and so on
app.get("/ab*cd", function(req, res) {
    var path = req.originalUrl
    console.log(`Got a GET request for ${path}`)
    console.log(req)
    res.send(`${path} Page Pattern Matched with /ab*cd`)
})

// path with regular expression
// This responds a GET request for ab*cd, ab[any character]cd, e.g. ab123cd, abcd, abbbbcd, and so on
app.get("/hello", function(req, res) {
    var path = req.originalUrl
    console.log(`Got a GET request for ${path}`)
    res.send(`<h1>Hello there...</h1>`)
})

let server = app.listen(port, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})
