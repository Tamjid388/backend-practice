"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
const res = add(3, 2);
console.log(res);
const user = {
    name: "tamjid",
    balance: 10,
    addBalance(value) {
        const total = this.balance + value;
        return total;
    },
};
let result = user.addBalance(400);
const arr = [1, 2, 4, 5];
const sqrArray = arr.map((elem) => elem * 10);
//# sourceMappingURL=function.js.map