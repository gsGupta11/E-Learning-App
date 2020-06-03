var express = require("express");
var adminModel = require("../models/admin")
var mongoose = require("mongoose")
var router = express.Router();
var TeacherModel = require("../models/teacher")
var StudentModel = require("../models/student")
mongoose.set('useFindAndModify', false);
router.get("/admin",(req,res)=>{
    res.send("Admin Routes OKAY");
})

router.post("/addadmin",(req,res)=>{
    var x = new adminModel({
        username:req.body.username,
        password:req.body.password,
    })

    x.save().then(()=>{
        res.send(true);
    }).catch((err)=>{
        res.send(false);
    })

})

router.get("/getadmin",(req,res)=>{
    adminModel.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})

// Delete Teacher and Student --> Just send username
router.post("/deleteteacher",(req,res)=>{
    console.log(req.body.username)
    TeacherModel.findOneAndDelete({username:req.body.username}).then((data)=>{
        res.send(true)
    }).catch((err)=>{
        res.send(false)
    })
})
router.post("/deletestudent",(req,res)=>{
    StudentModel.findOneAndRemove({username:req.body.username}).then(()=>{
        res.send(true)
    }).catch((err)=>{
        res.send(false)
    })
})
module.exports = router;