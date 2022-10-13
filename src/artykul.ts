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
function requiredForData(target: object, name: string) {
    Object.defineProperty(target, name, {
    get: function () { return this['_${name}']; },
    set: function (value?: Date) {
        const now = new Date();
    if (value === null || value === undefined || value.getFullYear !==now.getFullYear
        || value.getMonth !== now.getMonth || value.getDay !== now.getDay)
    throw new Error('Nieprawidlowa data- Data musi byc aktualna');
    this['_${name}'] = value;
    }
    })
    }
class Artykul {
    private _id: number;

    @required
    private _tytul: string;

    private _tresc:string;

    @requiredForData
    private _dataUrodzenia: Date;
    
    private _komentarze: Komentarz[];
    public get tytul():string{return this._tytul;}
    public set tytul(value:string){this._tytul=value;}
    public get tresc():string{return this._tresc;}
    public set tresc(value:string){this._tresc=value;}
    constructor(tytul:string, tresc:string) {
        this._tytul=tytul;
        this._tresc=tresc;
    }
    dodajKomentarz(komentarz:Komentarz):void{}
    //pobierzKomentarze():Komentarz[]{}
}