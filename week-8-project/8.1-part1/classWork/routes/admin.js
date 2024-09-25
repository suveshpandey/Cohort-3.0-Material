const {Router} = require('express');
const adminRouter = Router();

const {adminModel} = require('../db');


adminRouter.post('/signup', (req, res)=>{
    res.send("admin signup")
})
adminRouter.post('/signin', (req, res)=>{
    res.send("admin signin")
})
adminRouter.post('/', (req, res)=>{
    res.send("create course")
})
adminRouter.put('/', (req, res)=>{
    res.send("change course")
})
adminRouter.get('/bulk', (req, res)=>{
    res.send("get course")
})
module.exports = {
    adminRouter : adminRouter
}