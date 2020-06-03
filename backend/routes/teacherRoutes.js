var express = require("express")
var studentModel = require("../models/student")
var quesModel = require("../models/question")
var ansModel = require("../models/answers")
var List = require("../models/todo")
var teacherModel = require("../models/teacher")
var ReviewStudent = require("../models/studentreview")

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

// Teacher Login    

router.get("/teacher/:username",(req,res)=>{
    teacherModel.findOne({username:req.params.username}).then((data)=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})


// teacher post student review

router.post("/reviewstudent",(req,res)=>{
    var x= new ReviewStudent({
        student:req.body.student,
        review:req.body.review,
        teacher:req.body.teacher,
    });
    x.save().then(()=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})

// Get student Review
router.get("/reviewstud/:stud",(req,res)=>{
    ReviewStudent.find({student:req.params.stud}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(false);
    })
})


module.exports = router;