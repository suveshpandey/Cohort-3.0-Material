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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupAuth = void 0;
const db_1 = require("../db");
const signupAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const email = (_a = req.body) === null || _a === void 0 ? void 0 : _a.email;
    const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegax.test(email)) {
        res.status(411).json({ message: "Invalid email format." });
        return;
    }
    try {
        const user = yield db_1.UserModel.findOne({ email });
        if (!user) {
            next();
            return;
        }
        else {
            res.status(403).json({ message: "User with this email already exists." });
            return;
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error.\n", error });
    }
});
exports.signupAuth = signupAuth;
