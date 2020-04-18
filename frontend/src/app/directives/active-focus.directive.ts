import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[activeFocus]'
})
export class ActiveFocusDirective implements AfterViewInit {

  constructor(private eleRef: ElementRef) {}

  private putCursorAtEnd (el: any) {
    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
      el.focus()
    } else if (el.createTextRange) {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  ngAfterViewInit () {
    this.putCursorAtEnd(this.eleRef.nativeElement)
  }

}