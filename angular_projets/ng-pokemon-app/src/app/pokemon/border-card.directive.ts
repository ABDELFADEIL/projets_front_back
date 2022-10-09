import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBoder('#f5f5f5');
   }
  initialColor: string = '#f5f5f5';
  defaultColor: string = '#009688';
  defaultHeight: number = 180;
@Input('pkmnBorderCard') borderColor: string; // alias
//@Input() pkmnBorderCard: string; // sans alias

@HostListener('mouseenter') onMouseEnter(){
  this.setBoder(this.borderColor || this.defaultColor);
}
@HostListener('mouseleave') onMouseLeave(){
  this.setBoder(this.initialColor);
}
  setBoder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }
}
