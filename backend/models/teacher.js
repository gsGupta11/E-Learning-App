var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var teach = new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    pass:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    }
})

var TeacherUser = mongoose.model("teacher",teach)
module.exports = TeacherUser;