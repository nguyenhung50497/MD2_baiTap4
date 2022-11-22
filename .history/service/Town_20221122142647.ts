import {Member} from'../src/Member'
import {Family} from './Family'

export class Town {
    listFamilies: Family[] = [];

    constructor() {}

    addFamily(family: Family): void {
        this.listFamilies.push(family);
    }

    findById(code: number): number {
        for (let i = 0; i < this.listMembers.length; i++) {
            if (this.listMembers[i]._code === code) {
                return i;
            }
        }
        return -1;
    }
}