import {browser, element, by, ExpectedConditions, Browser} from "protractor"
import { async } from "q";
import { InputField } from "./Controls/inputfield";
import { Button } from "./Controls/button";
import { Control } from "./Controls/Control";
import { ControlRequest, ActionRequest } from "./Request/request";
import net = require('net');
import express from "express";
import socketio from "socket.io";


describe('WFM Web',()=> {

    //var myhash: IHash = {};   

    it('Socket Server', () => {


        var server = net.createServer(function(socket) {
            socket.write('Echo server\r\n');
            socket.pipe(socket);

        });
    
        server.on("connection", function(socket: any) {
            console.log("a user connected");
            console.log(socket.eventNames());
            
             socket.on("data",  function(msg : Buffer) {
                console.log(fromCharCodesToString(msg.toJSON().data));
             });
        });

        server.listen(3000, '127.0.0.1');


        // const app = express();
        
        // app.set("port", 3000);

        // var http = require("http").Server(app);

        // var io = require("socket.io")(http);

        // app.get("/", (req: any, res: any) => {
        //     res.send("hello world");

            
        // });

        // io.on("connection", function(socket: any) {
        //     console.log("a user connected");
            
        //     socket.on("message", function(message: any) {
        //         console.log(message);
        //     });
        // });

        // const server = http.listen(3000, function() {
        //     console.log("listening on *:3000");
        // });

         browser.sleep(60000);

    })   






})

function fromCharCodesToString(charCodes : number[]) : string
{
    var result : string = "";

    for (let charcode of charCodes) {
        result = result + String.fromCharCode(charcode)
    }


    return result;
}

function performActionOnControl(controlObj : Control, actionRequest : ActionRequest) {
    
    switch (controlObj.controlType)
    {
        case "InputField" : {
            
            switch (actionRequest.action){
                //case "EnterText" : (<InputField>controlObj).EnterText(actionRequest.actionValue) ; break;
                case "Click"     : (<InputField>controlObj).Click(); break;
                default : break;
            }

            break;
        }
        case "Button" : {

            switch (actionRequest.action){
                case "Click" : (<Button>controlObj).Click(); break;
                default : break;
            }
            break;

        }
       
    }    


}