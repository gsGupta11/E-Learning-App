var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    task:{
        type:String,
    }
});

var todolist = new Schema({
    username:{
        type:String,
        required:true,
    },
    todos:[todoSchema],
});

var Lists = mongoose.model("todo",todolist);

module.exports = Lists;