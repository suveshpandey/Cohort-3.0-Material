const express = require('express');
const Router = express.Router;
const {courseModel} = require('../db');
const {purchaseModel} = require('../db');
// const { userSigninAuth } = require('../middlewares/userAuth');
const { adminSigninAuth } = require('../middlewares/adminAuth');

const courseRouter = Router();

courseRouter.get('/preview', async (req, res)=>{
    const courses = await courseModel.find({});
    res.status(200).send(courses); 
})
courseRouter.post('/purchase', adminSigninAuth , async (req, res)=>{
    const courseId = req.body.courseId;
    const userId = req.body.userId;

    await purchaseModel.create({
        courseId,
        userId
    })
    res.status(201).json({message: "Course purchase successfull."});

})

module.exports = {
    courseRouter : courseRouter
}