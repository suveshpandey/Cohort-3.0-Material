const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "suvesh298";
const {UserModel, TodoModel} = require("./db");
const mongoose = require('mongoose');
const {z} = require('zod');

mongoose.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/todo-app-database")

const app = express();
app.use(express.json());

//! note - every database call should be in async-await format.

app.post('/signup', async (req, res)=>{
    const requiredBody = z.object({
        email: z.string().min(3).max(20).email(),
        password: z.string().min(6).max(10),
        name: z.string().min(1).max(12)
    })
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if(!parsedDataWithSuccess.success){
        return res.json({
            message : "Incorrect format."
        })
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create(
        {
            email: email,
            password: hashedPassword,
            name: name
        }
    );
    res.status(201).json({message: "You have successfully signed up."});
})

app.post('/signin', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({   //* since the user will be find in db->somewhere else. that's why we used "async-await" here.
        email: email,
    });

    if(!user){
        return res.status(403).json({message: "The user does not exist in our db."});
    }

    console.log(user);

    // const passwordMatch = await bcrypt.compare(password, user.password);
    const passwordMatch =  bcrypt.compare(password, user.password);
    if(passwordMatch){
        const token = jwt.sign({
            id: user._id.toString()          //since _id is something like an object of a class, that's why, we convert it to string.
        }, JWT_SECRET);

        res.status(200).json({
            message: "successfully signed in.",
            token: token
        });
    }
    else{
        res.status(403).json({message: "Incorrect credentials."}) //403->not authorized
    }
})
app.post('/add-todo', auth, async(req, res)=>{
    const title = req.body.title;
    const isDone = req.body.isDone;
    const userId = req.userId;

    await TodoModel.create(
        {
            title: title,
            done: isDone,
            userId: userId
        }
    )
    res.status(201).json({message: "Task added successfully"});
})
app.get('/todos', auth, async(req, res)=>{
    const userId = req.userId;

    const todos = await TodoModel.find({userId});
    res.json({todos});
})

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.id;
        next();
    }
    else{
        res.status(403).json({message: "Incorrect credentials."});
    }
}

app.listen(3000, () => console.log("Server is running..."))