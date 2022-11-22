import {Member} from '../src/Member'

export class Family{
    _numberMembers: number;
     _numberHouse: number;

    constructor(numberHouse: number, numberMembers: number) {
        this._numberMembers = numberMembers;
        this._numberHouse = numberHouse;
    }

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