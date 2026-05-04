"use strict";
// keyof : type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = 'bike';
const user = {
    id: 333,
    name: 'tanim',
    address: {
        city: 'ctg'
    }
};
// const myName = user.name;
const myId = user['id'];
const myName = user['name'];
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObj(user, 'name');
console.log(result);
//# sourceMappingURL=keyOfConstraint.js.map