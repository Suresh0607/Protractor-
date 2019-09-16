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
class Label extends Control_1.Control {
    constructor(controlRequest) {
        super(controlRequest);
        this.controlType = "Label";
    }
    ReadText() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Reading Label....");
            let labelText = yield (yield this.Element()).getText();
            console.log("Completed Reading...");
            console.log(labelText);
            return labelText;
        });
    }
}
exports.Label = Label;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9Db250cm9scy9sYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFvQztBQUlwQyxNQUFhLEtBQU0sU0FBUSxpQkFBTztJQUU5QixZQUFZLGNBQStCO1FBRXZDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtJQUM5QixDQUFDO0lBRUssUUFBUTs7WUFFWCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFFaEMsSUFBSSxTQUFTLEdBQVksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFFL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFdkIsT0FBTyxTQUFTLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBRUo7QUFwQkQsc0JBb0JDIn0=