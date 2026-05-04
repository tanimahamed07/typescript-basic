"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "222";
const kgToGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const value = parseFloat(input); // split('') er poriborte puru string ke number kora bhalo
        return `converted output is: ${value * 1000}`;
    }
};
const result = kgToGMConverter(2);
console.log(result); // Output: 2000
const result2 = kgToGMConverter("2");
console.log(result2); // Output: converted output is: 2000
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=typeassertion.js.map