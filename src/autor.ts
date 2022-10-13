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


export class Autor {
    private _id: number;
    @required
    private _imie: string;
    @required
    private _nazwisko: string;

    private _email: string;

    public get imie(): string { return this._imie; }
    public set imie(value: string) { this._imie = value; }

    public get nazwisko(): string { return this._nazwisko; }
    public set nazwisko(value: string) { this._nazwisko = value; }

    public get email(): string { return this._email; }
    public set email(value: string) {
        if (value === null || value === undefined || value.length === 0)
            throw new Error('Email nie może być puste');
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let result = regexp.test(value);
        console.log(result);
        if(result == false){
            throw new Error('Email jest niepoprawny');
        }
        this._email = value;
    }

    public constructor(imie: string, nazwisko: string, eemail: string) {

        this._imie = imie;
        this._nazwisko = nazwisko;
        this.email = eemail;
    }
}

