class Artykul {
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze: Komentarz[];
    get tytul():string { return this._tytul;}
    set tytul(tytul: string) { this._tytul = tytul;}
    get tresc():string { return this._tresc;}
    set tresc(tresc: string) { this._tresc = tresc;}
    

    constructor(tytul: string, tresc: string) {        
    }

    dodajKomentarz(komentarz: Komentarz):void {
    }

    pobierzKomentarze(): Komentarz[] {

    }
}