import { Member } from '../src/Member';
import { ManagerMember } from './ManagerMember';
import { Family } from '../src/Family';

export class ManagerFamily {
     listFamilies: Family[] = [];

     constructor() {}

    addFamily(family: Family): void {
        this.listFamilies.push(family);
    }

    removeFamily(number: number): void {
        let index = this.findById(+number);
        if (index === -1) {
            console.log('Khong tim thay');            
        }
        else {
            this.listFamilies.splice(index, 1);
            console.log('Xoa thanh cong');            
        }
    }

    showAllFamilies(): void {
        console.log();
        
    }

    findFamily(id: number): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Khong tim thay')            
        }
        else {
            console.log('Da tim thay');
            console.log(this.listFamilies[index]);            
        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.listFamilies.length; i++) {
            if (this.listFamilies[i]._numberHouse === id) {
                return i;
            }
        }
        return -1;
    }
    checkId(index:number):number{
        let flag: number = 0;
        for (let i = 0; i < this.listFamilies.length; i++) {
            if (this.listFamilies[i]._numberHouse === index){
                flag ++;
            }
        }
        if(flag >= 1) return 1
        else return -1;
    }
}