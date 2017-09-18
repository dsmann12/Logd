import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgxMyDatePicker } from "./ngx-my-date-picker.component";
import { NgxMyDatePickerDirective } from "./ngx-my-date-picker.input";
import { FocusDirective } from "./directives/ngx-my-date-picker.focus.directive";
import { NgxMyDatePickerConfig } from "./services/ngx-my-date-picker.config";
export var NgxMyDatePickerModule = (function () {
    function NgxMyDatePickerModule() {
    }
    NgxMyDatePickerModule.forRoot = function () {
        return {
            ngModule: NgxMyDatePickerModule,
            providers: [NgxMyDatePickerConfig]
        };
    };
    NgxMyDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [NgxMyDatePicker, NgxMyDatePickerDirective, FocusDirective],
                    entryComponents: [NgxMyDatePicker],
                    exports: [NgxMyDatePicker, NgxMyDatePickerDirective, FocusDirective]
                },] },
    ];
    NgxMyDatePickerModule.ctorParameters = [];
    return NgxMyDatePickerModule;
}());
//# sourceMappingURL=ngx-my-date-picker.module.js.map