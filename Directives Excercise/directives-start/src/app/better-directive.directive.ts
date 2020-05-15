import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appBetterDirective]",
})
export class BetterDirectiveDirective {
  @HostBinding("style.backgroundColor") backgroudColor: string = "transparent";
  constructor(private elref: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener("mouseenter") mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elref.nativeElement, "background-color", "red");
    this.backgroudColor = "orange";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elref.nativeElement,
      "background-color",
      "yellow"
    );
  }
}
