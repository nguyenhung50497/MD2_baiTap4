import { Member } from '../src/Member';

export class Family {
     _numberMembers: number;
     _numberHouse: number;
     listMembers: Member[] = [];

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

    // editMember(name: string, member: Member): void {
    //     let index = this.findByName(name);
    //     if (index === -1) {
    //         console.log('Khong tim thay');
    //     }
    //     else {

    //     }
    // }

    showAllMembers(): Member[] {
        return this.listMembers;
    }

    findMemberByName(name: string): void{
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Khong tim thay');            
        }
        else {
            console.log('Da tim thay');
            console.log(this.listMembers[index]);            
        }
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