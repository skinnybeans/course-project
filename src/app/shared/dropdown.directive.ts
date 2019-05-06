import { Directive, HostBinding, HostListener } from '@angular/core';
import { elementClassProp } from '@angular/core/src/render3';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class') elementShown = '';

    @HostListener('click') mouseClick(eventData: Event) {
        if (this.elementShown === 'open') {
            this.elementShown = '';
        } else {
            this.elementShown = 'open';
        }
    }
}
