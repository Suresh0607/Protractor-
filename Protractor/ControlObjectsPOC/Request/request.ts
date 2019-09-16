
export interface ControlRequest {
    controlType : string;
    controlName : string;
    identificationType : string;
    identificationValue : string;
}

export interface ActionRequest {

    controlName : string;
    action : string;
    actionParamsJSON : string;
}

export interface LaunchRequest {

    browser : string
    applicationUrl : string
}

export interface CommandRequest {

    commandName : string;
    commandJSON : string;
}