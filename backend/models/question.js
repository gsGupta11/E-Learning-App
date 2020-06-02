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
    position:{
        type:String,     // Student or teacher
        required:true,
    },
    status:{
        type:String,
        required:true,  // to show everyone or quiz
    }
})

var questionSchema = mongoose.model("question",ques);
module.exports = questionSchema;