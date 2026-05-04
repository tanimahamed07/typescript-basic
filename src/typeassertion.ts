let anything: any;

anything = "222";

const kgToGMConverter = (input: string | number) : string | number | undefined=> {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") { 
    const value = parseFloat(input); // split('') er poriborte puru string ke number kora bhalo
    return `converted output is: ${value * 1000}`;
  } 
};

const result = kgToGMConverter(2) as number;
console.log(result); // Output: 2000

const result2 = kgToGMConverter("2") as string;
console.log(result2); // Output: converted output is: 2000

type CustomError = {
    message: string
}


try {

}catch(err){
    console.log((err as CustomError).message);
}