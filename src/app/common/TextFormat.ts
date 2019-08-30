export class TextFormat {
  constructor(public action: string) {}
}

export class WordWrapper {
  textFormaters: TextFormat[] = [];
  constructor(private word: string) {}
  public applyFormater(textFormater: TextFormat) {
    var formater = this.textFormaters.find(
      x => x.action == textFormater.action
    );
    if (formater == null) this.textFormaters.push(textFormater);
    else
      this.textFormaters.splice(
        this.textFormaters.findIndex(x => x.action == textFormater.action),
        1
      );
  }
  hasFormater(format: string): boolean {
    return this.textFormaters.some(x => x.action == format);
  }
}
