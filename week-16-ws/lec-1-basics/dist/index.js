"use strict";
// import { WebSocketServer } from "ws";
Object.defineProperty(exports, "__esModule", { value: true });
// const app = new WebSocketServer({port: 8000});
// //event handler
// app.on("connection", function(socket){
//     console.log("user connected");
//     socket.on("message", (e) => {
//         if(e.toString() === "ping"){
//             socket.send("pong");
//         }
//     })
// })
const ws_1 = require("ws");
const app = new ws_1.WebSocketServer({ port: 8000 });
app.on("connection", (socket) => {
    console.log("user connected.");
    socket.on("message", (e) => {
        if (e.toString() == "ping") {
            socket.send("pong");
        }
    });
});
