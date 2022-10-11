class Blog {

    _id: number;
    _nazwa: string;
    _autor: Autor;
    _artykuly: Artykul[];

    get nazwa():string { return this.nazwa; }
    set nazwa(nazwa:string) { this.nazwa = nazwa; }
    get author():Autor { return this.author; }
    set author(author:Autor) { this.author = author; }

    constructor(nazwa:string, autor:Autor) {
        this._nazwa = nazwa;
        this._autor = autor;
     }

     dodajArtykul(artykul:Artykul) : void {

     }

    pobierzTytulArtykulow() : string[] {
        return ['a','b']
    }

    pobierzArtykul(tytul: string) {

    }

}