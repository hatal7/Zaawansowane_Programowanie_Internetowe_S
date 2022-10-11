class Author {
  _id: number;
  _name: string;
  _surname: string;
  _email: string;

  constructor(name: string, surname: string) {
    this._name = name;
    this._surname = surname;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = this.name;
  }

  get surname(): string {
    return this._surname;
  }
  set surname(value: string) {
    this._surname = this.surname;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = this.email;
  }
}
