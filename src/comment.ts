class ArticleComment {
  private _content: string;
  private _date: Date;
  private _replies: ArticleComment[];
  private _nick: string;

  constructor(content: string, nick: string) {
    this._content = content;
    this._nick = nick;
  }

  get content(): string {
    return this._content;
  }
  set content(content: string) {
    this._content = content;
  }
  get date(): Date {
    return this._date;
  }
  set date(date: Date) {
    this._date = date;
  }
  get nick(): string {
    return this._nick;
  }
  set nick(nick: string) {
    this._nick = nick;
  }

  public addReply(): void {}
  public getReplies(): ArticleComment[] {
    return [];
  }
}
