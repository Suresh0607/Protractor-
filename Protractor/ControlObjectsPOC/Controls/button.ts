import { Control } from "./Control";
import { timingSafeEqual } from "crypto";
import { ControlRequest } from "../Request/request";

//export to make the class visible
export class Button extends Control
{
    
    constructor(controlRequest : ControlRequest)
    {
        super(controlRequest);
        this.controlType = "Button"
    }

   
}