type User = {
  name: string;
  age: number;
};

// interface : object type: array, object, function
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

const user: IUser = {
  name: "Tanim",
  age: 20,
};

const user1: UserWithRole = {
  name: "Tanim",
  age: 20,
  role: "admin",
};

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user2: IUserWithRole = {
  name: "Tanim",
  age: 20,
  role: "admin",
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

type Add = (num1: number, num2: number)=> number

interface IAdd {
    (num1: number, num2:number): number
}


const add: IAdd = (num1, num2) => num1 + num2 ;


type Friends = string[];




interface IFriends {
    [index: number] : string
}

const friends: IFriends = ['A', "B", 'C'];
