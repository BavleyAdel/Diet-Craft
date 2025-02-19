import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll')
  onScroll() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader?.classList.contains('scroll-up-sticky') && !selectHeader?.classList.contains('sticky-top') && !selectHeader?.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? this.renderer.addClass(selectBody, 'scrolled') : this.renderer.removeClass(selectBody, 'scrolled');
  }

  @HostListener('window:load')
  onLoad() {
    this.onScroll();
  }
}