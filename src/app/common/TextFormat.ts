export class TextFormat {
  constructor(public action: string) {}
}

export class WordWrapper {
  textFormaters: TextFormat[] = [];
  constructor(public word: string) {}
}

export interface SynonymsResponse {
  word: string;
  score: number;
  tags: string[];
}
