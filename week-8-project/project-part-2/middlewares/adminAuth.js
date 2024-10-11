const express = require('express');
const mongoose = require('mongoose');
const {adminModel} = require('../db');
const admin = require('../routes/admin');
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');


async function adminSignupAuth(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    
    const adminFound = await adminModel.findOne({
        email: email,
    });
    if(adminFound){
        return res.status(401).json({message: "Admin with this email already exists."});
    }
    else{
        next();
    }
}
async function adminSigninAuth(req, res, next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(decoded){
        req.adminId = decoded.id;
        next();
    }
    else{
        res.status(403).json({message: "You are not signed in."});
    }

}
module.exports = {
    adminSignupAuth: adminSignupAuth,
    adminSigninAuth: adminSigninAuth
}