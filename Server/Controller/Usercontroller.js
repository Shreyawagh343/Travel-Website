const User =require("../Modelu/User.js");
const bcrypt = require( "bcryptjs");

const Singup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "user already exists" })

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                const createuser = await User.create({
                    username,
                    email,
                    password: hash
                })

                await createuser.save()
            });
        });
        res.status(201).json({ message: "user created Successfully"
        })
    } catch (error) {
        console.log("Error : ", error)
        res.status(500).json({ message: " Internal server error", user: {
            _id: createuser.id,
            fullname: createuser.fullname,
            email: createuser.email
        } })
    }
};


module.exports=Singup
