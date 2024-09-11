const express = require('express');
const app = express();

let noOfUserReq = {};

setInterval(()=>{
    noOfUserReq = {};
}, 1000);

app.use(function(req, res, next){
    const userId = req.header["user-id"];
    if(noOfUserReq[userId]){
        noOfUserReq[userId] = noOfUserReq[userId]+1;
        if(noOfUserReq[userId]>=7){
            res.status(404).send("No entry!");
        }
        else{
            next();
        }
    }
    else{
        noOfUserReq[userId] = 1;
        next();
    }
});

app.listen(8000);
