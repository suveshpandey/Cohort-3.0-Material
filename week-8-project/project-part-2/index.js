require('dotenv').config();
console.log(process.env.MONGO_URL)
const express = require('express');
const {userRouter} = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const { courseRouter } = require('./routes/course');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})
app.use(express.static('public'));

app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);


async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, ()=> console.log("Server is running..."));
}
main();