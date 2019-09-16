"use strict";
exports.__esModule = true;
var io = require("socket.io");
var socket = io("http://localhost:3000");
socket.emit("message", "HELLO WORLD");
