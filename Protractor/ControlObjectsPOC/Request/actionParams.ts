import { ControlRequest } from "./request";


export interface ActionParams {




}

export interface EnterTextActionParams extends ActionParams
{
    text : string;
}

export interface NavigateMenuActionParams extends ActionParams
{
    topLevelMenuLocatorJSON : string
    childMenuLocatorJSON : string
}

