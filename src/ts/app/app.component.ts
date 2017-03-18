import { Component } from "@angular/core";

@Component({
    selector: "color-tool",
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
})
export class AppComponent {

    public header: string = "Color Tool";
    public colors: string[] = ["red", "white", "blue"];

    public addColor(newColor: string) {
        this.colors.push(newColor);
    }
}
