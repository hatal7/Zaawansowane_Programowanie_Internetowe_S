class Artykul {

    _id: number;
    _tytul: string;
    _tresc: string;
    _dataUtworzenia: Date;
    _komentarze: Komentarz[];

    get tytul():string { return this.tytul; }
    set tytul(tytul:string) { this.tytul = tytul; }
    get tresc():string { return this.tresc; }
    set tresc(tresc:string) { this.tresc = tresc; }

    constructor(tytul:string, tresc:string) {

    }

    dodajKomentarz(komentarz:Komentarz) : void {

    }

    pobierzKomentarze() : Komentarz[] {
        return ['a','b']
    }

}