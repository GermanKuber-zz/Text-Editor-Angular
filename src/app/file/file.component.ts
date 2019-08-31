import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from "@angular/core";
import { TextService } from "../text-service/text.service";
import { TextFormat, WordWrapper } from "../common/TextFormat";
import { Storageservice } from "../services/storageService";
import { WordWrapperService } from "../services/wordsService";
@Component({
  selector: "app-file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  text: WordWrapper[];
  selectedWord: WordWrapper;
  @Output() changeSelectWord = new EventEmitter<WordWrapper>();

  private _textFormater: TextFormat;
  get textFormater(): TextFormat {
    return this._textFormater;
  }
  @Input()
  set textFormater(value: TextFormat) {
    this._textFormater = value;
    if (this.selectedWord != null && this.wordWrapperService != null) {
      this.wordWrapperService.applyFormater(this.selectedWord, value);
      this.storageservice.set("text", this.text);
    }
  }
  constructor(
    private ref: ChangeDetectorRef,
    private textService: TextService,
    private storageservice: Storageservice,
    private wordWrapperService: WordWrapperService
  ) {}

  ngOnInit() {
    this.text = this.storageservice.get("text");
    if (this.text == null) {
      this.textService.getMockText().then(text => {
        this.text = text.split(" ").map(x => new WordWrapper(x));
        this.storageservice.set("text", this.text);
        this.ref.detectChanges();
      });
    }
  }
  selectWord(index: number) {
    this.selectedWord = this.text[index];
    this.changeSelectWord.emit(this.selectedWord);
  }
  hasFormatter(word: WordWrapper, format: string) {
    return this.wordWrapperService.hasFormater(word, format);
  }
}
