import { Member } from '../src/Member';

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

    removeMember(name: string): void {
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Khong tim thay');          
        }
        else {
            this.listMembers.splice(index, 1);
            console.log('Xoa thanh cong');
            
        }
    }

    editMember(name: string, member: Member): void {
        let index = this.findByName(name);
    }

    findByName(name: string): number {
        for (let i = 0; i < this.listMembers.length; i++) {
            if (this.listMembers[i]._name === name) {
                return i;
            }
        }
        return -1;
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