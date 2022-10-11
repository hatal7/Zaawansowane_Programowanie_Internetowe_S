class Komentarz {
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    get tresc():string { return this._tresc;}
    set tresc(tresc: string) { this._tresc = tresc;}
    get data():Date { return this._data; }
    set data(data: Date) { this._data = data;}
    get nick():string { return this.nick;}
    set nick(nick: string) { this.nick = nick;}

    constructor(tresc: string, nick: string) {
    }

    dodajOdpowiedzi(odpowiedz: Komentarz):void {

    }

    pobierzOdpowiedzi(): Komentarz[] {
        
    }
}