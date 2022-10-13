import {Autor} from "./autor"
function required(target: object, name: string) {
    Object.defineProperty(target, name, {
        get: function () { return this[`_${name}`]; },
        set: function (value?: string) {
            if (value === null || value === undefined || value.length === 0)
                throw new Error(`${name} nie może być puste`);
            this[`_${name}`] = value;
        }
    })
}
function requiredForAutor(target: object, name: string) {
    Object.defineProperty(target, name, {
    get: function () { return this['_${name}']; },
    set: function (value?: Autor) {
    if (value === null || value === undefined)
    throw new Error('${name} nie może być puste');
    this['_${name}'] = value;
    }
    })
    }
class Blog{
    private _id: number;
    @required
    private _nazwa: string;

    @requiredForAutor
    private _autor:Autor;
    
    private _artykuly: Artykul[];
    public get nazwa():string{return this._nazwa;}
    public set nazwa(value:string){this._nazwa=value;}
    public autor: Autor;

    public constructor(nazwa:string, autor:Autor){
        this._nazwa=nazwa;
        this._autor=autor;
    }
    dodjaArtykul(artykul:Artykul){}
    pobierzTytulArtykulow():string[]{return [''];}
    pobierzArtykul(tytul:string){}
}