import {Member} from '../src/Member';
import { ManagerMember } from '../service/ManagerMember';

export class Family{
    _numberMembers: number;
    _numberHouse: number;
    _member: ManagerMember[];

    constructor(numberHouse: number, numberMembers: number, member: ManagerMember) {
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
    public getMember(): ManagerMember {
        return this._member;
    }
    public setMember(member: ManagerMember) {
        this._member = member;
    }
}