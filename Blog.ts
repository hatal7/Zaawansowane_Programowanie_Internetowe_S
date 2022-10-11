class Blog {
    private _id:number;
    private _nazwa:string;
    private _autor:string;
    private _artykuly:Artykul[];
    get nazwa():string { return this._nazwa;}
    set nazwa(nazwa: string) { this._nazwa = nazwa;}
    get autor():string { return this._autor; }
    set autor(autor: string) { this._autor = autor}

    constructor(nazwa:string, autor:Autor) {
    }

    public dodajArtykul(artykul: Artykul):void {
    }

    public pobierzTytulyArykulow(): string[] {
    }
    
    pobierzArtykul(tytul: string) {
    }

}