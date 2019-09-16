import { Control } from "./Control";
import { ControlRequest } from "../Request/request";

//export to make the class visible
export class InputField extends Control
{
    
    constructor(controlRequest : ControlRequest)
    {   
        super(controlRequest);
        this.controlType = "InputField"
    }

    async EnterText(value:string) {
       await (await this.Element()).sendKeys(value);
    }

}
