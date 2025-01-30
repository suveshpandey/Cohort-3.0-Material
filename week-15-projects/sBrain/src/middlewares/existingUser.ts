import { Request, Response, NextFunction, RequestHandler } from "express";
import { UserModel } from "../db";

export const signupAuth = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body?.email;
    const emailRegax  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegax.test(email)){
        res.status(411).json({message: "Invalid email format."});
        return;
    }
    try{
        const user = await UserModel.findOne({email});
        if(!user){
            next();
            return;
        }
        else{
            res.status(403).json({message: "User with this email already exists."});
            return;
        }
    }
    catch(error){
        res.status(500).json({message: "Server error.\n", error});
    }
}