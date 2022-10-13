class Article {
    private _id:number;
    private _title:string;
    private _content: string;
    private _creationDate: Date;
    private _comments: Comment[];
    private static _objectCounter:number;

    constructor(id:number, title:string, content:string, creationDate:Date, comments:Comment) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._creationDate = creationDate;
    }

    addComment() {
        
    }
}