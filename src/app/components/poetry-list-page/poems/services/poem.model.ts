export class Poem {
    constructor(
      public poem_title: string,
      public poem_preview: string,
      public poem_text: string,
      public secret_poem_id?: string
    ) {}
  }