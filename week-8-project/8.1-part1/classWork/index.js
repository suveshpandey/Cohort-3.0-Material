const express = require('express');
const mongoose = require('mongoose');
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');


const app = express();

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);
// app.use('/purchase', courseRouter);

//* this 'main' function let your server to run only after the db is connected. Otherwise it will not allow the server to run.
async function main(){
    //? and yes, .connect should be await, because we don't know when db will be connected, just like in case of fetch and axios (promises).
    await mongoose.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/coursera-app");
    app.listen(3000, ()=> console.log("Server is running..."));
}
main();
//! dotenv user karo. (readme se jake dekho kikya hai ye.)