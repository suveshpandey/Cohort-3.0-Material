const express = require('express');
const Router = express.Router;
// const {Router} = require('Router');   //?same as above 2 lines.

const userRouter = Router();  //it is a function.

userRouter.post('/signup', (req, res)=>{
    res.send("signup")
})
userRouter.post('/signin', (req, res)=>{
    res.send("signin")
})
userRouter.get('/purchases', (req, res)=>{
    res.send("purchases")
})

module.exports = {
    userRouter : userRouter
}