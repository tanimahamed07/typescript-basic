// map

const arrayOfNum: number[] = [1, 3, 5];

const arrayOfString: string[] = ["2", "3", "5"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((number) =>
  number.toString(),
);

// type Area = {
//   height: number;
//   width: number;
// };

type AreaOfString = {
  height: string;
  width: string;
};


// type height = AreaOfNum['height']

// type AreaOfStringMap ={
//     [key in 'height' | "width"] : string;
// }
type Area<T> ={
    [key in keyof T] : T[key];
}

const area1: Area<{height: string; width: string}> = {
    height: "50",
    width: "40",
};