class Article {
  _id: number;
  _title: string;
  _contents: string;
  _creationDate: Date;
  _comments: Komentarz[];

  constructor(title: string, contents: string) {
    this._title = title;
    this._contents = contents;
  }

  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = this.title;
  }

  get contents(): string {
    return this._contents;
  }
  set contents(value: string) {
    this._contents = this.contents;
  }

  addComment(comment: Komentarz) {}
  getComments() {
    return this._comments;
  }
}
