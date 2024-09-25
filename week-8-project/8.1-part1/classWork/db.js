const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const ObjectId = mongoose.ObjectId;

console.log("connected to")
mongoose.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/coursera-app");

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname : String,
    lastName: String
});
const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname : String,
    lastName: String
});
const courseSchema = new Schema({
    title: String,
    description: String,
    price : Number,
    creatorId: ObjectId
});
const purchaseShema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});
const userModel = mongoose.model('user',userSchema);
const adminModel = mongoose.model('admin',adminSchema);
const courseModel = mongoose.model('course',courseSchema);
const purchaseModel = mongoose.model('purchase',purchaseShema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

//? ctrl+shift+l ->ctrl+d ka kaam aasan karta hai.