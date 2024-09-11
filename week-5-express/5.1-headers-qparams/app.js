const express = require('express');

const app = express();

app.get('/add', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const sum = Number(a)+Number(b);
    res.status(200).json({"sum": sum});

    //or
    // const sum = parseInt(a) + parseInt(b);
    // res.status(200).json({"sum": sum});
});

//other way to do same. -> by parameters
// app.get('/add/:a/:b', (req, res) => {
//     const a = req.params.a;
//     const b = req.params.b;
//     const sum = Number(a)+Number(b);
//     res.status(200).json({"sum": sum});

//     //or
//     // const sum = parseInt(a) + parseInt(b);
//     // res.status(200).json({"sum": sum});
// });
//http://localhost:3000/add/10/20



app.get('/multiply', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    const prod = a*b;
    res.status(200).json({"product": prod});
});
app.get('/divide', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    const divide = Number(a)/Number(b);
    res.status(200).json({"divide": divide});
});
app.get('/subtract', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    const subtract = Number(a)-Number(b);
    res.status(200).json({"subtract": subtract});
});
app.listen(3000);