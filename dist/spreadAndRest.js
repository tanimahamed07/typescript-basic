"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["imarn", "Karim"];
const schoolFriends = ["Imran", "Debashish", "Shahariya", "Talha"];
const collegeFriends = ["Romjan", "Fasmaun", "Dola"];
friends.push(...schoolFriends);
const user = { name: "Tanim", phoneNo: "0203033" };
const otherInfo = {
    hobby: "outing",
    favoriteColor: "Black",
};
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
//rest operator
// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Sent Invitation to ${friend1}`);
//   console.log(`Sent Invitation to ${friend2}`);
// };
const sendInvite = (...friends) => {
    console.log(friends);
    friends.forEach((friend) => console.log(`Send invitation to ${friend}`));
};
sendInvite("tanim", "imran", "mamun", "shahariya");
//# sourceMappingURL=spreadAndRest.js.map