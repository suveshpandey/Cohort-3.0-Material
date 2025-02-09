import { WebSocketServer } from "ws";
const app = new WebSocketServer({port: 8000});
app.on("connection", (socket) => {
    console.log("user connected.");

    socket.on("message", (e) =>{
        if(e.toString() == "ping"){
            socket.send("pong");
        }
    } )
})