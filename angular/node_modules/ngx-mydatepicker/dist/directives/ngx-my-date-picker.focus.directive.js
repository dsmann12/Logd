import { Directive, ElementRef, Renderer, Input } from "@angular/core";
export var FocusDirective = (function () {
    function FocusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    FocusDirective.prototype.ngAfterViewInit = function () {
        if (this.value === "0") {
            return;
        }
        this.renderer.invokeElementMethod(this.el.nativeElement, "focus", []);
    };
    FocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ngxfocus]"
                },] },
    ];
    FocusDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    FocusDirective.propDecorators = {
        'value': [{ type: Input, args: ["ngxfocus",] },],
    };
    return FocusDirective;
}());
//# sourceMappingURL=ngx-my-date-picker.focus.directive.js.map