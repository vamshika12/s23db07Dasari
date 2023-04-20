const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dog_name: String,
dog_year: Number,
dog_birth: String
})
module.exports = mongoose.model("dog",dogSchema)