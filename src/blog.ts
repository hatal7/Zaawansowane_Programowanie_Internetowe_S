class Blog{
    private _id: number;
    private _nazwa: string;
    private _autor:Autor;
    private _artykuly: Artykul[];
    public get nazwa():string{return this._nazwa;}
    public set nazwa(value:string){this._nazwa=value;}
    public autor: Autor;

    public constructor(nazwa:string, autor:Autor){}
    dodjaArtykul(artykul:Artykul){}
    pobierzTytulArtykulow():string[]{}
    pobierzArtykul(tytul:string){}
}