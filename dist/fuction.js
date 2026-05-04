"use strict";
// Function
// arrow function, normal function
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(2, 2);
const addArrow = (num1, num2) => num1 + num2;
addArrow(1, 3);
// object => function => method
const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
poorUser.addBalance(4);
const arr = [1, 4, 5];
const sqrArrayShort = arr.map((elem) => elem * elem);
//# sourceMappingURL=fuction.js.map