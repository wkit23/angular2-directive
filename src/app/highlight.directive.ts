import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight')
  backgroundColor:string;

  private defColor:string = "#face00";
  private isBold:boolean = false;

  constructor(
    private el:ElementRef,
    private renderer:Renderer) { 
      let ob = Observable.timer(2000, 1000);
      ob.subscribe(t => {
        this.highlight(this.getRandomColor());
      });
    }


    highlight(color:string) {
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
      this.renderer.setElementStyle(this.el.nativeElement, 'textColor', this.getRandomColor());

      let fontWeight = this.isBold ? "Bold" : "Normal";
      this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', fontWeight);
      this.isBold = !this.isBold;
    }

    getRandomColor():string {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
      this.highlight(this.backgroundColor || this.defColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
      this.highlight(this.getRandomColor());
    }
}
