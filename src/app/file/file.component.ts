import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef
} from "@angular/core";
import { TextService } from "../text-service/text.service";
import { TextFormat, WordWrapper } from "../common/TextFormat";

@Component({
  selector: "app-file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  text: WordWrapper[];
  selectedWord: WordWrapper;
  private _textFormater: TextFormat;
  get textFormater(): TextFormat {
    return this._textFormater;
  }
  @Input()
  set textFormater(value: TextFormat) {
    this._textFormater = value;
    if (this.selectedWord != null) this.selectedWord.applyFormater(value);
  }
  constructor(
    private ref: ChangeDetectorRef,
    private textService: TextService
  ) {}

  ngOnInit() {
    this.textService.getMockText().then(text => {
      this.text = text.split(" ").map(x => new WordWrapper(x));
      this.ref.detectChanges();
    });
  }
  selectWord(index: number) {
    this.selectedWord = this.text[index];
  }
  hasFormatter(word: WordWrapper, format: string) {
    return word.hasFormater(format);
  }
}
