// ? ternary operation : desition making
// ?? ; nullish coalescing operator null/undefined
// / optional chaining

const userAge = 21;
// const isLegalFoMarry = (age: number) => {
//   if (age >= 21) {
//     console.log("you are eligible");
//   } else {
//     console.log('you are not eligible');
//   }
// };

// isLegalFoMarry(31);

const isLegalFoMarry = (age: number) => {
  const result = age >= 21 ? "You are eligible" : "you are not eligible";
  console.log(result);
};
isLegalFoMarry(31);

const userTheme = undefined;

const selectedTheme = userTheme ?? "Light";

console.log(selectedTheme);

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest !";
const resultWithNullish = isAuthenticated ?? "Your are guest";

// optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: number;
  };
} = {
  address: {
    city: "Dhaka",
    town: "bonani",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode)
