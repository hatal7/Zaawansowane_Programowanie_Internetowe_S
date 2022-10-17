class Blog {
    private _id: number;
    @require("Pole nazwa nie może być puste") private _nazwa: string;
    @require("Autor musi być podany") private _autor: Autor;
    private _artykuly: Artykul[];
    private static Counter: number;

    get nazwa(): string { return this._nazwa; }
    set nazwa(value: string) { this._nazwa = value; }

    get autor(): Autor { return this._autor; }
    set autor(value: Autor) { this._autor = value; }

    constructor(nazwa: string, autor: Autor) {
        this._nazwa = nazwa;
        this._autor = autor;
    }

    function addArticle():void {
        
    }

    function getArticleTitles():string[]{

    }

    function getArticle(): Article{

    }

}