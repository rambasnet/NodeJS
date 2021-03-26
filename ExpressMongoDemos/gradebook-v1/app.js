var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var session = require("express-session")

// two routers are used
var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")

var app = express()

// Set up mongoose connection
var mongoose = require("mongoose")
var mongo_db_url = "mongodb://localhost:27017/gradebook"
var mongoDB = process.env.MONGODB_URI || mongo_db_url
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// handles server side sessions
app.use(session({ 
    secret: "fd83rndfp;353laf;343some scret!",
    name: 'SESSION_ID',
    resave: true,
    saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)

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
    res.render("error")
})

module.exports = app
