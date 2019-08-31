import { Component } from "@angular/core";
import { TextFormat, WordWrapper } from "./common/TextFormat";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Simple Text Editor";
  textFormater: TextFormat;
  selectedWord: WordWrapper;
  formatText(textFormater) {
    this.textFormater = textFormater;
  }
  changeSelectWord(word: WordWrapper) {
    this.selectedWord = word;
  }
}
