import {Member} from '../src/Member';
import { ManagerMember } from '../service/ManagerMember';

export class Family{
    _numberMembers: number;
    _numberHouse: number;
    _member: Member;

    constructor(numberHouse: number, numberMembers: number, member: Member) {
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