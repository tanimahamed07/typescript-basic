class Person {
  name: string;
  age: Number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(`${this.name} ato ${numberOfHours} ghumay`);
  }
}

class Student extends Person {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}
class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string , designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numberOfClass: number) {
    console.log(`${this.name} ${numberOfClass} ghonta class nei`);
  }
}

const teacher1 = new Teacher(
  "Mr. Smart Teacher",
  26,
  "Bangladeshi",
  "Senior Teacher",
);

teacher1.takeClass(4);
const student1 = new Student("Mr. Tanim", 20, "Bangladesh" , 3);

student1.getSleep(15);
