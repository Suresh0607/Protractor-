import SocketIO from "socket.io";

const socket = SocketIO("http://localhost:3000");

socket.emit("message", "HELLO WORLD");