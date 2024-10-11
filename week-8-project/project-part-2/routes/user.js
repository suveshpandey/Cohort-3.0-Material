const express = require('express');
const {userModel, courseModel} = require('../db')
const {userSignupAuth, userSigninAuth} = require('../middlewares/userAuth');
const {purchaseModel} = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config');

const Router = express.Router;
const userRouter = Router();

userRouter.post('/signup', userSignupAuth, async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    try{
        await userModel.create({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        })
        res.status(201).json({
            message: "User signed up successfully."
        })
    }
    catch(error){
        if(error.name == 'ValidationError'){
            return res.status(400).json({
                message: "Validation error, please provide all the fields."
            })
        }
        else return res.status(500).json({
            message: "Internal server error."
        })
    }
})


userRouter.post('/signin', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: email,
        password: password
    });
    if(!user){
        res.status(401).json({message: "Invalid credentials."});
    }
    else{
        const token = jwt.sign(
            {id : user._id},
            JWT_USER_PASSWORD
        )
        res.status(200).json(
            {
                message: "User signed in successfully.",
                token: token
            }
        );
    }
});


userRouter.get('/show-purchases', userSigninAuth , async (req, res)=>{
    const userId = req.userId;

    const purchases = await purchaseModel.find({userId});
    
    if(purchases.length == 0){
        return res.status(404).json({message: "You have not purchased any course yet."});
    }
    else{
        const courseData = await courseModel.find({
            _id : {$in : purchases.map(x => x.courseId)}
        })
        return res.status(200).json({purchases, courseData});
    }
})


module.exports = {
    userRouter : userRouter
}


