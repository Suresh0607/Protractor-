"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const net = require("net");
describe('WFM Web', () => {
    it('Socket Server', () => {
        var server = net.createServer(function (socket) {
            socket.write('Echo server\r\n');
            socket.pipe(socket);
        });
        server.on("connection", function (socket) {
            console.log("a user connected");
            console.log(socket.eventNames());
            socket.on("data", function (msg) {
                console.log(fromCharCodesToString(msg.toJSON().data));
            });
        });
        server.listen(3000, '127.0.0.1');
        protractor_1.browser.sleep(60000);
    });
});
function fromCharCodesToString(charCodes) {
    var result = "";
    for (let charcode of charCodes) {
        result = result + String.fromCharCode(charcode);
    }
    return result;
}
function performActionOnControl(controlObj, actionRequest) {
    switch (controlObj.controlType) {
        case "InputField": {
            switch (actionRequest.action) {
                case "Click":
                    controlObj.Click();
                    break;
                default: break;
            }
            break;
        }
        case "Button": {
            switch (actionRequest.action) {
                case "Click":
                    controlObj.Click();
                    break;
                default: break;
            }
            break;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWNTb2NrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlY1NvY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE0RTtBQU01RSwyQkFBNEI7QUFLNUIsUUFBUSxDQUFDLFNBQVMsRUFBQyxHQUFFLEVBQUU7SUFJbkIsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFHckIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFTLE1BQU07WUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFTLE1BQVc7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFFaEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUcsVUFBUyxHQUFZO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQTZCaEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUIsQ0FBQyxDQUFDLENBQUE7QUFPTixDQUFDLENBQUMsQ0FBQTtBQUVGLFNBQVMscUJBQXFCLENBQUMsU0FBb0I7SUFFL0MsSUFBSSxNQUFNLEdBQVksRUFBRSxDQUFDO0lBRXpCLEtBQUssSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1FBQzVCLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUNsRDtJQUdELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLHNCQUFzQixDQUFDLFVBQW9CLEVBQUUsYUFBNkI7SUFFL0UsUUFBUSxVQUFVLENBQUMsV0FBVyxFQUM5QjtRQUNJLEtBQUssWUFBYSxDQUFDLENBQUM7WUFFaEIsUUFBUSxhQUFhLENBQUMsTUFBTSxFQUFDO2dCQUV6QixLQUFLLE9BQU87b0JBQW9CLFVBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFBQyxNQUFNO2dCQUMzRCxPQUFRLENBQUMsQ0FBQyxNQUFNO2FBQ25CO1lBRUQsTUFBTTtTQUNUO1FBQ0QsS0FBSyxRQUFTLENBQUMsQ0FBQztZQUVaLFFBQVEsYUFBYSxDQUFDLE1BQU0sRUFBQztnQkFDekIsS0FBSyxPQUFPO29CQUFZLFVBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFBQyxNQUFNO2dCQUNuRCxPQUFRLENBQUMsQ0FBQyxNQUFNO2FBQ25CO1lBQ0QsTUFBTTtTQUVUO0tBRUo7QUFHTCxDQUFDIn0=