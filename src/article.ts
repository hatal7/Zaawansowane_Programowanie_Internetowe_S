class Article {
  private _id: number;
  @required("The title cannot be empty") private _title: string;
  private _content: string;
  private _creationDate: Date;
  private _comments: Comment[];
  private static_objectCounter: number;

  constructor(title: string, content: string) {
    this._title = title;
    this._content = content;
    this._creationDate = new Date();
  }

  get title(): string {
    return this._title;
  }
  set title(title: string) {
    if (title === null || title === undefined || title.length === 0) {
      throw new Error("The title cannot be empty");
    }
    this._title = title;
  }
  get content(): string {
    return this._content;
  }
  set content(content: string) {
    this._content = content;
  }

  public addComment(): void {}
  public getComment(): Comment[] {
    return [];
  }
}
