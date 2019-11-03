import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  cards = [
    { title: "A", description: "I am card A" },
    { title: "B", description: "I am card B" },
    { title: "C", description: "I am card C" },
    { title: "D", description: "I am card D" },
    { title: "E", description: "I am card E" },
    { title: "F", description: "I am card F" },
    { title: "G", description: "I am card G" },
    { title: "H", description: "I am card H" },
    { title: "I", description: "I am card I" },
    { title: "J", description: "I am card J" },
  ];

  title = "app component";
}
