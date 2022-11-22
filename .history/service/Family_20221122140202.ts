import {Member} from '../src/Member'

export class Family<T> {
    private _numberHouse: number;
    private listMenbers: T[];

    constructor(numberHouse: number) {
        this._numberHouse = numberHouse;
    }

    public getNumberHouse(): number {
        return this._numberHouse;
    }
    public setNumberHouse(number: number) {
        this._numberHouse;
    }

    addMember(member: T): void {
        this.listMenbers.push(member);
    }
    find
}