import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverbackground]',
})
export class HoverbackgroundDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {}

  @HostListener('mouseenter') mouseenter(event: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'white'
    );
  }
}
