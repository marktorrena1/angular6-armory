import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import {NgModel} from "@angular/forms";

@Directive({
  selector: '[appKanjiConverter]',
  providers: [NgModel]

})
export class KanjiConverterDirective{
 
  constructor(private elem: ElementRef)  { }
  @Output() ngModelChange  = new EventEmitter();

  @HostListener('blur') onblur() {
    console.log("directive run on blue");
    console.log(this.elem);
    // this.elem.nativeElement.value = "Change Value123";
    this.ngModelChange.emit(this.elem.nativeElement.value.toUpperCase());
  }    
}
