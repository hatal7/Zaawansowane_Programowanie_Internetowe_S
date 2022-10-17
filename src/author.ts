class Autor {
    private _id: number;
    @require("Pole imie nie może być puste") private _imie: string;
    @require("Pole nazwisko nie może być puste") private _nazwisko: string;
    @require("Pole email nie może być puste") private _email: string;

    

    private static Counter: number;

    get imie(): string { return this._imie; }
    set imie(value: string) { this._imie = value; }

    get nazwisko(): string { return this._nazwisko; }
    set nazwisko(value: string) { this._nazwisko = value; }

    get email(): string { return this._email; }
    set email(value: string) { this._email = value; }

    constructor(imie: string, nazwisko: string) {
        this._imie = imie;
        this._nazwisko = nazwisko;
    }
}