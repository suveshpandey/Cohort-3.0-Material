const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

console.log("connected to db.");
mongoose.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/coursera-app2");

const userSchema = new Schema ({
    email: { type: String, unique: true, required: true }, 
    password: { type: String, required: true },            
    firstname: { type: String, required: true },           
    lastname: { type: String, required: true } 
})

const adminSchema = new Schema({
    email: { type: String, unique: true, required: true }, 
    password: { type: String, required: true },            
    firstname: { type: String, required: true },      
    lastname: { type: String, required: true }   
});

const courseSchema = new Schema ({
    title : String,
    description : String,
    price : Number,
    createdBy : ObjectId
})
const purchaseSchema = new Schema ({
    courseId : ObjectId,
    creatorId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('curse', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}