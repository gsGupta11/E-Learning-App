var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var ans = new Schema({
    answer:{
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

var answerSchema = mongoose.model("answers",ans);
module.exports = answerSchema;