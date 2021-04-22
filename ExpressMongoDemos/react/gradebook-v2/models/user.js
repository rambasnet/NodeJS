var mongoose = require("mongoose")

var Schema = mongoose.Schema

var UserSchema = new Schema({
    email: { type: String, required: true, max: 100, required: true, dropDups: true },
    password: { type: String, required: true, max: 100 },
    firstName: { type: String, required: false, max: 30 },
    lastName: { type: String, required: false, max: 30 }
})

// Export model
module.exports = mongoose.model("User", UserSchema, "users")
