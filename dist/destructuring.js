"use strict";
// object destructuring
// array destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        firstName: 'Tanim',
        middleName: 'Ahamed',
        lastName: 'Mahbub',
    },
    gender: 'male',
    favoriteColor: 'black'
};
// const myFvtClr = user.favoriteColor;
// const myMiddleName = user.name.middleName;
const { favoriteColor: myFavoriteColor, name: { middleName: myMiddleName } } = user;
console.log(myFavoriteColor, myMiddleName);
const friends = ['rahim', 'karim', 'mahim'];
const myBestFriend = friends[1];
const [, , c] = friends;
console.log(c);
//# sourceMappingURL=destructuring.js.map