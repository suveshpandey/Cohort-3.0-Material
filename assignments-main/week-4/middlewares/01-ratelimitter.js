// You have to create a middleware for rate limiting a users request based on their username passed in the header

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


const express = require('express');
const app = express();
app.use(express.json());

let users = [];
function generateId(){
  let id = "";
  while(id.length <= 5){
    id += Math.floor(Math.random()*10);
  }
  return id;
}

let userRequestLimit = {};

setInterval(()=>{
  console.log("resetting user request limit...");
  userRequestLimit = {};
}, 10000);

app.use((req, res, next)=>{
  const userId = req.headers['user-id'];

  if(!userRequestLimit[userId]){
    userRequestLimit[userId] = 0;
  }
  if(userRequestLimit[userId] >= 5){
    console.log("ecceded the limit!")
    return res.status(429).json({msg: 'Too many requests. Please try again later.'});
  }
  userRequestLimit[userId]++;
  next();
})
app.post('/signup', (req, res)=>{
  const username = req.body.username;
  const userId = generateId();
  console.log(userId);

  users.push({
    username,
    userId,
  })

  res.status(201).json({
    msg: "user added!",
    username: username,
    id: userId,
  })
})

app.post('/signin', (req, res)=>{
  const username = req.body.username;
  const userId = req.headers['user-id'];
  
  console.log("username got :" + username);
  console.log("user id got :" + userId);
  const user = users.find(user => user.username == username && user.userId == userId);
  if(user){
    res.status(200).json({
      msg: "user authenticated!",
      username: username,
      id: userId,
    });
  }
  else{
    res.status(400).json({msg: 'user not found.'});
  }
})




app.listen(3000, ()=>console.log("server started!"));