import { Injectable } from "@angular/core";
import { WordWrapper, TextFormat } from "../common/TextFormat";

@Injectable()
export class WordWrapperService {
  public applyFormater(word: WordWrapper, textFormater: TextFormat) {
    let formater = word.textFormaters.find(
      x => x.action == textFormater.action
    );
    if (formater == null) word.textFormaters.push(textFormater);
    else
      word.textFormaters.splice(
        word.textFormaters.findIndex(x => x.action == textFormater.action),
        1
      );
  }
  public hasFormater(word: WordWrapper, format: string): boolean {
    return word.textFormaters.some(x => x.action == format);
  }
}
