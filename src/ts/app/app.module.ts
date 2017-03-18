import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToolHeader } from "./components/tool-header.component";
import { ItemList } from "./components/item-list.component";
import { ColorForm } from "./components/color-form.component";

import "../../scss/styles.scss";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ToolHeader, ItemList, ColorForm ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
