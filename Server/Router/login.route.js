const express = require("express")
const router = express.Router()
const login = require("../Controller/logincontroller.js")

router.post("/login",login)



module.exports=router;