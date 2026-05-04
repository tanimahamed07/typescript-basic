const createArray = (value: string) => [value];

const createArrayWithGeneric = <T>(value: T) => [value];
const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObj = (value: { id: number; name: string }) => {
  return [value];
};

const arrString = createArrayWithString("Apple");
const numberArray = createArrayWithGeneric(222);
const arrayObj = createArrayWithUserObj({
  id: 123,
  name: "Next Level",
});

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Mezba", false);
const res2 = createArrayTupleWithGeneric("22", "mezba");

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 12,
  name: "tanim",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "ta",
  hasCar: true,
  isMarried: true,
};


console.log(addStudentToCourse(student1))