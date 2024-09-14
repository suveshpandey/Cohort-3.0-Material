const express = require('express');
const app = express();
app.use(express.json());

const users = [];

// function generateToken(){
//     let token = "";
//     for(let i = 1; i<5; i++){
//         if(token.length <= 5){
//             token = token + Math.random()*10;
//         }
//         else return token;
//     }
// }

function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = "";
    for(let i = 0; i<32; i++){
        if(token.length <= 10){
            token += options[Math.floor(Math.random()*options.length)];
        }
    }
    return token;
}
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
    //? 1st method
    // const user = users.find(u => u.username === username && u.password === password);
    
    //? 2nd method
    // const user = users.find(function(u){
    //     if(u.username === username && u.password === password ) return true;
    //     else return false;
    // })

    //? 3rd method
    let foundUser = null;
    for(let i = 0; i<users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }
    if(foundUser){
        const token = generateToken(); 
        foundUser.token = token;
        res.json({mgs : token});
    }
    else{
        res.status(403).send({msg: "Invalid username or password"})
    }
    console.log(users);

})

app.get('/me', (req, res)=>{
    const token = req.headers.token;
    let foundUser = null;
    for(let i = 0; i<users.length; i++){
        if(users[i].token == token){
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