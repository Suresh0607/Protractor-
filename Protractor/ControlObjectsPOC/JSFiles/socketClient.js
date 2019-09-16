"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const socket = socket_io_1.default("http://localhost:3000");
socket.emit("message", "HELLO WORLD");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc29ja2V0Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQWlDO0FBRWpDLE1BQU0sTUFBTSxHQUFHLG1CQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUVqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyJ9