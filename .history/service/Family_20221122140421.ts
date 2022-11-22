import {Member} from '../src/Member'

export class Family<T> {
    private _numberHouse: number;
    private listMembers: T[];

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
    findByCode(code: number): number {
        for (let i = 0; i < this.listMenbers.length; i++) {
            if (this.listMenbers[i].code === code) {
                return i;
            }
        }
        return -1;
    }
}