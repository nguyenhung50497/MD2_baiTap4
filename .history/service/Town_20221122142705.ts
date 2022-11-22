import {Member} from'../src/Member'
import {Family} from './Family'

export class Town {
    listFamilies: Family[] = [];

    constructor() {}

    addFamily(family: Family): void {
        this.listFamilies.push(family);
    }

    findById(id: number): number {
        for (let i = 0; i < this.listFamilies.length; i++) {
            if (this.listFamilies[i]._ === id) {
                return i;
            }
        }
        return -1;
    }
}