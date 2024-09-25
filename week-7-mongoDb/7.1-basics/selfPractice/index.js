const express = require('express');
const mongoose = require('mongoose');
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "suvesh298";

mongoose.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/todo-app-database")

const app = express();
app.use(express.json());

app.post('/signup', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    await UserModel.create(
        {
            email: email,
            password: password,
            username: username
        }
    )
    res.status(201).json({
        message: "Successfully signed up."
    })
})

app.post('/signin', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })
    console.log(user);
    if(user){
        const token = jwt.sign({
            id:user._id.toString()
        }, JWT_SECRET);
        res.status(200).json({
            message: "Successfully signed in.",
            token: token
        })
    }
    else{
        res.status(301).json({
            message: "Wrong credentials."
        })
    }
})

app.post('/add-todo', async (req, res)=>{
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.body.userId;

    await TodoModel.create({
        title:title,
        done:done,
        userId:userId
    })
    res.status(201).json({
        message: "Task added successfully."
    })
})

app.get('/todos', async (req, res)=>{
    const userId = req.userId;
    const todos = await TodoModel.find({userId});
    res.status(200).json({
        todos: todos
    })
})

app.get('/my-todos', (req, res)=>{

})


app.listen(3000, ()=>console.log("Server is running..."));