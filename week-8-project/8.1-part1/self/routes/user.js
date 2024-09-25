const express = require('express');
const {userModel} = require('../db')
const {userAuth} = require('../middlewares/userAuth');
const {purchaseModel} = require('../db');
const Router = express.Router;

const userRouter = Router();

userRouter.post('/signup', userAuth, async (req, res)=>{
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
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    });
    if(!admin){
        res.status(401).json({message: "Invalid credentials."});
    }
    else{
        res.status(200).json({message: "User signed in successfully."});
    }
});
userRouter.get('/show-purchases', async (req, res)=>{
    const userId = req.body.userId;

    const purchases = await purchaseModel.find({userId});
    if(purchases.length == 0){
        return res.status(404).json({message: "You have not purchased any course yet."});
    }
    else{
        return res.status(200).send(purchases);
    }
})


module.exports = {
    userRouter : userRouter
}