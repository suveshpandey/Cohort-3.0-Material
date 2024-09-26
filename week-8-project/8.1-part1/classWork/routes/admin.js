const {Router} = require('express');
const adminRouter = Router();
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = "suvesh298";

const {adminModel} = require('../db');



adminRouter.post('/signup', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    await adminModel.create({
        email,
        password,
        firstname,
        lastname
    })
    res.status(201).json({message: "Admin signed up successfully."});
})

adminRouter.post('/signin', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    const adminFound = await adminModel.findOne({email, password});
    if(adminFound){
        const token = jwt.sign(
            {id: user._id}, 
            JWT_USER_PASSWORD
        );

        res.status(200).json({
            message: "Admin signed in succesfully.", 
            token: token
        });
    }
    else{
        res.json(404).json({message: "Wrong credentials."});
    }
})
adminRouter.post('/course', (req, res)=>{
    res.send("create course")
})
adminRouter.put('/course', (req, res)=>{
    res.send("change course")
})
adminRouter.get('/course/bulk', (req, res)=>{
    res.send("get course")
})
module.exports = {
    adminRouter : adminRouter
}