var express = require("express")
var studentModel = require("../models/student")
var quesModel = require("../models/question")
var ansModel = require("../models/answers")
var List = require("../models/todo")
var teacherModel = require("../models/teacher")


var router = express.Router();
var mongoose = require("mongoose");

router.get("/teacher",(req,res)=>{
    res.send("Teachers Routes OKAY");
})


router.post("/postteacher",(req,res)=>{
    var x= new teacherModel({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        pass:req.body.pass,
        phone:req.body.phone,
        subject:req.body.subject,
    });
    x.save().then(()=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})

router.get("/teacher/:id",(req,res)=>{
    teacherModel.findOne({username:req.params.user}).then((data)=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})

module.exports = router;