var mongoose = require("mongoose")

makeConnection = () => {
    mongoose.connect("mongodb+srv://gsGupta11:Gauri12345@cluster0-nxuix.mongodb.net/E-Learning");

    mongoose.connection.once("open", () => {
        console.log("Connection With Db Made");
    }).on("error", (error) => {
        console.log("Error: ", error);
    })
}


module.exports = makeConnection;