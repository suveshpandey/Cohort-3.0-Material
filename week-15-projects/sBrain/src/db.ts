import mongoose, { mongo }  from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/sBrain-db")
.then(() => console.log("Connected to database..."))
.catch(error => console.log("Couldn't connect to database: ", error));


const userSchema = new Schema ({
    email: {type: String, require: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})
const contentSchema = new Schema ({
    title: String,
    link: String,
    tags: [{type: ObjectId, ref: 'Tag'}],
    userId: {type: ObjectId, ref: 'User', required: true}
})
const LinkSchema = new Schema ({
    hash: String,
    userId: {type: ObjectId, ref: 'User', required: true, unique: true}
})


export const UserModel = mongoose.model('User', userSchema);
export const ContentModel = mongoose.model('Content', contentSchema);
export const LinkModel = mongoose.model('Link', LinkSchema);