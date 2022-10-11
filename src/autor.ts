class Autor {

    _id: number;
    _imie: string;
    _nazwisko: string;
    _email: string;

    get imie():string { return this.imie; }
    set imie(imie:string) { this.imie = imie; }
    get nazwisko():string { return this.nazwisko; }
    set nazwisko(nazwisko:string) { this.nazwisko = nazwisko; }
    get email():string { return this.email; }
    set email(email:string) { this.email = email; }
    

    constructor(imie: string, nazwisko:string) { 

    }

}