import { Control } from "./Control";
import { ControlRequest } from "../Request/request";


export class Label extends Control
{
    constructor(controlRequest : ControlRequest)
    {
        super(controlRequest);
        this.controlType = "Label"
    }

    async ReadText() : Promise<string> {

       console.log("Reading Label....") 

       let labelText: string =  await (await this.Element()).getText()

       console.log("Completed Reading...")
       console.log(labelText);

       return labelText;
    }

}
