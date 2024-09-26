const express = require('express');
const mongoose = require('mongoose');
const {userModel} = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config');

async function userSignupAuth(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    
    const userFound = await userModel.findOne({
        email: email,
    });
    if(userFound){
        return res.status(401).json({message: "User with this email already exists."});
    }
    else{
        next();
    }
}
async function userSigninAuth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_USER_PASSWORD);

    if(decoded){
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({message: "You are not signed in."});
    }

}

module.exports = {
    userSignupAuth: userSignupAuth,
    userSigninAuth: userSigninAuth
}