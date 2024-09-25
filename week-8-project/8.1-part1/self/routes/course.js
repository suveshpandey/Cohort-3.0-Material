const express = require('express');
const Router = express.Router;
const {courseModel} = require('../db');
const {purchaseModel} = require('../db');

const courseRouter = Router();

courseRouter.get('/preview', async (req, res)=>{
    const courseId = req.body.courseId;
    
    const courseFound = await courseModel.findById(courseId);
    if(!courseFound){
        return res.status(404).json({message: "Course with this id is not found."});
    }
    else{
        return res.status(200).send(courseFound);
    }
})
courseRouter.post('/purchase', async (req, res)=>{
    const courseId = req.body.courseId;
    const creatorId = req.body.creatorId;
    const userId = req.body.userId;

    await purchaseModel.create({
        courseId,
        creatorId,
        userId
    })
    res.status(201).json({message: "Course purchase successfull."});

})

module.exports = {
    courseRouter : courseRouter
}