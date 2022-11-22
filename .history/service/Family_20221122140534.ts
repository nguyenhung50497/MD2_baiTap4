import {Member} from '../src/Member'

export class Family {
    private _numberHouse: number;
    private listMembers: Member[];

    constructor(numberHouse: number) {
        this._numberHouse = numberHouse;
    }

    public getNumberHouse(): number {
        return this._numberHouse;
    }
    public setNumberHouse(number: number) {
        this._numberHouse;
    }

    addMember(member: Member): void {
        this.listMembers.push(member);
    }
    findByCode(code: number): number {
        for (let i = 0; i < this.listMembers.length; i++) {
            if (this.listMembers[i]._code === code) {
                return i;
            }
        }
        return -1;
    }
}