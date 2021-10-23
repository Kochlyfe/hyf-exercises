// Exercise 1 -- Types
console.log('--------- EXERCISE 1 -----------');
console.log(typeof 3); // number
console.log(typeof -33); // number
console.log(typeof '3'); // string
const threeConst = 3;
console.log(threeConst); // 3
let threeLet = 3;
console.log(threeLet); // 3
console.log(typeof 'console.log("console.log(console.log(""))")'); // string
console.log(typeof typeof 45); // string
const names = ['benjamin', 'Christopher'];
console.log(typeof names[0]); // string
console.log(typeof [3][0]); // number
console.log(typeof true); // boolean

// Exercise 2 -- Follow up exercises
console.log('--------- EXERCISE 2 -----------');
// 1. Create a variable that is 24 times 55
const twentyFourTimes55 = 24 * 55;

// 2. Create a const and set it to be equal to your name
const myName = 'Joachim';

// 3. With javascript console.log the first character in your name
console.log('first character in my name', myName[0]);

// 4. Create an array with 3 strings, three numbers and three booleans
const mixedArray = ['Hello', 'Class 20', 'of HYF', 1, 2, 3, true, false, true];

// 5. console.log the 4th element in the array made above
console.log(mixedArray[3]);

// 6. (Optional) with JS console.log the last character in your name
console.log('last character in my name', myName[myName.length - 1]);

// Exercise 3 - Fix the errors
console.log('--------- EXERCISE 3 -----------');
let name = 'benjamin';
name = 'benjamin-better';

const pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaPrice - 10;

const users = ['peter', 'Johnny', 'Børge'];

const lastUser = users[2];

console.log(name);
console.log(pizzaPriceDiscounted);
console.log(lastUser);