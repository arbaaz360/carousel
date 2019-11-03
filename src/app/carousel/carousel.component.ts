import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  ngOnInit() {}

  @ViewChild("widgetsContent", { read: ElementRef, static: false })
  public widgetsContent: ElementRef<any>;
  scrollwidth = 50;

  ngAfterViewInit() {
    this.scrollwidth =
      (<HTMLElement>this.widgetsContent.nativeElement).offsetWidth - 50;
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + this.scrollwidth,
      behavior: "smooth"
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - this.scrollwidth,
      behavior: "smooth"
    });
  }
  scrollHandler(event) {
    console.log('event: ',event)
    console.log('target.scrollWidth',event.target.scrollWidth)//container div's full length
    console.log("offsetWidth: ",  (<HTMLElement>this.widgetsContent.nativeElement).offsetWidth ); //container div's visible length
    console.log("event.target.scrollLeft: ", event.target.scrollLeft);// how far have you scrolled from left
    console.log("event.srcElement.scrollLeft: ", event.srcElement.scrollLeft); //how far have you scrolled from left
    console.log("=======================");

    let fullwidth=event.target.scrollWidth;
    let containerLength=(<HTMLElement>this.widgetsContent.nativeElement).offsetWidth;
    let scrolledFromLeft = event.srcElement.scrollLeft;
    let endpoint=fullwidth-containerLength;

 let distanceToScrollPercent=((endpoint - scrolledFromLeft)/ fullwidth)*100
     if( distanceToScrollPercent <10){
     console.log('completed')
    }
  }
}
