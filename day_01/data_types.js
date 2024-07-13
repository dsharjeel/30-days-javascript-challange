var num1 = 1;
// console.log(num1);

let str1 = "Hello to JavaScript";
// console.log(str1);

const bool1 = true;
// console.log(bool1);


let num2 = Number(1);
let str2 = String("Hello to JavaScript");
let bool2 = Boolean(true);
let bigInt = BigInt(12345678901234567890);
let sym = Symbol("symbol");
let obj = Object({name: "John"});
let arr = Array(1, 2, 3, 4, 5);
let func = Function();

// console.log([num2, str2, bool2, bigInt, sym, obj, arr, func]);

// console.log(`num2 is type of ${typeof num2}`);
// console.log(`str2 is type of ${typeof str2}`);
// console.log(`bool2 is type of ${typeof bool2}`);
// console.log(`bigInt is type of ${typeof bigInt}`);
// console.log(`sym is type of ${typeof sym}`);
// console.log(`obj is type of ${typeof obj}`);
// console.log(`arr is type of ${typeof arr}`);
// console.log(`func is type of ${typeof func}`);


let num3 = 1;
// console.log(`num3 initial value = ${num3}`);
num3 = 5;
// console.log(`num3 reassigned = ${num3}`);

let num4 = 1;
let num5 = num4;

// console.log(`num4 = ${num4}`);
// console.log(`num5 = ${num5}`);

num4 = 5;
// console.log(`num4 reassigned = ${num4}`);
// console.log(`num5 = ${num5}`);

num5 = 10;
// console.log(`num4 = ${num4}`);
// console.log(`num5 reassigned = ${num5}`);


const num6 = 1;
// console.log(`num6 initial value = ${num6}`);
// num6 = 5; // TypeError: Assignment to constant variable is not allowed

const num7 = 1;
const num8 = num7;

// console.log(`num4 = ${num4}`);
// console.log(`num5 = ${num5}`);
