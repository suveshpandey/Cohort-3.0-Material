"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const authenticate = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        res.status(401).json({ message: "Access denied. No token provided." });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
        if (decoded) {
            //@ts-ignore
            req.userId = decoded.id;
            next();
        }
        else {
            res.status(403).json({ message: "You are not logged in." });
            return;
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error });
    }
};
exports.authenticate = authenticate;
