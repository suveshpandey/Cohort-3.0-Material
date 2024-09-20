const express = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "suvesh298";

const app = express();
app.use(express.json());

let users = [];

function auth(req, res, next){
    const username = req.body.username;
    const userPresent = users.find(user => user.username == username);
    if(userPresent){
        res.status(400).json({msg: "user with this username is already present."})
    }
    next();
}
function authForMe(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }
    else{
        res.status(404).json({msg: "you are not loggen in."})
    }
}
//? returning html file:
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})


app.post('/signup', auth ,(req, res)=>{
    const username = req.body.username;
    const passward = req.body.passward;

    users.push({username:username, passward:passward});
    res.status(201).json(
        {
            msg: "successfully signed up!",
            username: username,
            passward: passward,
        }
    );
})
app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const passward = req.body.passward;

    let foundUser = users.find(user => user.username == username && user.passward == passward);
    if(foundUser){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.header("jwt", token);
        res.status(201).json(
            {
                msg: "successfully signed in!",
                token: token,
            }
        );
    }
    else{
        res.status(400).json({msg: "wrong username or passward."})
    }
})

app.get('/me', authForMe, (req, res)=>{
    const token = req.headers.token;
    // const decodedData = jwt.decode(token);  //!not safe, it is like only decoding the token, not verifying it. Any other can easily login to your account.
    const decodedData = jwt.verify(token, JWT_SECRET); //* decode + verify

    if(decodedData.username){
        let foundUser = users.find(user => user.username == req.username); //since we modified the authforme middleware.
        res.status(200).json({
            username: foundUser.username,
            passward: foundUser.password
        })
    }
    else{
        json.status(400).json({msg: "user not found!"})
    }
})

app.listen(3000, ()=> console.log("Server started..."))