const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "suveshpandey";
const app = express();
app.use(express.json());

const users = [];
//! note - in this server we will be using jwt tokens instead of creating tokens using fucntion.
app.post('/signup', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;


    users.push({
        username : username,
        password : password,
    })

    res.status(201).json({msg : "successfully signed up!"})
    console.log(users);
})

app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;
    for(let i = 0; i<users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }
    if(foundUser){
        const token = jwt.sign({
            username: username,
        }, JWT_SECRET); 
        
        res.json({mgs : token});
    }
    else{
        res.status(403).send({msg: "Invalid username or password"})
    }
    console.log(users);

})

app.get('/me', (req, res)=>{
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;

    let foundUser = null;
    for(let i = 0; i<users.length; i++){
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json(
            {
                username: foundUser.username,
                password: foundUser.password,
            }
        )
    }
    else{
        res.json({msg: "invalid token!"});
    }
})

app.listen(3000, ()=>{
    console.log("Server is running!")
});