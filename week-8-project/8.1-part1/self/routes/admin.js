const express = require('express');
const Router = express.Router;
const {adminModel} = require('../db');
const {adminAuth} = require('../middlewares/amdinAuth');
const {courseModel} = require('../db');

const adminRouter = Router();

adminRouter.post('/signup', adminAuth, async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    try{
        await adminModel.create({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        })
        res.status(201).json({
            message: "Admin signed up successfully."
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
adminRouter.post('/signin', async (req, res)=>{
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
        res.status(200).json({message: "Admin signed in successfully."});
    }
})
adminRouter.post('/create-course', async (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const createdBy = req.body.createdBy;

    try{
        await courseModel.create({
            title: title,
            description: description,
            price: price,
            createdBy: createdBy
        })
        res.status(201).json({message: "Course created successfully."});    
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error: Unable to create resource." });
    }
})

module.exports = {
    adminRouter : adminRouter
}