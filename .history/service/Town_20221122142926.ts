import {Member} from'../src/Member'
import {Family} from './Family'

export class Town {
    listFamilies: Family[] = [];

    constructor() {}

    addFamily(family: Family): void {
        this.listFamilies.push(family);
    }

    removeFamily(number: number): void {
        let 
    }

    findById(id: number): number {
        for (let i = 0; i < this.listFamilies.length; i++) {
            if (this.listFamilies[i]._numberHouse === id) {
                return i;
            }
        }
        return -1;
    }
}