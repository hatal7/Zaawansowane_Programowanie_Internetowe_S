class Blog {
  _id: number;
  _title: string;
  _author: Author;
  _articles: Article[];

  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = this.title;
  }

  get author(): Author {
    return this._author;
  }
  set author(value: Author) {
    this._author = this.author;
  }

  constructor(title: string, author: Author) {
    this._title = title;
    this._author = author;
  }

  addArticle(article: Article) {
    this._articles.push(article);
  }

  getArticleTitles() {}

  getArticle() {}
}
