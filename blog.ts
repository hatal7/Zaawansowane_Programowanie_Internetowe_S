class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykul:Artykul;

    get nazwa():string {return this._nazwa};
    set nazwa(value:string) {this._nazwa = value};
    
    get autor():Autor {return this._autor};
    set autor(value:Autor) {this._autor = value};

    public constructor(nazwa:string, autor:Autor){
        this._nazwa = nazwa;
        this._autor = autor;
    }  

    public dodajArtykul (artykul:Artykul):void{

    }

    public pobierzTytulyArtykulow ():string[]{
        
        return
    }

    public pobierzArtykul (tytul:string){

    }
}
