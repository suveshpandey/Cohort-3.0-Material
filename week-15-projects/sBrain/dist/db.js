"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.ContentModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ObjectId = mongoose_1.default.Types.ObjectId;
mongoose_1.default.connect("mongodb+srv://adminSuvesh:suveshmongo298@cluster0.y0ux6.mongodb.net/sBrain-db")
    .then(() => console.log("Connected to database..."))
    .catch(error => console.log("Couldn't connect to database: ", error));
const userSchema = new Schema({
    email: { type: String, require: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});
const contentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: ObjectId, ref: 'Tag' }],
    userId: { type: ObjectId, ref: 'User', required: true }
});
const LinkSchema = new Schema({
    hash: String,
    userId: { type: ObjectId, ref: 'User', required: true, unique: true }
});
exports.UserModel = mongoose_1.default.model('User', userSchema);
exports.ContentModel = mongoose_1.default.model('Content', contentSchema);
exports.LinkModel = mongoose_1.default.model('Link', LinkSchema);
