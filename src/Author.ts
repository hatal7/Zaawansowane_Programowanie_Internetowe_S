class Author {
  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private static _objectCounter: number;
  constructor(
    _id: number,
    _firstname: string,
    _lastname: string,
    _email: string
  ) {
    this._id = _id;
    this._firstname = _firstname;
    this._lastname = _lastname;
    this._email = _email;
  }

  firstNameValidator(firstname: string) {
    if (firstname!=''&&firstname!=null) {
      return true;
    }
    else {
      console.log("Firstname can't be null or empty!");
    }
  }
  lastNameValidator(lastname: string) {
    if (lastname!=''&&lastname!=null) {
      return true;
    }
    else {
      console.log("Lastname can't be null or empty!");
    }
  }
  emailValidator(email: string) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email!=''&&email!=null) {
      if (email.match(regEx)) {
        return true;
      }
      else {
        console.log("E-mail isn't valid!");
      }
    }
    else {
      console.log("E-mail can't be null or empty!");
    }
  }
    
  
  public set firstname(v: string) {
    if (this.firstNameValidator(v)) {
      this._firstname = v;
    }
  }
  
  public set lastname(v : string) {
    if (this.lastNameValidator(v)) {
      this._lastname = v;
    }
  }
  
  public set email(v : string) {
    if (this.emailValidator(v)) {
      this._email = v;
    }
  }
  
    
    
  public logInfo() {
    console.log(
      `${this._firstname} ${this._lastname} with email: ${this._email} and ID:${this._id}`
    );
  }
}

let a1 = new Author(1, "Jan", "Testowy", "test@test.com");

a1.logInfo();

a1.email = 'TEST@test.pl'

a1.logInfo();

a1.email = 't';