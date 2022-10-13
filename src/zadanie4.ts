export class Zad4{
    private _liczba: number = 0;

    
    public get liczba () : number {
        return this._liczba;
    }
    
    public set liczba(value : number) {
        this._liczba=value;
    }
    
    public constructor(liczba:number){
        this._liczba = liczba;
    }
    /**
     * addOne
     */

    public addOne() {
       this._liczba += 1;
        return this._liczba;
    }
    public minusOne(){
        this.liczba -=1;
        return this._liczba;
    }
}

