// creating an http server using express.js
// express is not a builtin library of nodejs, rather it is an external nodejs library.
const express = require('express');
const app = express();        //creating a server


app.get("/", function(req ,res){
    
})

app.listen(3000);             //listening the server/running the server.