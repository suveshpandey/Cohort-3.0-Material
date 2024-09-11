const express = require('express');
const app = express();

// function checkAge(age){
//     if(age >= 14) return true;
//     else return false;
// }

// app.use(checkAgeMiddleWare);

function checkAgeMiddleWare(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }
    else{
        res.status(411).json({msg: "Under age!"});
    }

}
app.get('/ride1', checkAgeMiddleWare,function(req, res){
    res.json({msg: "good to go!"});
})

//In the below fn, we have not written checkAgeMiddleWare, bcz we have written app.use(...), 
//therefore this middleware will bw used int the whole app(below that line). Hence no need to write it in every fn.

// app.get('/ride1', function(req, res){
//     res.json({msg: "good to go!"});
// })


app.listen(3000);

