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
class NavMenu extends Control_1.Control {
    constructor(controlRequest) {
        super(controlRequest);
        this.controlType = "NavigationMenu";
    }
    NavigateToMenuItem(topLevelMenu, subMenu) {
        return __awaiter(this, void 0, void 0, function* () {
            let parentMenu;
            let childMenu;
            parentMenu = this.LocateNestedElement(topLevelMenu, yield this.Element());
            (yield this.Element(parentMenu)).click();
            childMenu = this.LocateNestedElement(subMenu, yield this.Element(parentMenu));
            (yield this.Element(childMenu)).click();
        });
    }
}
exports.NavMenu = NavMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQ29udHJvbHMvbmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW9DO0FBSXBDLE1BQWEsT0FBUSxTQUFRLGlCQUFPO0lBRWhDLFlBQVksY0FBK0I7UUFFdkMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUE7SUFDdkMsQ0FBQztJQUVLLGtCQUFrQixDQUFDLFlBQTZCLEVBQUUsT0FBd0I7O1lBRTVFLElBQUksVUFBMEIsQ0FBQztZQUMvQixJQUFJLFNBQXlCLENBQUM7WUFFOUIsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUV6RSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBRXhDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBRTlFLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFM0MsQ0FBQztLQUFBO0NBSUo7QUF6QkQsMEJBeUJDIn0=