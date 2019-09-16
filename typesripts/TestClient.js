"use strict";
exports.__esModule = true;
var socket_io_1 = require("socket.io");
var socket = socket_io_1["default"]("http://localhost:3000");
socket.emit("message", "HELLO WORLD");
