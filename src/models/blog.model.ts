class Blog {
    private _id: number;
    @required("Pole nie może być puste") private _nazwa: string;
    @required() private _autor: Autor;
    private _artykuly: Artykul[];

    constructor(nazwa: string, autor: Autor) {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    get nazwa() : string { return this._nazwa };
    set nazwa(nazwa: string) { this._nazwa = nazwa } 
    get autor() : Autor { return this._autor };
    set autor(autor: Autor) { this._autor = autor }

    public dodajArtykul(artykul: Artykul) : void {

    }

    public pobierzTytulyArtykulow() : string[] {
        return ["test"];
    }

    public pobierzArtykul(tytul: string) {

    }
}


