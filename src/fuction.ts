// Function
// arrow function, normal function

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

addNormal(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(1, 3);

// object => function => method

const poorUser = {
  name: "mezba",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};


poorUser.addBalance(4);


const arr: number[] = [1, 4, 5];

const sqrArrayShort = arr.map((elem: number): number => elem * elem);