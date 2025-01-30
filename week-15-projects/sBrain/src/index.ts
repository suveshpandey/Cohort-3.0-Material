import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import { userRouter } from "./routes/user";

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => console.log("Server is running..."));