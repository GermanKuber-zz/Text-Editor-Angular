import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Input
} from "@angular/core";
import { TextFormat, WordWrapper } from "../common/TextFormat";
import { WordWrapperService } from "../services/wordsService";
@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  @Output() formatText = new EventEmitter<TextFormat>();

  private _selectedWord: WordWrapper;
  get selectedWord(): WordWrapper {
    return this._selectedWord;
  }
  @Input()
  set selectedWord(value: WordWrapper) {
    if (typeof value != "string") this._selectedWord = value;
  }

  constructor(private wordWrapperService: WordWrapperService) {}
  hasFormater(action: string): boolean {
    if (
      this._selectedWord == null ||
      !this.wordWrapperService.hasFormater(this._selectedWord, action)
    )
      return false;
    return true;
  }
  bold() {
    this.formatText.emit(new TextFormat("B"));
  }
  italic() {
    this.formatText.emit(new TextFormat("I"));
  }
  underline() {
    this.formatText.emit(new TextFormat("U"));
  }
}
