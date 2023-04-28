const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dog_name: {
    type: String,
    required:true
},
dog_year: {
    type: Number,
    required:true,
    min:[1,"dog year should be greater than 1"],
    max:[20,"dog year should  less than 20 "],
    validate:{
        validator:function(value){
            return "Quantity must be between 1 to 20 and no negatives values "
        },
    }
},
dog_birth: {
    type: String,
    required:true
}

})
module.exports = mongoose.model("dog",dogSchema)