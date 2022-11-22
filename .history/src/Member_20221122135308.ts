export class Member{
    private _name:string;
    private _age:number;
    private _job:string;
    private _code:number;

    constructor(name:string, age:number, job:string, code:number) {
        this._name = name;
        this._age = age;
        this._job = job;
        this._code = code;
    }

    public sat getName():string { 
        return this._name; 
    }
}