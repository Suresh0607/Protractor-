
import { ElementFinder, element, by, browser } from "protractor";
import { async } from "q";
import { ControlRequest } from "../Request/request";
import { protractor } from "protractor/built/ptor";

//export to make the class visible
export class Control
{

    elementToFind  : ElementFinder;

    controlType : string = "";
    controlName : string = "";

    constructor(controlRequest : ControlRequest)
    {
        this.controlName = controlRequest.controlName;

        this.elementToFind = this.LocateElement(controlRequest);
    }

    LocateElement(controlRequest : ControlRequest) : ElementFinder {

        let elementToFind  : ElementFinder

        switch (controlRequest.identificationType)
        {
            case "name" : {
                elementToFind = element(by.name(controlRequest.identificationValue));
                break;
            }
            case "class" : {
                elementToFind = element(by.className(controlRequest.identificationValue));
                break;
            }
            case "css" :{
                elementToFind = element(by.css(controlRequest.identificationValue))
                break;
            }
            case "xpath" :{
                elementToFind = element(by.xpath(controlRequest.identificationValue))
                break;
            }
            case "linkText" :{
                elementToFind = element(by.linkText(controlRequest.identificationValue))
                break;
            }
            default :{
                elementToFind = element(by.id(controlRequest.identificationValue));
                break;
            }
        }   

        return elementToFind;

    }

    LocateNestedElement(controlRequest : ControlRequest, parent : ElementFinder) : ElementFinder
    {
        
        let elementToFind  : ElementFinder

        switch (controlRequest.identificationType)
        {
            case "name" : {
                elementToFind = parent.element(by.name(controlRequest.identificationValue));
                break;
            }
            case "class" : {
                elementToFind = parent.element(by.className(controlRequest.identificationValue));
                break;
            }
            case "css" :{
                elementToFind = parent.element(by.css(controlRequest.identificationValue))
                break;
            }
            case "xpath" : {
                elementToFind = element(by.xpath(controlRequest.identificationValue))
                break;
            }
            case "linkText" :{
                elementToFind = element(by.linkText(controlRequest.identificationValue))
                break;
            }
            default :{
                elementToFind = parent.element(by.id(controlRequest.identificationValue));
                break;
            }
        }   

        return elementToFind;


    }


    async Element(element : ElementFinder = this.elementToFind , waitTime : number = 5000) : Promise<ElementFinder>{
        
        let i : number = 0;
        let isDiaplayed : boolean; 

        while(i < waitTime){

            if (await element.isPresent() == false)
            {
                console.log(this.controlName + " is not Displaying...")
                browser.sleep(1);
                i ++ 
            } 
            else{
                console.log(this.controlName + " is showing on screen !")
                i = waitTime;
            }
        }

        return element; 

    }

    async Click() {

       await (await this.Element()).click();   
    }

}