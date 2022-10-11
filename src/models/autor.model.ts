class Autor {
    private _id: number;
    @required("Pole imię nie może być puste") _imie: string;
    @required ("Pole nazwisko nie moze byc puste") private _nazwisko: string;
    @emailRegex ("Niepoprawny email") private _email: string;

    constructor(imie: string, nazwisko: string) {
        this._imie = imie;
        this._nazwisko = nazwisko;
    }

    get imie(): string { return this._imie } 
    set imie(imie: string) { this._imie = imie }
    get nazwisko(): string { return this._nazwisko } 
    set nazwisko(nazwisko: string) { this._nazwisko = nazwisko }
    get email(): string { return this._email } 
    set email(email: string) { this._email = email }
}

function required(message: string = "To pole jest wymagane") : PropertyDecorator
{
    return (target: object, name: string | symbol) => {
        Object.defineProperty(target, name, {
            get: function () { return this[`__${name.toString()}`]; },
            set: function (value?: string) {
                if (value === null || value === undefined || value.length === 0)
                    throw new Error(message);
                    this[`__${name.toString()}`] = value;
            }
        })
    }
}

function emailRegex(message: string = "Niepoprawny email") : PropertyDecorator
{
    return (target: object, email: string| symbol) => {
        Object.defineProperty(target, email, {
            get: function () { return this[`__${email.toString()}`];},
            set: function (value: string) {
                var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                
                if (regexp.test(value)) {
                    this[`__${email.toString()}`] = value;
                }
                else {
                    throw new Error(message);
                }
            }
        })
    }
}