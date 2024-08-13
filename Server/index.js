 const express = require("express")
 const app= express();
 const dotenv = require("dotenv")
 dotenv.config()
 const cors = require("cors");
const mongoose = require("mongoose");
const UserRouter = require("./Router/user.router.js")
const loginRouter = require("./Router/login.route.js")

 app.use(cors())
 app.use(express.json())
 const Port = process.env.Port || 3000
 const MongoDBURI= process.env.MongoDBURI;
try {
    mongoose.connect(MongoDBURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("connected successfully")
} catch (error) {
    console.log("Error",error)
}
app.use("/user",UserRouter)
app.use("/userlogin",loginRouter)
app.listen(Port,()=>{
    console.log(`server is working on ${Port}`)
})