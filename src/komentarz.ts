class Komentarz {
    private _tresc:string;
    private _data:Date;
    private _odpowiedzi:Komentarz[];
    private _nick:string;
    public get tresc():string{return this._tresc;}
    public set tresc(value:string){this._tresc=value;}
    constructor(tresc:string, nick:string) {}
    dodajOdpowiedz(odpowiedz:Komentarz):void{}
    //pobierzOdpowiedzi():Komentarz[]
}