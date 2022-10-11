
class Autor {
    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;
    
    get imie():string { return this._imie;}
    set imie(imie: string) { this._imie = imie;}
    get nazwisko():string { return this._nazwisko;}
    set nazwisko( nazwisko: string) { this._nazwisko = nazwisko;}
    get email():string { return this.email;}
    set email(email: string) { this.email = email;}

    @validate
    test(@required test: boolean) {

    }

    constructor(imie: string, nazwisko: string) {
    }

}