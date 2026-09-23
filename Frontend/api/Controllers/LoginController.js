const bcrypt = require("bcryptjs");
const userModel = require("../Models/UserModel");
const loginModel=require("../Models/LoginModel");

const userLogin = async (req, res) => {
    try {

        const { email, password } = req.body;


        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const user = await userModel.findOne({
            email: email.toLowerCase()
        });


        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const loginRecord = new loginModel({
            userId: user._id,
            email: user.email
        });

        await loginRecord.save();

        return res.status(200).json({
            success: true,
            message: "Login successful",

            user: {
                id: user._id,
                name: user.name,
                phone: user.phone,
                email: user.email
            }
        });

    } catch (error) {

        console.log("Login Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    userLogin
};