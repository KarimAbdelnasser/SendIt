const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { formatMessage } = require("./utils/messages");
const {
    userJoin,
    getCurrentUser,
    getRoomUsers,
    userLeave,
} = require("./utils/users");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Set static folder
app.use(express.static(path.join(__dirname, "Public")));
app.use(cors());
const botName = "IT BOT";

//Run when client connects
io.on("connection", (socket) => {
    socket.on("joinRoom", ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        //Welcome current user
        socket.emit(
            "message",
            formatMessage(botName, `Welcome ${user.username} to SendIT!`)
        );

        //Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit(
                "message",
                formatMessage(botName, `${user.username} has joined the chat`)
            );

        //Send users and room info
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });

    //Listen for chatMessage
    socket.on("chatMessage", (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    //runs when user disconnect
    socket.on("disconnect", () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit(
                "message",
                formatMessage(botName, `${user.username} has left the chat`)
            );

            io.to(user.room).emit("roomUsers", {
                room: user.room,
                users: getCurrentUser(user.room),
            });
        }
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
