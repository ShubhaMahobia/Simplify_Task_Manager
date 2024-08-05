const router = require('express').Router();
const user = require('../models/user');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Sign Up - Proccess
exports.signup = async (req, res) => {
    try {
     const { userName, email, password } = req.body;
    //Here we are checking if the user has entered all the fields
    if(!userName || !email || !password){
        return res.status(400).json({error: "Please fill all the fields"});
    }
    //Here we are checking if the user already exists
    const existingUser = await User.findOne({userName: userName});
    if(existingUser){
        return res.status(400).json({success: false,error: "Username already exists"});
    }
    //Here we are checking if the Username/password is atleast 6 characters long
    if(password.length < 6 || userName.length < 4){
        return res.status(400).json({success: false,error: "Username/Password must be atleast 6 characters long"});
    }
    //Here we are checking if the email is valid
    const existingEmail = await User.findOne({email: email});
    if(existingUser){
        return res.status(400).json({success: false,error: "Email already exists"});
    }
    //Hashing the password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //Creating a new user
    const newUser = new User({
        userName,
        email,
        password: passwordHash
    });
    await newUser.save();


    return res.status(200).json({success: true, message: "User created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
};

//Login - Proccess
exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        //Here we are checking if the user has entered all the fields
        if(!userName || !password){
            return res.status(400).json({error: "Please fill all the fields"});
        }
        //Here we are checking if the user exists
        const existingUser = await User.findOne({userName: userName});
        if(!existingUser){
            return res.status(400).json({success: false,error: "Invalid Username/Password"});
        }
        //Here we are checking if the password is correct
        bcrypt.compare(password, existingUser.password, (err, isMatch) => {
            if(err){
                return res.status(400).json({success: false,error: "Invalid Username/Password"});
            }
            if(!isMatch){
                return res.status(400).json({success: false,error: "Invalid Username/Password"});
            }
            const token = jwt.sign({id: existingUser._id}, 'ndoiawnuonwuonq', {expiresIn: "3d"});
            return res.status(200).json({success: true, message: "User logged in successfully", token: token});
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,error: "Internal Server Error"});
    }
};