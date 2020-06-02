var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var todolist = new Schema({
    username:{
        type:String,
        required:true,
    },
    todos:{
        type:String,
        required:true,
    },
});

var Lists = mongoose.model("todo",todolist);

module.exports = Lists;