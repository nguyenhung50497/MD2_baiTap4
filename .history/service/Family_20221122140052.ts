import {Member} from '../src/Member'

export class Family<T> {
    private numberHouse: number;
    private listMenbers: T[];

    constructor(numberHouse: number) {
        this.numberHouse = numberHouse;
    }

    public getNumberHouse(): number {
        return this.numberHouse;
    }
    public setNumberHouse(number: number) {
        this.numberHouse
}