class Blog {
  private _id: number;
  @required("The name field cannot be empty") private _name: string;
  @required() private _author: Author;
  private _articles: Article[];
  private _static_objectCounter: number;

  constructor(name: string, author: Author) {
    this._name = name;
    this._author = author;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get author(): Author {
    return this._author;
  }
  set author(author: Author) {
    this._author = author;
  }

  public addArticle(): void {}
  public getArticleTitiles(): string[] {
    return [];
  }
  public getArticle(): Article {}
}
