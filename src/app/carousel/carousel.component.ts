import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  DoCheck,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild("widgetsContent", { read: ElementRef, static: false })
  public widgetsContent: ElementRef<any>;
  scrollwidth = 50;
  ngOnInit() {
    console.log(this.detectIE());
  }

  ngDoCheck() {
    // console.log('change detection triggered!');
  }

  ngAfterViewInit() {
    this.scrollwidth =
      (<HTMLElement>this.widgetsContent.nativeElement).offsetWidth - 50;
  }

  public scrollRight(): void {
    // this.widgetsContent.nativeElement.scrollLeft+=100;
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
    // console.log("event: ", event);
    // console.log("target.scrollWidth", event.target.scrollWidth); //container div's full length
    // console.log(
    //   "offsetWidth: ",
    //   (<HTMLElement>this.widgetsContent.nativeElement).offsetWidth
    // ); //container div's visible length
    // console.log("event.target.scrollLeft: ", event.target.scrollLeft); // how far have you scrolled from left
    // console.log("event.srcElement.scrollLeft: ", event.srcElement.scrollLeft); //how far have you scrolled from left
    // console.log("=======================");

    let fullwidth = event.target.scrollWidth;
    let containerLength = (<HTMLElement>this.widgetsContent.nativeElement)
      .offsetWidth;
    let scrolledFromLeft = event.srcElement.scrollLeft;
    let endpoint = fullwidth - containerLength;

    let distanceToScrollPercent =
      ((endpoint - scrolledFromLeft) / fullwidth) * 100;
    if (distanceToScrollPercent < 10) {
      console.log("completed");
    }
  }


// as long as it continues to be invoked, it will not be triggered
  debounce (func, interval) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval || 200);
  }
}

  /**
   * detect IE
   * returns version of IE or false, if browser is not Internet Explorer
   */
  detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // IE 12 / Spartan
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge (IE 12+)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf("rv:");
      return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
    }

    // other browser
    return false;
  }
}
