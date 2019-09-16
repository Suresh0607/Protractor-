import {browser, element, by, ExpectedConditions, Browser} from "protractor"
import { async } from "q";
import { InputField } from "./Controls/inputfield";
import { Button } from "./Controls/button";
import { Control } from "./Controls/Control";
import { ControlRequest, ActionRequest, CommandRequest, LaunchRequest } from "./Request/request";
import net = require('net');
import { Label } from "./Controls/label";
import { NavMenu } from "./Controls/navbar";
import { EnterTextActionParams, NavigateMenuActionParams } from "./Request/actionParams";

describe('WFM Web',()=> {

    //var myhash: IHash = {};   

    it('open WFM Web', async()=> {

        browser.waitForAngularEnabled(false);

        var controlObjs : Control[] = [];
        var controlRequest : ControlRequest;
        var controlRequests : ControlRequest[] = [];
        var actionRequest : ActionRequest;
        var actionRequests : ActionRequest[] = [];
        //var actionRequests : any[] = [];
        var launchRequest : LaunchRequest;
        var command : CommandRequest;
        
        //Starting a socket server

        var server = net.createServer(function(socket) {
            //socket.write('Protactor Server\r\n');
            //socket.pipe(socket); 
        });
    
        server.on("connection", function(socket: any) {
             console.log("a user connected");
         
             socket.write('You are connected !');
            
             socket.on("data",  async function(msg : Buffer) {
              
                let commandString =  fromCharCodesToString(msg.toJSON().data);
                command = JSON.parse(commandString);
                
                console.log(command.commandName);   
                
                switch (command.commandName) {

                    case "LAUNCH" : {
                        
                        let title : string;

                        launchRequest = JSON.parse(command.commandJSON);
                        console.log("LAUNCHING APPLICATION AT URL : " + launchRequest.applicationUrl);
                        title = await LaunchApplication(launchRequest.applicationUrl);
                      
                        socket.write(title);

                        break;
                    }     
                    case "CONTROL" : { 

                        controlRequest = JSON.parse(command.commandJSON);
                        controlRequests.push(controlRequest); 
                        console.log(controlRequest.controlType);
                        console.log(controlRequest.controlName);    
                        switch (controlRequest.controlType){
                            case "InputField" : controlObjs.push(new InputField(controlRequest)); break;
                            case "Button"     : controlObjs.push(new Button(controlRequest)); break; 
                            case "Label"      : controlObjs.push(new Label(controlRequest)); break;   
                            case "NavigationMenu" : controlObjs.push(new NavMenu(controlRequest)); break;         
                            default : break;
                        }

                        break;
                    }     
                    case "ACTION"  : {

                        let result : string = "";
                        let controlObj;

                        console.log("PEFORMING ACTIONS....\r\n")

                        actionRequest = JSON.parse(command.commandJSON);
                      
                        controlObj = controlObjs.find(x=> x.controlName == actionRequest.controlName)   

                        if (controlObj != undefined){
                             console.log(actionRequest.action + " ON " + actionRequest.controlName)
                             console.log(controlObj.controlType)
                             result = await performActionOnControl(controlObj, actionRequest) ; 
                             socket.write(result);
                         } 

                        break;
                    }
                    case "EXECUTE" :{
                        
                        //For each action request we need to fetch the respective control object to perform actions.    
                        
                        console.log("PEFORMING EXECUTUION ON SERIES OF ACTIONS....\r\n") 
                        let result : string = "";
                        
                        actionRequests = JSON.parse(command.commandJSON);

                        for (let actionRequest of actionRequests) {

                            let controlObj = controlObjs.find(x=> x.controlName == actionRequest.controlName)                 
                            if (controlObj != undefined) {
                                 result = await performActionOnControl(controlObj, actionRequest) 
                                 console.log(actionRequest.action + " ON " + actionRequest.controlName)
                            }                                 
                        }

                        socket.write(result);
                        
                    }
                    default : break;
                    
                }



             });

             
        });

        server.listen(3000, '127.0.0.1');

        browser.sleep(600000);
       
    })

  

})


async function LaunchApplication(url : string) : Promise <string> {

    var browserTitle : string = ""

    await browser.get(url);

    browserTitle =  await browser.getTitle();

    return browserTitle;
}

async function performActionOnControl(controlObj : Control, actionRequest : ActionRequest) : Promise<string> {
    
    var result : string = "Empty";

    switch (controlObj.controlType)
    {
        case "InputField" : {
            
            switch (actionRequest.action){
                case "EnterText" :  await (<InputField>controlObj).EnterText((<EnterTextActionParams>JSON.parse(actionRequest.actionParamsJSON)).text); break;
                case "Click"     : await (<InputField>controlObj).Click(); break;
                default : break;
            }

            break;
        }
        case "Button" : {

            switch (actionRequest.action){
                case "Click" : await (<Button>controlObj).Click(); break;
                default : break;
            }
            break;

        }

        case "Label" : {

            switch (actionRequest.action){
                case "Read" : result = await (<Label>controlObj).ReadText() ; break; 
                default : break;
            }
            break;

        }

        case "NavigationMenu" : {

            switch (actionRequest.action){
                case "Navigate" :{

                    let navigateMenuActionParams : NavigateMenuActionParams  = JSON.parse(actionRequest.actionParamsJSON)

                    let topLevelMenuLocator : ControlRequest = JSON.parse(navigateMenuActionParams.topLevelMenuLocatorJSON);
                    let childMenuLocator : ControlRequest = JSON.parse(navigateMenuActionParams.childMenuLocatorJSON);

                    console.log("TOP LEVEL MENU " + topLevelMenuLocator.identificationValue)
                    console.log("CHILD MENU " + childMenuLocator.identificationValue)

                    await (<NavMenu>controlObj).NavigateToMenuItem(topLevelMenuLocator,childMenuLocator);
                    break;
                }
               
                default : break;
            }
            break; 

        }
       
    }

    return result;


}

function fromCharCodesToString(charCodes : number[]) : string
{
    var result : string = "";

    for (let charcode of charCodes) {
        result = result + String.fromCharCode(charcode)
    }


    return result;



}