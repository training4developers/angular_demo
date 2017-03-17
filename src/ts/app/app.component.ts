import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
})
export class AppComponent {

    public message = "Hello World";
}
