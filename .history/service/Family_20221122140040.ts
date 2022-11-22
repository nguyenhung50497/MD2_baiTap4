import {Member} from '../src/Member'

export class Family<T> {
    private numberHouse: number;
    private listMenbers: T[];

    constructor(numberHouse: number) {
        this.numberHouse = numberHouse;
    }

    public get numberHouse(): number {
        return this.numberHouse;
    }
}