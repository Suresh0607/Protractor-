import { Control } from "./Control";
import { ControlRequest } from "../Request/request";
import { ElementFinder } from "protractor";

export class NavMenu extends Control
{
    constructor(controlRequest : ControlRequest)
    {
        super(controlRequest);
        this.controlType = "NavigationMenu"
    }

    async NavigateToMenuItem(topLevelMenu : ControlRequest, subMenu : ControlRequest) {

        let parentMenu : ElementFinder;
        let childMenu : ElementFinder;
        
        parentMenu = this.LocateNestedElement(topLevelMenu,await this.Element());

        (await this.Element(parentMenu)).click()
        
        childMenu = this.LocateNestedElement(subMenu, await this.Element(parentMenu));

        (await this.Element(childMenu)).click()

    }



}