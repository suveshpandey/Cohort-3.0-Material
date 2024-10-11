const express = require('express');
const Router = express.Router;
const {adminModel} = require('../db');
const {adminSignupAuth, adminSigninAuth} = require('../middlewares/adminAuth');
const {courseModel} = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');


const adminRouter = Router();

adminRouter.post('/signup', adminSignupAuth, async (req, res)=>{
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

    const admin = await adminModel.findOne({
        email: email,
        password: password
    });
    if(!admin){
        res.status(401).json({message: "Invalid credentials."});
    }
    else{
        const token = jwt.sign(
            {id: admin._id},
            JWT_ADMIN_PASSWORD
        )
        res.status(200).json(
            {
                message: "Admin signed in successfully.",
                token: token
            }
        );
    }
})

adminRouter.post('/create-course', adminSigninAuth,  async (req, res)=>{
    const adminId = req.adminId;

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const creatorId = adminId;

    try{
        const course = await courseModel.create({
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            creatorId: creatorId
        })
        res.status(201).json(
            {
                message: "Course created successfully.",
                courseId: course._id
            }
        );    
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error: Unable to create resource." });
    }
})

adminRouter.put('/update-course', adminSigninAuth,  async (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const courseId = req.body.courseId;
    const adminId= req.adminId;

    try{
        const course = await courseModel.updateOne(
            {
            _id:courseId,
            creatorId: adminId
            },
            {
                title: title,
                description: description,
                price: price,
                imageUrl: imageUrl
            })
            res.status(201).json({
                    message: "Course updated successfully.",
                    courseId: course._id
            }
        );    
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error: Unable to update resource." });
    }
})

adminRouter.get('/all-courses', adminSigninAuth,  async (req, res)=>{
    const adminId = req.adminId;
    try{
        const courses = await courseModel.find({
            creatorId:adminId
        })
        res.status(201).json({
                courses: courses
            }
        );    
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error: Unable to update resource." });
    }
})

module.exports = {
    adminRouter : adminRouter
}

