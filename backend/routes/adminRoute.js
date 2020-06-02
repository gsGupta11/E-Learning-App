var express = require("express");
var adminModel = require("../models/admin")
var mongoose = require("mongoose")
var router = express.Router();

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

module.exports = router;