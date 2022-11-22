export class Member{
     _name:string;
     _age:number;
     _job:string;
     _code:number;

    constructor(name:string, age:number, job:string, code:number) {
        this._name = name;
        this._age = age;
        this._job = job;
        this._code = code;
    }

    public getName():string { 
        return this._name; 
    }
    public setName(name:string) {
        this._name = name;
    }
    public getAge():number {
        return this._age;
    }
    public setAge(age:number) {
        this._age = age;
    }
    public getJob():string {
        return this._job;
    }
    public setJob(job:string) {
        this._job = job;
    }
    public getCode():number {
        return this._code;
    }
    public setCode(code:number) {
        this._code = code;
    }
    checkId(index:number):number{
        let flag: number = 0;
        for (let i = 0; i < this.listMembers.length; i++) {
            if (this.listMembers[i]._code === index){
                flag ++;
            }
        }
        if(flag >= 1) return 1
        else return -1;
    }
}