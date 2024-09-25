const express = require('express');
const mongoose = require('mongoose');
const {adminModel} = require('../db');
const admin = require('../routes/admin');

async function adminAuth(req, res, next){
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
module.exports = {
    adminAuth: adminAuth
}