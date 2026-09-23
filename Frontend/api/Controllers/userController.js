const bcrypt=require('bcryptjs');

const userModel=require('../Models/UserModel');

const userSignUp=async(req,res)=>{
    try{
        const{name,email,phone,password}=req.body;

    if(!name || !email || !phone || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        });
    }

    const existingUser=await userModel.findOne({
        email:email.toLowerCase()
    });

    if(existingUser){
        return res.status(409).json({
            success:false,
            message:"User already exist with the same mail-ID"
        });
    }

    const ccrryy=await bcrypt.hash(password,15);

    const user=new userModel({
        name,
        phone,
        email:email.toLowerCase(),
        password:ccrryy
    });

    await user.save();

    res.status(201).json({
        success:true,
        message:"Account created successfully",

        user:{
        id:user._id,
        name:user.name,
        phone:user.phone,
        email:user.email
    }
    });

    
}
catch(error){
    console.log("SignUp error", error);
    res.status(500).json({
        success:false,
        message:"Internal server error"
    });
}
};
module.exports={userSignUp};