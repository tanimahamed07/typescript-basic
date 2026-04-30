type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

// const user1: {
//   id: number;
//   name: {
//     firstName: string;
//     lastName: string;
//   };
//   gender: "male" | "female";
//   contactNo: string;
//   address: {
//     division: string;
//     city: string;
//   };
// } = {
//   id: 221,
//   name: {
//     firstName: "Mr.",
//     lastName: "x",
//   },
//   gender: "male",
//   contactNo: "0150048504",
//   address: {
//     city: "Chattogram",
//     division: "Chattogram",
//   },
// };

const user1: User = {
  id: 221,
  name: {
    firstName: "Mr.",
    lastName: "x",
  },
  gender: "male",
  contactNo: "0150048504",
  address: {
    city: "Chattogram",
    division: "Chattogram",
  },
};

// function

type AddFunction = (num1: number, num2: number) => number;

const add: AddFunction = (num1, num2) => num1 + num2;

add(2, 4);
