var express = require("express")
var app = express()
var dbConnection = require("./db")
var adminRoutes = require("./routes/adminRoute");
var studentRoutes = require("./routes/studentRoutes")
var teacherRoutes = require("./routes/teacherRoutes")
var bodyParser = require('body-parser');

dbConnection();
// Cross User Access

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {        
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
     }
    return next();
});

app.use(bodyParser.json())
app.use(teacherRoutes);
app.use(studentRoutes);
app.use(adminRoutes);
app.listen(3000,()=>{
    console.log("Listening to 3000");
})