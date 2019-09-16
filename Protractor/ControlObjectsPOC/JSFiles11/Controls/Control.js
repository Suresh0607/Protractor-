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
class Control {
    constructor(controlRequest) {
        this.controlType = "";
        this.controlName = "";
        this.controlName = controlRequest.controlName;
        this.elementToFind = this.LocateElement(controlRequest);
    }
    LocateElement(controlRequest) {
        let elementToFind;
        switch (controlRequest.identificationType) {
            case "name": {
                elementToFind = protractor_1.element(protractor_1.by.name(controlRequest.identificationValue));
                break;
            }
            case "class": {
                elementToFind = protractor_1.element(protractor_1.by.className(controlRequest.identificationValue));
                break;
            }
            case "css": {
                elementToFind = protractor_1.element(protractor_1.by.css(controlRequest.identificationValue));
                break;
            }
            case "xpath": {
                elementToFind = protractor_1.element(protractor_1.by.xpath(controlRequest.identificationValue));
                break;
            }
            case "linkText": {
                elementToFind = protractor_1.element(protractor_1.by.linkText(controlRequest.identificationValue));
                break;
            }
            default: {
                elementToFind = protractor_1.element(protractor_1.by.id(controlRequest.identificationValue));
                break;
            }
        }
        return elementToFind;
    }
    LocateNestedElement(controlRequest, parent) {
        let elementToFind;
        switch (controlRequest.identificationType) {
            case "name": {
                elementToFind = parent.element(protractor_1.by.name(controlRequest.identificationValue));
                break;
            }
            case "class": {
                elementToFind = parent.element(protractor_1.by.className(controlRequest.identificationValue));
                break;
            }
            case "css": {
                elementToFind = parent.element(protractor_1.by.css(controlRequest.identificationValue));
                break;
            }
            case "xpath": {
                elementToFind = protractor_1.element(protractor_1.by.xpath(controlRequest.identificationValue));
                break;
            }
            case "linkText": {
                elementToFind = protractor_1.element(protractor_1.by.linkText(controlRequest.identificationValue));
                break;
            }
            default: {
                elementToFind = parent.element(protractor_1.by.id(controlRequest.identificationValue));
                break;
            }
        }
        return elementToFind;
    }
    Element(element = this.elementToFind, waitTime = 5000) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            let isDiaplayed;
            while (i < waitTime) {
                if ((yield element.isPresent()) == false) {
                    console.log(this.controlName + " is not Displaying...");
                    protractor_1.browser.sleep(1);
                    i++;
                }
                else {
                    console.log(this.controlName + " is showing on screen !");
                    i = waitTime;
                }
            }
            return element;
        });
    }
    Click() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (yield this.Element()).click();
        });
    }
}
exports.Control = Control;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbnRyb2xzL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBaUU7QUFNakUsTUFBYSxPQUFPO0lBUWhCLFlBQVksY0FBK0I7UUFIM0MsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFDMUIsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFJdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBRTlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsYUFBYSxDQUFDLGNBQStCO1FBRXpDLElBQUksYUFBOEIsQ0FBQTtRQUVsQyxRQUFRLGNBQWMsQ0FBQyxrQkFBa0IsRUFDekM7WUFDSSxLQUFLLE1BQU8sQ0FBQyxDQUFDO2dCQUNWLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDckUsTUFBTTthQUNUO1lBQ0QsS0FBSyxPQUFRLENBQUMsQ0FBQztnQkFDWCxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLE1BQU07YUFDVDtZQUNELEtBQUssS0FBTSxDQUFDLENBQUE7Z0JBQ1IsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO2dCQUNuRSxNQUFNO2FBQ1Q7WUFDRCxLQUFLLE9BQVEsQ0FBQyxDQUFBO2dCQUNWLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtnQkFDckUsTUFBTTthQUNUO1lBQ0QsS0FBSyxVQUFXLENBQUMsQ0FBQTtnQkFDYixhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hFLE1BQU07YUFDVDtZQUNELE9BQVEsQ0FBQyxDQUFBO2dCQUNMLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDbkUsTUFBTTthQUNUO1NBQ0o7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUV6QixDQUFDO0lBRUQsbUJBQW1CLENBQUMsY0FBK0IsRUFBRSxNQUFzQjtRQUd2RSxJQUFJLGFBQThCLENBQUE7UUFFbEMsUUFBUSxjQUFjLENBQUMsa0JBQWtCLEVBQ3pDO1lBQ0ksS0FBSyxNQUFPLENBQUMsQ0FBQztnQkFDVixhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLE1BQU07YUFDVDtZQUNELEtBQUssT0FBUSxDQUFDLENBQUM7Z0JBQ1gsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixNQUFNO2FBQ1Q7WUFDRCxLQUFLLEtBQU0sQ0FBQyxDQUFBO2dCQUNSLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtnQkFDMUUsTUFBTTthQUNUO1lBQ0QsS0FBSyxPQUFRLENBQUMsQ0FBQztnQkFDWCxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ3JFLE1BQU07YUFDVDtZQUNELEtBQUssVUFBVyxDQUFDLENBQUE7Z0JBQ2IsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO2dCQUN4RSxNQUFNO2FBQ1Q7WUFDRCxPQUFRLENBQUMsQ0FBQTtnQkFDTCxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLE1BQU07YUFDVDtTQUNKO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFHekIsQ0FBQztJQUdLLE9BQU8sQ0FBQyxVQUEwQixJQUFJLENBQUMsYUFBYSxFQUFHLFdBQW9CLElBQUk7O1lBRWpGLElBQUksQ0FBQyxHQUFZLENBQUMsQ0FBQztZQUNuQixJQUFJLFdBQXFCLENBQUM7WUFFMUIsT0FBTSxDQUFDLEdBQUcsUUFBUSxFQUFDO2dCQUVmLElBQUksQ0FBQSxNQUFNLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSSxLQUFLLEVBQ3RDO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxDQUFBO29CQUN2RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxFQUFHLENBQUE7aUJBQ1A7cUJBQ0c7b0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUF5QixDQUFDLENBQUE7b0JBQ3pELENBQUMsR0FBRyxRQUFRLENBQUM7aUJBQ2hCO2FBQ0o7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUVuQixDQUFDO0tBQUE7SUFFSyxLQUFLOztZQUVSLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLENBQUM7S0FBQTtDQUVKO0FBdEhELDBCQXNIQyJ9