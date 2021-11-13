const numbers = [1, 2, 3, 4, 5];

// Example of how we can use the for...of loop and JavaScript built-in methods.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString for documentation
// Remember "myNum" is just a number I chose to give it. It could be called anything and it will still loop over the elements in the numbers array
for (const myNum of numbers) {
  console.log(typeof myNum.toString()) // will print string 5 times
}

console.log(typeof numbers[0]) // number

// Join array of numbers to a string, using the built-in JavaScript method.
console.log(numbers.join(';')) // 1;2;3;4;5

// Join array of numbers to a string, using a for..of loop
let str = '';
for (const myNum of numbers) {
  str = str + myNum.toString() + ';'; 
}

console.log('"Homemade" join', str); // 1;2;3;4;5; <-- notice the end here, we have another ;

// Example of "pass-by-reference" - notice how fruits change when we push to shoppingCart
const fruits = ["Apples", "Pear", "Orange"];
console.log(fruits.length);
// push a new value into the "copy"
const shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(shoppingCart);
// what's in fruits?
console.log('fruits length', fruits);


// --- OBJECTS ---
const ball = {
  // key: value
  color: 'red', // This is also called a "property" on the object
  funcOnObject: function() { // A function on an object is also called a "method"
    console.log(this.color);
  }
};

// We can access an object's properties by using [square brackets] or .notation (dot-notation)
console.log(ball['color']);
console.log(ball.color);

// We can set a new property with [square brackets] and .notation as well
ball['shape'] = 'round';
ball.canBounce = true;

console.log(ball);
console.log(typeof ball.funcOnObject())

// We can combine arrays and objects to do cool stuff like:
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
    name: 'Yaser',
    role: 'Online TA'
  }
]

// We can loop over the mentors array and use .notation to access and print the properties of each mentor object
for (const mentor of mentors) {
  console.log(mentor.name);
  console.log(mentor.role);
}

// Access the first element of the array by using indexing
console.log(mentors[0]);
console.log(mentors.length);

// Exercise: We use the built-in array method "find" to see if we have a mentor named Ida
const isIdaInMentors = mentors.find((mentor) => {
  return mentor.name === 'Ida'
})

console.log('Is Ida a mentor?:', isIdaInMentors)

// Access the second mentor
const secondMentor = mentors[1]
console.log(secondMentor);

// Add a new property to the second mentor - in this case Estefania - sorry for the high age 😅
secondMentor.age = 90
// Change the role of that mentor
secondMentor.role = 'Homework helper'
console.log(secondMentor);
// Estefania should be updated in the mentors array also (remember it's pass-by-reference)
console.log(mentors);

// Loop over the array using the built-in "forEach"
// access the mentor which is called Yaser
// change the role of Yaser
mentors.forEach((mentor) => {
  if (mentor.name === 'Yaser') {
    mentor.role = 'Software engineer'
  }
})

console.log(mentors);