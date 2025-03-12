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
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
const createUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.user.create({
        data: {
            username: "suvesh",
            password: "suveshpass",
            age: 21,
            city: "satna"
        }
    });
});
// createUser();
const updateUser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.user.update({
        where: {
            id: 1
        },
        data: {
            username: "Suvesh Pandey"
        }
    });
});
// updateUser();
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield client.user.findFirst({
        where: {
            id: 1
        }
    });
    console.log(user);
});
// getUser();
const getUserWithTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(user);
});
getUserWithTodos();
