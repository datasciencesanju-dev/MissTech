const express = require('express')
const {userSignUp}=require('../Controllers/userController');


const router=express.Router();

router.post("/signup",userSignUp);
module.exports=router;