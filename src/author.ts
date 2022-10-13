class Author {
  private _id: number;
  @required("The first name field cannot be empty") private _firstname: string;
  @required("The last name field cannot be empty") private _lastname: string;
  @emailRegex("The email field cannot be empty") private _email: string;
  private static_objectCounter: number;

  constructor(firstname: string, lastname: string) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  get firstname(): string {
    return this._firstname;
  }
  set firstname(firstname: string) {
    this._firstname = firstname;
  }
  get lastname(): string {
    return this._lastname;
  }
  set lastname(lastname: string) {
    this._lastname = lastname;
  }
  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }
}

function required(
  message: string = "This field is required"
): PropertyDecorator {
  return (target: object, name: string | symbol) => {
    Object.defineProperty(target, name, {
      get: function () {
        return this[`__${name.toString()}`];
      },
      set: function (value?: string) {
        if (value === null || value === undefined || value.length === 0)
          throw new Error(message);
        this[`__${name.toString()}`] = value;
      },
    });
  };
}

function emailRegex(message: string = "Invalid email"): PropertyDecorator {
  return (target: object, email: string | symbol) => {
    Object.defineProperty(target, email, {
      get: function () {
        return this[`__${email.toString()}`];
      },
      set: function (value: string) {
        var regexp = new RegExp(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if (regexp.test(value)) {
          this[`__${email.toString()}`] = value;
        } else {
          throw new Error(message);
        }
      },
    });
  };
}
