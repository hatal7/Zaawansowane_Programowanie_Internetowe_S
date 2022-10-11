class Artykul {
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    constructor(tytul: string, tresc: string) {
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date();
    }

    get tytul() : string { return this._tytul }
    set tytul(tytul: string) { 
        if (tytul === null || tytul === undefined || tytul.length === 0) {
            throw new Error("Pole tytuł jest wymagane");
        }
        this._tytul = tytul }
    get tresc() : string { return this._tresc }
    set tresc(tresc: string) { this._tresc = tresc }

    public dodajKomentarz(komentarz: Komentarz) : void {

    }

    public pobierzKomentarz() : Komentarz[] {
        return [];
    }
}