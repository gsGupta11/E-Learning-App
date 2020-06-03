var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var studre = new Schema({
    student:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    teacher:{
        type:String,
        required:true,
    },
});

var StudentReview = mongoose.model("studentreview",studre);

module.exports = StudentReview;