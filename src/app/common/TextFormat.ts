export class TextFormat {
  constructor(public action: string) {}
}

export class WordWrapper {
  textFormaters: TextFormat[] = [];
  constructor(private word: string) {}
}
