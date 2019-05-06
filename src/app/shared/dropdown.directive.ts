import { Directive, HostBinding, HostListener } from '@angular/core';
import { elementClassProp } from '@angular/core/src/render3';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}
