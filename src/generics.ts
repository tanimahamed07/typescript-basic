// Generics

type GenericArray<T> = Array<T>;

// const friends : string [] = ['x', 'y', 'z'];
// const friends : Array<string> = ['x', 'y', 'z'];
const friends: GenericArray<string> = ["x", "y", "z"];

// const rollNumbers : number[] = [1, 2 ,3, 44]
const rollNumbers: Array<number> = [1, 2, 3, 44];

const isEligibleList: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];
type User = {
  name: string;
  age: number;
};

const userList: GenericArray<User> = [
  {
    name: "Mr. x",
    age: 22,
  },
  {
    name: "Mr. x",
    age: 2,
  },
];
