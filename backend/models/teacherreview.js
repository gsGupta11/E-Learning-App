var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var teacre = new Schema({
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

var TeacherReview = mongoose.model("teacherreview",teacre);

module.exports = TeacherReview;