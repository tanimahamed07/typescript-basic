// spread operator

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

const sendInvite = (...friends: string[]) => {
  console.log(friends);
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`),
  );
};
sendInvite("tanim", "imran", "mamun", "shahariya");
