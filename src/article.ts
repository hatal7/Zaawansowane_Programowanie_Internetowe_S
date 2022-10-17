class Artykul {
    private _id: number;
    @require("Pole tytul nie może być puste") private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date = new Date();
    private _komentarze: Komentarz[];
    private static Counter: number;

    get tytul(): string { return this._tytul; }
    set tytul(value: string) { this._tytul = value; }

    get tresc(): string { return this._tresc; }
    set tresc(value: string) { this._tresc = value; }

    constructor(tytul: string, tresc: string) {
        this._tytul = tytul;
        this._tresc = tresc;
    }

    function addComment(): void {
        
    }

    function getComments(): Comment[]{

    }
}