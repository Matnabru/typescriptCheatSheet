/*
 SIMPLE DATA TYPES
 -string
 -number
 -boolean
*/

let myString: string;
let myNum: number;
let myBool: boolean;

// Any variable
let myVar: any;

myNum = 2;
myString = 'Hello TS';
myString =  myString.slice(0,6);
// console.log(myString + myNum + myBool);

/*
    ARRAYS
*/
//let strArr: string[];
// Or more like in Java
let strArr : Array<string>;

let numArr: number[];
let bolArr: boolean[];
let anyArr: any[];

strArr = ['Hi', 'there'];
numArr = [2,9];

let strNumTuple: [string,number];
strNumTuple = ["Word", 10];
// This is wrong (it has to match exactly)
//strNumTuple = [10,"Word"];
//strNumTuple = ["Word",3,55];

let myVoid: void;

console.log(strNumTuple);
console.log(myVoid);