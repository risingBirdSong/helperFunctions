//learning with Basarat

type numberOrNot <T> = T extends number ? "it's a number" : "not a number";

type myNum = numberOrNot<number>;
type notANumber = numberOrNot<string>;

// its similar to this in javascript
const isNumber = (x:any) => typeof x === "number" ? "number" : "not number";
console.log("is number?", isNumber(3));
console.log("is number?", isNumber("nope"));

console.log("---");

type whatType <T> =
  T extends number ? "im number" :
  T extends string ? "im string" : 
  T extends boolean ? "im boolean" :
  "im other";


type aString = whatType<"hello world im a string">
type aNum = whatType<42>;
type aBool = whatType<true>;
type anOther = whatType<{}>
