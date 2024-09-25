const express = require('express');
const mongoose = require('mongoose');
const {userModel} = require('../db');

async function userAuth(req, res, next){
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
module.exports = {
    userAuth: userAuth
}