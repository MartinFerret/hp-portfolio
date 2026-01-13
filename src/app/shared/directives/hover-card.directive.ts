import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
})
export class HoverCardDirective {

  @HostBinding('class.is-hovered') hovered = false;
  @HostBinding('class.is-active') active = false;

  @HostListener('mouseenter')
  onEnter() {
    this.hovered = true;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.hovered = false;
  }

  @HostListener('mousedown')
  onDown() {
    this.active = true;
  }

  @HostListener('mouseup')
  onUp() {
    this.active = false;
  }
}
