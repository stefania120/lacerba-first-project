console.log("Hello World!");

let myVar: number = 3;
myVar += 10;

console.log("myVar = ", myVar);

interface MyInterface {
    myNumber: number;
    myString: string;
}

let myInterface: MyInterface = {
    myNumber: 10,
    myString: "Hello world"
};

console.log("myNumber = ", myInterface.myNumber); // myInterface.myNumber = "Hello world"; // Error: Type 'string' is not assignable to type 'number'
console.log("myString = ", myInterface.myString); // myInterface.myString = 10; // Error: Type 'number' is not assignable to type 'string'


