var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var ques = new Schema({
    question:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        required:true,
    },
    postion:{
        type:String,     // Student or teacher
        required:true,
    }
})

var questionSchema = mongoose.model("question",ques);
module.exports = questionSchema;