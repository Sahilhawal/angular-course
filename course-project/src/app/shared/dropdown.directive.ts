import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[dropdownDirective]',
})
export class dropdownDirective {
  constructor(private elref: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') openIt() {
    this.renderer.addClass(this.elref.nativeElement, 'open');
  }

  @HostListener('mouseleave') closeIt() {
    this.renderer.removeClass(this.elref.nativeElement, 'open');
  }

  /*
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  */
}
