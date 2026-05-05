// oop : instance of type guard / type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getSleep(numberOfhours: number) {
    console.log(`${this.name} doinik ${numberOfhours} ghonta ghumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHour: number) {
    console.log(`${this.name} doinik ghonta study kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super("name");
  }
  takeClass(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta class nei`);
  }
}


// function guard
const isStudent = (user: Person) => {
    return user instanceof Student
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}




const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. teacher");
getUserInfo(student1);
