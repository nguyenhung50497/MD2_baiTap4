import {Member} from './src/Member'
import {ManagerFamily} from './service/ManagerFamily'
import { ManagerMember } from './service/ManagerMember';
import { Family } from './src/Family';
import {Town} from './service/Town'

let readlineSync = require('readline-sync');
let managerMember = new ManagerMember;
let managerfamily = new ManagerFamily;

function addFamily() {
    let menu = `-------------Thêm hộ gia đình--------------
    1. Thêm số nhà
    2. Thêm thành viên
    0. Main Menu`
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question(`Enter your choice: `);
        switch (choice) {
            case 1:
                addNumberHouse();
                break;
            case 2:
                addMember();
                break;
        }
    } while (choice !== 0)
}

function addMember() {
    console.log(`------------------Thêm thành viên---------------`);
    let name = readlineSync.question(`Nhap ho ten: `);
    let age = +readlineSync.question(`Nhap tuoi: `);
    let job = +readlineSync.question(`Nhap nghe nghiep: `);
    let code = +readlineSync.question(`Nhap chung minh nhan dan: `);
    if (managerfamily.checkId(code) === -1) ma  
}

function main() {
    let menu = `--------------------Main Menu--------------------
    1. Thêm Hộ gia đình
    2. Xóa hộ gia đình
    3. Hiện thị hộ gia đình
    4. Tìm hộ gia đình
    0. Thoát`;
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question(`Enter your choice: `);
        switch (choice) {
            case 1:
                addFamily();
                break;
        }
    }
    while (choice !== 0)
}