var mongoose = require("mongoose")

var Schema = mongoose.Schema

var CourseSchema = new Schema({
    name: { type: String, required: true, max: 30 },
    fullName: { type: String, required: true, max: 30 },
    crn: { type: Number, required: true },
    section: { type: Number, required: true }
})

// Export model
module.exports = mongoose.model("Course", CourseSchema, "courses")
