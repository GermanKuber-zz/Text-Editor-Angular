import { Component } from "@angular/core";
import { TextFormat } from "./common/TextFormat";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Simple Text Editor";
  textFormater: TextFormat;
  formatText(textFormater) {
    this.textFormater = textFormater;
  }
}
