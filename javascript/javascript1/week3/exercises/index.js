// // console.log('hello clsss 20')
// // const numbers = [1, 2, 3, 4, 5];

// // for (const myNum of numbers) {
// //   console.log(typeof myNum.toString()) // string
// // }

// // console.log(typeof numbers[0]) // number

// // console.log(numbers.join(';'))

// // let str = '';
// // for (const myNum of numbers) {
// //   str = str + myNum.toString() + ';'; 
// // }

// // console.log('alternative join', str);

// // const fruits = ["Apples", "Pear", "Orange"];
// // // console.log(fruits.length);
// // // push a new value into the "copy"
// // const shoppingCart = fruits;
// // shoppingCart.push("Banana");
// // // console.log(shoppingCart);
// // // what's in fruits?
// // console.log('fruits length', fruits);

// // const shoppingCart = ["Apples", "Pear", "Orange"];


// // OBJECT
// const ball1 = {
//   // key: value
//   color: 'red',
//   funcOnObject: function() {
//     console.log(this.color);
//   }
// };

// console.log(ball1['color']);
// console.log(ball1.color);

// ball1['shape'] = 'square'

// // console.log(ball1);
// // console.log(typeof ball1.funcOnObject())



// for (const classmate of myClassmates) {
//   console.log(classmate.name);
//   console.log(classmate.age);
// }


// console.log(myClassmates[0]);
// console.log(myClassmates[0].length);

const vahab = {
  name: 'Vahab',
  age: 50,
};

// console.log(vahab.name);

// console.log(Object.getOwnPropertyNames(vahab))
// const myClassmates = [
//   vahab,
//   4, 
//   'testString'
// ] 
// vahab.classSpokesPerson = true;

// // console.log(vahab);
// delete vahab.classSpokesPerson

// // console.log(Object.values(vahab))

// Make array of mentors
const mentors = [
  {
    name: 'Ida',
    role: 'TA',
  },
  {
    name: 'Estefania',
    role: 'Homework reviewer'
  },
  {
    name: 'Ali',
    role: 'Homework reviewer'
  }
]

// go over array of classmates: for loop
// for (const mentor of mentors) {
//   // Check if name is equal to Ali
//   if (mentor.name === "Ali") {
//     console.log('Yes, Ali is in the mentors')
//   }
//   // if true -> console.log(true) 
// }

const isAliInMentors = mentors.find((mentor) => {
  return mentor.name === 'Ali'
})

// console.log(isAliInMentors)

// Access the second mentor
const secondMentor = mentors[1]
console.log(secondMentor);

// Change the role of that mentor
secondMentor.age = 90
// console.log(secondMentor);
secondMentor.role = 'Homework helper'
// console.log(secondMentor);
// console.log(mentors);

// Loop over the array
// access the second mentor
// change the role of that mentor
// mentors.forEach((mentor) => {
//   if (mentor.name === 'Estefania') {
//     mentor.role = 'Software engineer'
//   }
// })

console.log(mentors);

mentors.forEach(function(mentor) {
  if (mentor.name === 'Estefania') {
    mentor.role = 'Online instructor'
  } 
})

function printName(name) {
  console.log(name)
}

const printNameArrow = (name) => {
  console.log(name);
}

console.log(printName('Joachim'))
console.log(printNameArrow('Joachim'))