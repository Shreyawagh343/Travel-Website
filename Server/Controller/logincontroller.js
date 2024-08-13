 const User = require("../Modelu/User.js")
 const bcrypt = require( "bcryptjs");

 const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        const user = await User.findOne({ email})
         const isMatch = await bcrypt.compare(password,
            user.password);
        if(!user || !isMatch){
            return res.status(500).json({message:" Invalid username or password"})
        }
        else {
            return res.status(200).json({
                message: "you can login",
                user: {
                    _id: user.id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        }
        
    } catch (error) {
        console.log("Error:  ", error)
        res.status(500).json({ message: " Internal server error" })
    }
}

module.exports=login