// //* Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

// const express = require('express');
// const app = express();

// function logger(req, res, next){
//     console.log(`The method is - ${req.method}`);
//     console.log(`The URL is - ${req.hostname}`);
//     console.log(`The timeStamp is - ${new Date()}`);
//     next();
// }
// app.use(logger);

// app.get('/add', (req, res) => {
//     const a = req.query.a;
//     const b = req.query.b;
//     const sum = Number(a)+Number(b);
//     res.status(200).json({"sum": sum});
// });
// app.listen(3000);







// ------------------------------------------ //
const express = require('express');
// const bodyParser = require('body-parser');    //!body-parser is an external middleWare. to parse the body.
const app = express();

//* In express, if you want to send JSON data,
//* you need to first parse the json data.

app.use(express.json());
app.post('/add', (req, res) => {
    console.log(req.body);
    const a = req.body.a;
    const b = req.body.b;
    const sum = Number(a)+Number(b);
    res.status(200).json({"sum": sum});
});
app.listen(3000);