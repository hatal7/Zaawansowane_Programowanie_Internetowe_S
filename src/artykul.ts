class Artykul {
    private _id: number;
    private _tytul: string;
    private _tresc:string;
    private _dataUrodzenia: Date;
    private _komentarze: Komentarz[];
    public get tytul():string{return this._tytul;}
    public set tytul(value:string){this._tytul=value;}
    public get tresc():string{return this._tresc;}
    public set tresc(value:string){this._tresc=value;}
    constructor(tytul:string, tresc:string) {
        
    }
    dodajKomentarz(komentarz:Komentarz):void{}
    pobierzKomentarze():Komentarz[]{}
}