export class Family{
    _numberMembers: number;
     _numberHouse: number;

     

     public getNumberHouse(): number {
        return this._numberHouse;
    }
    public setNumberHouse(number: number) {
        this._numberHouse;
    }

    public getNumberMembers(): number {
        return this._numberMembers;
    }

    public setNumberMembers(number: number) {
        this._numberMembers = number;
    }
}