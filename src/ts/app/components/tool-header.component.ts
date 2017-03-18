import { Component, Input } from "@angular/core";

@Component({
    selector: "tool-header",
    template: "<h1>{{header}}</h1>",
})
export class ToolHeader {

    @Input()
    public header: string;
}
