var express = require("express")
var studentModel = require("../models/student")
var quesModel = require("../models/question")
var ansModel = require("../models/answers")
var List = require("../models/todo")
var TeacherReview = require("../models/teacherreview")
var router = express.Router();
var mongoose = require("mongoose");

router.get("/student",(req,res)=>{
    res.send("Students Routes OKAY");
})

// Sign Up for Students

router.post("/poststudent",(req,res)=>{
    var x= new studentModel({
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        pass:req.body.pass,
        phone:req.body.phone,
    });
    x.save().then(()=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})

// Students Posting Questions
router.post("/postquestion",(req,res)=>{
    var x = new quesModel({
        question:req.body.question,
        username:req.body.username,
        position:req.body.position,
        status:req.body.status,
    });
    // console.log(x)
    x.save().then(()=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})


// Students Posting answer

router.post("/postanswer",(req,res)=>{
    var x = new ansModel({
        askedby:req.body.askedby,
        question:req.body.question,
        answer:req.body.answer,
        username:req.body.username,
        position:req.body.position,
        status:req.body.status,
    });
    x.save().then(()=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})

// Getting all students

router.get("/allstudents",(req,res)=>{
    studentModel.find().then((data)=>{
        res.send(data);
    })
})


// Sign in for student

router.get("/student/:user",(req,res)=>{
    studentModel.findOne({username:req.params.user}).then((data)=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })
})

// get questions for all student (status --> discussion OR quiz)
router.get("/ques/:status",(req,res)=>{
    quesModel.find({status:req.params.status}).then((data)=>{
        res.send(data);
    })
})

// Get question asked by a particular students OR faculty
router.get("/getques/:user",(req,res)=>{
    quesModel.find({username:req.params.user}).then((data)=>{
        res.send(data);
    })
})


// Get ans of students and faculty based on status
router.get("/ans/:status",(req,res)=>{
    ansModel.find({status:req.params.status}).then((data)=>{
        res.send(data);
    })
})

// Get ans given by particular student OR faculty
router.get("/getans/:name",(req,res)=>{
    ansModel.find({username:req.params.name}).then((data)=>{
        res.send(data);
    })
})

// Post todo of a particular student
router.post("/posttodo",(req,res)=>{
    var x = new List({
        username:req.body.username,
        todos:req.body.todos,
    })
    x.save().then(()=>{
        res.send(true);
    }).catch(()=>{
        res.send(false);
    })
})

// Get todos of a particular student
router.get("/gettodo/:user",(req,res)=>{
    List.find({username:req.params.user}).then((data)=>{
        res.send(data);
    })
})

// Delete Todo
router.post("/deletetodo",(req,res)=>{
    List.findOneAndRemove({username:req.body.username,todos:req.body.todos}).then(()=>{
        res.send(true)
    }).catch((err)=>{
        res.send(false)
    })
})

// student post teacher review

router.post("/reviewteacher",(req,res)=>{
    var x= new TeacherReview({
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

// Get teacher Review

router.get("/reviewteacher/:teac",(req,res)=>{
    console.log("here");
    TeacherReview.find({teacher:req.params.teac}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(false);
    })
})

module.exports = router;