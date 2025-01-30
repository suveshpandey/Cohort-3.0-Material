import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { UserModel } from "../db";


export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;

    if(!token) {
        res.status(401).json({message: "Access denied. No token provided."});
        return;
    }

    try{   
        const decoded = jwt.verify(token as string, JWT_SECRET);
        if(decoded){
            //@ts-ignore
            req.userId = decoded.id;
            next();
        }
        else{
            res.status(403).json({message: "You are not logged in."});
            return;
        }
    }
    catch(error){
        res.status(500).json({message: "Server error", error: error});
    }
}