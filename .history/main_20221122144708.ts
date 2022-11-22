import {Member} from './src/Member'
import {Family} from './service/Family'
import {Town} from './service/Town'

let readlineSync = require('readline-sync');
let town: Town[] = [];
let family: Family[] = [];



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
}