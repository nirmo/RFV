const express = require("express");
const app = express();
const http = require ("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    io.to(socket.id).emit("from_backend", "RealFace");

    socket.on("from_frontend", (data) => {
        io.to(socket.id).emit("from_backend", data);
    });
});

server.listen(3001, () => {
    console.log("Listening on port 3001...");
});
