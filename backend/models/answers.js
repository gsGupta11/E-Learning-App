var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var ans = new Schema({
    askedby:{
        type:String,
        required:true,
    },
    question:{
        type:String,
        required:true,
    },
    answer:{
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

var answerSchema = mongoose.model("answers",ans);
module.exports = answerSchema;