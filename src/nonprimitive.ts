// array, object

// ts - tuple

let name: string[] = ["tanim", "tauhid", "ariyan"];

name.push("imran");

let mixedArr: (string | number)[] = ["eggs", 12, "mild", 1, "sugar", 2];

// mixedArr.push(true)

let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "wife"];

let destination: [string, string, number] = ["Dhaka", "Ctg", 3];

// reference type : object

// const user: {
//   organization: "Programing Hero"; // value as a type
//   //   type: literal type
//   firstName: string;
//   middleName?: string; // optional
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programing Hero",
//   firstName: "Tanim",
//   lastName: "Mahbub",
//   isMarried: true,
// };

// user.organization = "Programing Hero Next Level";

// console.log(user);


const user: {
 readonly organization: string; // value as a type
// access modifier
  firstName: string;
  middleName?: string; // optional
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programing Hero",
  firstName: "Tanim",
  lastName: "Mahbub",
  isMarried: true,
};

// user.organization = "Programing Hero Next Level";

console.log(user);