import {Member} from '../src/Member';
import { ManagerMember } from '../service/ManagerMember';

export class Family{
    _numberMembers: number;
    _numberHouse: number;
    _member: Member[];

    constructor(numberHouse: number, numberMembers: number, member: Member[]) {
        this._numberMembers = numberMembers;
        this._numberHouse = numberHouse;
        this._member = member;
    }

     public getNumberHouse(): number {
        return this._numberHouse;
    }
    public setNumberHouse(numberHouse: number) {
        this._numberHouse = numberHouse;
    }

    public getNumberMembers(): number {
        return this._numberMembers;
    }

    public setNumberMembers(number: number) {
        this._numberMembers = number;
    }
    public getMember(): Member[] {
        return this._member;
    }
    public setMember(member: Member) {
        this._member = member;
    }
}