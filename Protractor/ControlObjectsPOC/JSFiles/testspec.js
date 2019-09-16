"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const inputfield_1 = require("./Controls/inputfield");
const button_1 = require("./Controls/button");
const net = require("net");
const label_1 = require("./Controls/label");
const navbar_1 = require("./Controls/navbar");
describe('WFM Web', () => {
    it('open WFM Web', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        var controlObjs = [];
        var controlRequest;
        var controlRequests = [];
        var actionRequest;
        var actionRequests = [];
        var launchRequest;
        var command;
        var server = net.createServer(function (socket) {
        });
        server.on("connection", function (socket) {
            console.log("a user connected");
            socket.write('You are connected !');
            socket.on("data", function (msg) {
                return __awaiter(this, void 0, void 0, function* () {
                    let commandString = fromCharCodesToString(msg.toJSON().data);
                    command = JSON.parse(commandString);
                    console.log(command.commandName);
                    switch (command.commandName) {
                        case "LAUNCH": {
                            let title;
                            launchRequest = JSON.parse(command.commandJSON);
                            console.log("LAUNCHING APPLICATION AT URL : " + launchRequest.applicationUrl);
                            title = yield LaunchApplication(launchRequest.applicationUrl);
                            socket.write(title);
                            break;
                        }
                        case "CONTROL": {
                            controlRequest = JSON.parse(command.commandJSON);
                            controlRequests.push(controlRequest);
                            console.log(controlRequest.controlType);
                            console.log(controlRequest.controlName);
                            switch (controlRequest.controlType) {
                                case "InputField":
                                    controlObjs.push(new inputfield_1.InputField(controlRequest));
                                    break;
                                case "Button":
                                    controlObjs.push(new button_1.Button(controlRequest));
                                    break;
                                case "Label":
                                    controlObjs.push(new label_1.Label(controlRequest));
                                    break;
                                case "NavigationMenu":
                                    controlObjs.push(new navbar_1.NavMenu(controlRequest));
                                    break;
                                default: break;
                            }
                            break;
                        }
                        case "ACTION": {
                            let result = "";
                            let controlObj;
                            console.log("PEFORMING ACTIONS....\r\n");
                            actionRequest = JSON.parse(command.commandJSON);
                            controlObj = controlObjs.find(x => x.controlName == actionRequest.controlName);
                            if (controlObj != undefined) {
                                console.log(actionRequest.action + " ON " + actionRequest.controlName);
                                console.log(controlObj.controlType);
                                result = yield performActionOnControl(controlObj, actionRequest);
                                socket.write(result);
                            }
                            break;
                        }
                        case "EXECUTE": {
                            console.log("PEFORMING EXECUTUION ON SERIES OF ACTIONS....\r\n");
                            let result = "";
                            actionRequests = JSON.parse(command.commandJSON);
                            for (let actionRequest of actionRequests) {
                                let controlObj = controlObjs.find(x => x.controlName == actionRequest.controlName);
                                if (controlObj != undefined) {
                                    result = yield performActionOnControl(controlObj, actionRequest);
                                    console.log(actionRequest.action + " ON " + actionRequest.controlName);
                                }
                            }
                            socket.write(result);
                        }
                        default: break;
                    }
                });
            });
        });
        server.listen(3000, '127.0.0.1');
        protractor_1.browser.sleep(600000);
    }));
});
function LaunchApplication(url) {
    return __awaiter(this, void 0, void 0, function* () {
        var browserTitle = "";
        yield protractor_1.browser.get(url);
        browserTitle = yield protractor_1.browser.getTitle();
        return browserTitle;
    });
}
function performActionOnControl(controlObj, actionRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        var result = "Empty";
        switch (controlObj.controlType) {
            case "InputField": {
                switch (actionRequest.action) {
                    case "EnterText":
                        yield controlObj.EnterText(JSON.parse(actionRequest.actionParamsJSON).text);
                        break;
                    case "Click":
                        yield controlObj.Click();
                        break;
                    default: break;
                }
                break;
            }
            case "Button": {
                switch (actionRequest.action) {
                    case "Click":
                        yield controlObj.Click();
                        break;
                    default: break;
                }
                break;
            }
            case "Label": {
                switch (actionRequest.action) {
                    case "Read":
                        result = yield controlObj.ReadText();
                        break;
                    default: break;
                }
                break;
            }
            case "NavigationMenu": {
                switch (actionRequest.action) {
                    case "Navigate": {
                        let navigateMenuActionParams = JSON.parse(actionRequest.actionParamsJSON);
                        let topLevelMenuLocator = JSON.parse(navigateMenuActionParams.topLevelMenuLocatorJSON);
                        let childMenuLocator = JSON.parse(navigateMenuActionParams.childMenuLocatorJSON);
                        console.log("TOP LEVEL MENU " + topLevelMenuLocator.identificationValue);
                        console.log("CHILD MENU " + childMenuLocator.identificationValue);
                        yield controlObj.NavigateToMenuItem(topLevelMenuLocator, childMenuLocator);
                        break;
                    }
                    default: break;
                }
                break;
            }
        }
        return result;
    });
}
function fromCharCodesToString(charCodes) {
    var result = "";
    for (let charcode of charCodes) {
        result = result + String.fromCharCode(charcode);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE0RTtBQUU1RSxzREFBbUQ7QUFDbkQsOENBQTJDO0FBRzNDLDJCQUE0QjtBQUM1Qiw0Q0FBeUM7QUFDekMsOENBQTRDO0FBRzVDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsR0FBRSxFQUFFO0lBSW5CLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBTyxFQUFFO1FBRXhCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsSUFBSSxXQUFXLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLElBQUksY0FBK0IsQ0FBQztRQUNwQyxJQUFJLGVBQWUsR0FBc0IsRUFBRSxDQUFDO1FBQzVDLElBQUksYUFBNkIsQ0FBQztRQUNsQyxJQUFJLGNBQWMsR0FBcUIsRUFBRSxDQUFDO1FBRTFDLElBQUksYUFBNkIsQ0FBQztRQUNsQyxJQUFJLE9BQXdCLENBQUM7UUFJN0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFTLE1BQU07UUFHN0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFTLE1BQVc7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUVwQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRyxVQUFlLEdBQVk7O29CQUUzQyxJQUFJLGFBQWEsR0FBSSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlELE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FB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