import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBasicHighlights]",
})
export class basicHighlightsDirective implements OnInit {
  constructor(private elementsRef: ElementRef) {}
  ngOnInit() {
    this.elementsRef.nativeElement.style.backgroundColor = "green";
  }
}
