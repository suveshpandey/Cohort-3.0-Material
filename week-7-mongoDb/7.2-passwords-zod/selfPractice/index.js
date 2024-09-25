const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const {z} = require('zod');

mongoose.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/todo-app-database");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requireBody = z.object({
        email: z.string().min(5).max(15).email(),
        password: z.string().min(5).max(8),
        name: z.string().min(1).max(15)
    })

    const parseDataWithSuccess = requireBody.safeParse(req.body);
    if(!parseDataWithSuccess.success){
        return res.json({
            message: "Incorrect format."
        })
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
        res.json({
            message: "You are signed up"
        })
    }
    catch(e){
        res.status(403).json({message: "User with this email already exists."});
    }
});


app.post("/signin", async function(req, res) {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await UserModel.findOne({
            email: email,
        });

        const passwordMatch = bcrypt.compare(password, user.password);
        if (user && passwordMatch) {
            const token = jwt.sign({
                id: user._id.toString()
            }, JWT_SECRET);

            res.json({
                token
            })
        } 
        else {
            res.status(403).json({
                message: "Incorrect creds"
            })
        }
    }
    catch(e){
        res.status(403).json({message: "Error while siging in."})
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000, ()=> console.log("Server is running."));