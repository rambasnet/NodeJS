var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var session = require("express-session")

// Set up mongoose connection
var mongoose = require("mongoose")
var mongo_db_url = "mongodb+srv://db-user:KHcUrgTAm5QkhHmS@cluster0.qdxhi.mongodb.net/gradebook?retryWrites=true&w=majority"
var mongoDB = process.env.MONGODB_URI || mongo_db_url
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

var publicRouter = require("./routes/public")
var privateRouter = require("./routes/grade")

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// handles server side sessions
app.use(session({ 
    secret: "fd83rndfp;353laf;343someasdfscadsfret!", 
    resave: true,
    name: 'SESSION_ID',
    saveUninitialized: true }))

app.use(express.static(path.join(__dirname, "public")))

app.use("/", publicRouter)
app.use("/grade", privateRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render("error", {title: "Error"})
})

module.exports = app
