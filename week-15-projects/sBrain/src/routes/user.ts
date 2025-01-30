import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import {ContentModel, LinkModel, UserModel} from "../db";
import { authenticate } from "../middlewares/authenticate";
import { signupAuth } from "../middlewares/existingUser";
import { random } from "../utils";

const Router = express.Router;

export const userRouter = Router();

userRouter.post('/signup', signupAuth, async (req, res) => {
    const {email, password, username} = req.body;
    try{
        await UserModel.create ({
            email,
            password,
            username
        })
        res.status(201).json({message: "Successfully signed-up !"});
    }
    catch(error){
        res.status(500).json({message: error})
    }
})
userRouter.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await UserModel.findOne ({
            email,
            password
        })
        if(user){
            const token = jwt.sign(
                {id: user._id,},
                JWT_SECRET,
                {expiresIn: '24h'}
            
            )
            res.status(200).json({message: "Successfully signed-in !", token: token});
        }
        else{
            res.status(404).json({message: "Wrong credentials."});
        }
    }
    catch(error){
        res.status(500).json({message: error})
    }
})
userRouter.post('/post-content', authenticate, async (req, res) => {
    const {title, link} = req.body;
    try{
        await ContentModel.create({
            title,
            link,
            //@ts-ignore
            userId: req.userId
        })
        res.status(201).json({message: "Content saved !"});
    }
    catch(error){
        res.status(500).json({message: "Server error", error: error});
    }
    
})
userRouter.get('/get-content', authenticate, async (req, res) => {
    try{
        //@ts-ignore
        const userId = req.userId

        if(!userId){
            res.status(401).json({message: "Unauthorized access!"});
            return;
        }

        const userContent = await ContentModel.find({
            userId: userId
        }).populate("userId", "username");
        
        if(!userContent){
            res.status(404).json({message: "No notes found!"});
            return;
        }
        res.status(200).json({"Your saved content": userContent})
    }
    catch(error: any){
        res.status(500).json({message: "Server error while fetching content!", error: error.message});
    }
    
})    
userRouter.delete('/delete-content', authenticate, async (req, res) => {
        //@ts-ignore
        const userId = req.userId;
        const contentId = req.body.contentId;

        if(!userId){
            res.status(401).json({message: "Unauthorized access!"});
            return;
        }

        await ContentModel.deleteOne({
            _id: contentId,
            userId
        }).then((result) => {
            if(result.deletedCount == 0){
                res.status(404).json({message: "Content not found."});
            }
            res.status(200).json({message: "Content deleted successfully."});
        })
        .catch((error) => {
            res.status(500).json({message: "Server error while deleting the content!", error: error.message});
        })
})    
userRouter.post('/share', authenticate, async (req, res) => {
    const {share} = req.body;
    if( share ){
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        })
        if(existingLink){
            res.status(200).json({link: `/share/${existingLink.hash}`});
            return;
        }
        
        const hash = random(15);
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })
        res.status(200).json({link: `/share/${hash}`});
    }
    else{
        await LinkModel.deleteOne(
            {
                //@ts-ignore
                userId: req.userId
            }
        )
        res.status(200).json({message: "deleted sharable link."});
    }
})
userRouter.get('/:shareLink', async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });
    if(!link){
        res.status(411).json({message: "Sorry, incorrect input."});
        return;
    }

    const content = await ContentModel.find({
        userId: link.userId
    });

    const user = await UserModel.findOne({
        _id: link.userId
    })
    if(!user){
        res.status(411).json({message: "user not fount, error should ideally not happen."});
        return;
    }

    res.status(200).json({
        userName: user.username,
        content: content
    })
})