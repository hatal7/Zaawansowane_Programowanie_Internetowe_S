class Komentarz {

    _tresc: string;
    _data: Date;
    _odpowiedzi: Komentarz[];
    _nick: string;

    get tresc():string { return this.tresc; }
    set tresc(tresc:string) { this.tresc = tresc; }
    get date():Date { return this.date; }
    set date(date:Date) { this.date = date; }
    get nick():string { return this.nick; }
    set nick(nick:string) { this.nick = nick; }


    constructor(tresc:string, nick:string){
        
    }

    dodajOdpowiedz(odpowiedz: Komentarz) : void {

    }

    pobierzOdpowiedzi(odpowiedz: Komentarz) : void {

    }
}