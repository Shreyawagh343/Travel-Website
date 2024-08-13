const express = require("express")
const router = express.Router()
const Singup = require("../Controller/Usercontroller.js")

router.post("/register",Singup)



module.exports=router;