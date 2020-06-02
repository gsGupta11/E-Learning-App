var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var stu = new Schema({
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
})

var StudentUser = mongoose.model("student",stu)
module.exports = StudentUser;