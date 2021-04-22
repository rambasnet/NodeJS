const { ObjectId } = require("bson")
var mongoose = require("mongoose")

var Schema = mongoose.Schema

var CourseSchema = new Schema({
    user_id: { type: ObjectId, required: true },
    name: { type: String, required: true, max: 30 },
    fullName: { type: String, required: true, max: 30 },
    crn: { type: Number, required: true, unique: true, dropDups: true },
    section: { type: Number, required: true }
})

// Export model
module.exports = mongoose.model("Course", CourseSchema, "courses")
