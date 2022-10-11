class Komentarz {
  _contents: string;
  _date: Date;
  _replies: Komentarz[];
  _nick: string;

  constructor(contents: string, nick: string) {
    this._contents = contents;
    this._nick = nick;
  }

  get date(): Date {
    return this._date;
  }
  set date(value: Date) {
    this._date = this.date;
  }

  get nick(): string {
    return this._nick;
  }
  set nick(value: string) {
    this._nick = this.nick;
  }

  addReply(reply: Komentarz) {
    this._replies.push(reply);
  }
  getReplies() {
    return this._replies;
  }
}
