const express = require('express');
const app = express();
//these are routes.
app.get('/', function(req, res){
    res.send("hello!")
})
app.get('/sp', function(req, res){
    res.send({
        name: "suvesh",
        age: 19,
        isPassed: true,
    })
})

app.listen(3000);

