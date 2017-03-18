import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "color-form",
    template: `<form>
        <label for="new-color-input">New Color</label>
        <input type="text" name="newColor" id="new-color-input"
            [(ngModel)]="newColor" (keydown.enter)="addColor()" />
        <button type="button" (click)="addColor()">Add Color</button>
    </form>`,
})
export class ColorForm {

    public newColor: string = "";

    @Output()
    public colorAdded: EventEmitter<string> = new EventEmitter<string>();

    public addColor() {
        this.colorAdded.emit(this.newColor);
        this.newColor = "";
    }
}
