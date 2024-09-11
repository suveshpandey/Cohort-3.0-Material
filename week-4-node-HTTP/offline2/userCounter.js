const express = require('express');
const app = express();

let requstCount = 0;
app.use(function(req, res, next){
    requstCount = requstCount+1;
    next();
});

app.get('/user', function(req, res){
    res.status(200).json({name: "suvesh"});
});

app.post('/user', function(req, res){
    res.status(200).json({msg: 'created a dummy user.'});
});
app.get('/rc', function(req, res){
    res.status(200).json({requstCount});
})

app.listen(8000);
