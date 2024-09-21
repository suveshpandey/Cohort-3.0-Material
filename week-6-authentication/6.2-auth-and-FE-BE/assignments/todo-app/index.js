const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "suveshjwt";
app.use(express.json());


let users = [];


function isUserAlreadyPresent(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    let userFound = users.find(user => user.username == username);
    if(userFound){
        res.status(400).json("User with this username is already present!");
    }
    else next();
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})
app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', isUserAlreadyPresent, (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    })
    res.status(201).json({msg: "Successfully signed up..."});
})

app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    let userFound = users.find(user => user.username == username && user.password == password);
    if(userFound){
        const token = jwt.sign({username: userFound.username}, JWT_SECRET);
        res.setHeader("token", token);
        // console.log(token);
        res.status(200).json(
            {
                msg: "successfully signed in...",
                username: userFound.username,
                password: userFound.password,
                token: token,
            }
        );
    }
    else{
        res.status(400).json({msg: "Wrong credentials!"});
    }
})

app.get('/me', (req, res)=>{
    const token = req.headers['token']; // Fix the token extraction     
    const verifiedData = jwt.verify(token, JWT_SECRET);
    console.log(verifiedData.username);
    if(verifiedData.username){
        let foundUser = users.find(user => user.username == verifiedData.username);
        res.status(200).json({
            username: foundUser.username,
            password : foundUser.password
        })
    }
    else{
        res.status(400).json({msg : "User not found!"})
    }
});

//?---------------- Todos Section ------------------- 
let todos = [];
app.get('/my-todos', (req, res)=>{
    res.status(200).json({
        tasks: todos
    })
})

app.post('/add-todo', (req, res)=>{
    const task = req.body.task;
    todos.push(task);
    res.status(201).json({
        msg: "Task successfully added.",
        task: task
    })
})
app.delete('/delete-todo', (req, res)=>{
    const task = req.body.task;
    for(let i = 0; i<todos.length; i++){
        if(todos[i] == task){
            todos.splice(i, 1);
        }
    }
    res.status(200).json({
        msg: "Task successfully deleted.",
        task: task
    })
})
app.put('/update-todo', function(req, res){
    const task = req.body.task;
    const newTask = req.body.newTask;

    let isChanged = false;

    for(let i = 0; i<todos.length; i++){
        if(todos[i] == task){
            todos[i] = newTask;
            isChanged = true;
            break;
        }
    }
    if(isChanged == true) return res.status(200).json({msg :"task updated successfully!"});
    else return res.status(404).json({msg : "task not found"});
})

app.listen(3000, ()=>console.log("server is running..."));
