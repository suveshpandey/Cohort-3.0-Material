"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const db_1 = require("../db");
const authenticate_1 = require("../middlewares/authenticate");
const existingUser_1 = require("../middlewares/existingUser");
const utils_1 = require("../utils");
const Router = express_1.default.Router;
exports.userRouter = Router();
exports.userRouter.post('/signup', existingUser_1.signupAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, username } = req.body;
    try {
        yield db_1.UserModel.create({
            email,
            password,
            username
        });
        res.status(201).json({ message: "Successfully signed-up !" });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
}));
exports.userRouter.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield db_1.UserModel.findOne({
            email,
            password
        });
        if (user) {
            const token = jsonwebtoken_1.default.sign({ id: user._id, }, config_1.JWT_SECRET, { expiresIn: '24h' });
            res.status(200).json({ message: "Successfully signed-in !", token: token });
        }
        else {
            res.status(404).json({ message: "Wrong credentials." });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
}));
exports.userRouter.post('/post-content', authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, link } = req.body;
    try {
        yield db_1.ContentModel.create({
            title,
            link,
            //@ts-ignore
            userId: req.userId
        });
        res.status(201).json({ message: "Content saved !" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error });
    }
}));
exports.userRouter.get('/get-content', authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId;
        if (!userId) {
            res.status(401).json({ message: "Unauthorized access!" });
            return;
        }
        const userContent = yield db_1.ContentModel.find({
            userId: userId
        }).populate("userId", "username");
        if (!userContent) {
            res.status(404).json({ message: "No notes found!" });
            return;
        }
        res.status(200).json({ "Your saved content": userContent });
    }
    catch (error) {
        res.status(500).json({ message: "Server error while fetching content!", error: error.message });
    }
}));
exports.userRouter.delete('/delete-content', authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const contentId = req.body.contentId;
    if (!userId) {
        res.status(401).json({ message: "Unauthorized access!" });
        return;
    }
    yield db_1.ContentModel.deleteOne({
        _id: contentId,
        userId
    }).then((result) => {
        if (result.deletedCount == 0) {
            res.status(404).json({ message: "Content not found." });
        }
        res.status(200).json({ message: "Content deleted successfully." });
    })
        .catch((error) => {
        res.status(500).json({ message: "Server error while deleting the content!", error: error.message });
    });
}));
exports.userRouter.post('/share', authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { share } = req.body;
    if (share) {
        const existingLink = yield db_1.LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.status(200).json({ link: `/share/${existingLink.hash}` });
            return;
        }
        const hash = (0, utils_1.random)(15);
        yield db_1.LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        });
        res.status(200).json({ link: `/share/${hash}` });
    }
    else {
        yield db_1.LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });
        res.status(200).json({ message: "deleted sharable link." });
    }
}));
exports.userRouter.get('/:shareLink', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.shareLink;
    const link = yield db_1.LinkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({ message: "Sorry, incorrect input." });
        return;
    }
    const content = yield db_1.ContentModel.find({
        userId: link.userId
    });
    const user = yield db_1.UserModel.findOne({
        _id: link.userId
    });
    if (!user) {
        res.status(411).json({ message: "user not fount, error should ideally not happen." });
        return;
    }
    res.status(200).json({
        userName: user.username,
        content: content
    });
}));
