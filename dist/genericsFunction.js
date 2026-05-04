"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createArray = (value) => [value];
const createArrayWithGeneric = (value) => [value];
const createArrayWithString = (value) => [value];
// const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObj = (value) => {
    return [value];
};
const arrString = createArrayWithString("Apple");
const numberArray = createArrayWithGeneric(222);
const arrayObj = createArrayWithUserObj({
    id: 123,
    name: "Next Level",
});
// tuple
const createArrayWithTuple = (param1, param2) => [
    param1,
    param2,
];
const createArrayTupleWithGeneric = (param1, param2) => [
    param1,
    param2,
];
const res1 = createArrayTupleWithGeneric("Mezba", false);
const res2 = createArrayTupleWithGeneric("22", "mezba");
const addStudentToCourse = (studentInfo) => {
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
console.log(addStudentToCourse(student1));
//# sourceMappingURL=genericsFunction.js.map