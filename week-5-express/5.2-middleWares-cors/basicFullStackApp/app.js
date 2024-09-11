const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
// app.use(cors());    //? means any/every frontend and access this backend.
app.use(cors({
    domains: ['http://localhost:3000'] //? means only this frontend url can access this backend.
}));
// app.get("/", (req, res)=>{   //*by doing this and not importing cors and all, we would be able to host fe and be on the same post -> 8000.
//     res.sendFile(__dirname + "/public/index.html");
// })
app.post('/add', (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    console.log(a+b)
    res.status(200).json({sum: a+b});
})
app.listen(8000)

//!node --watch app.js