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
const Control_1 = require("./Control");
class InputField extends Control_1.Control {
    constructor(controlRequest) {
        super(controlRequest);
        this.controlType = "InputField";
    }
    EnterText(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (yield this.Element()).sendKeys(value);
        });
    }
}
exports.InputField = InputField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRmaWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbnRyb2xzL2lucHV0ZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBb0M7QUFJcEMsTUFBYSxVQUFXLFNBQVEsaUJBQU87SUFHbkMsWUFBWSxjQUErQjtRQUV2QyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUE7SUFDbkMsQ0FBQztJQUVLLFNBQVMsQ0FBQyxLQUFZOztZQUN6QixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0NBRUo7QUFiRCxnQ0FhQyJ9