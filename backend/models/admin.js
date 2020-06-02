var mongoose = require("mongoose")
var Schema = mongoose.Schema

var adm = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

var adminModel = mongoose.model("admin",adm);
module.exports = adminModel;