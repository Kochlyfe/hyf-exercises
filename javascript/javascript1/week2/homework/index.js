// --- Flight booking fullname function ---
// Create function called getFullname
// It should take 2 parameters: firstname and surname
// function getFullname(firstname, surname) {
//   return firstname + ' ' + surname;
// }

// Create two variables, fullname1 and fullname2
// Assign the two fullname variables to calling the getFullname
// const fullname1 = getFullname('Benjamin', 'Hughes');
// const fullname2 = getFullname('Joachim', 'Koch');

// Log out the two fullname variables
// console.log(fullname1);
// console.log(fullname2);

// --- Flight booking formal fullname ---
function getFullname(firstname, surname, useFormalName) {
  if (!firstname || !surname) throw new Error("Missing first or surname");
  const fullname = firstname + " " + surname;
  return useFormalName ? "Lord " + fullname : fullname;
}

// Create two variables, fullname1 and fullname2
// Assign the two fullname variables to calling the getFullname
const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2 = getFullname("Joachim", "Koch");
// const fullname3 = getFullname('Joachim');

// Log out the two fullname variables
// console.log(fullname1);
// console.log(fullname2);
// console.log(fullname3);

// --- Event application ---
// Create function getEventWeekday
function getEventWeekday(daysUntilEvent) {
  const today = new Date().getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysFromToday = daysUntilEvent + today;

  return weekdays[daysFromToday % 7];
}

// console.log(getEventWeekday(4));
// console.log(getEventWeekday(7));

// --- Weather wear ---
function whatShouldIWear(temperature) {
  if (temperature < 0) return "The largest and warmest jacket you can find";
  if (temperature < 10) return "A decent jacket";
  if (temperature < 20) return "A shirt or a sweater is fine";
  if (temperature < 30) return "Just go to the beach";
  return "Something warm";
}

// console.log(whatShouldIWear(-5));
// console.log(whatShouldIWear(8));
// console.log(whatShouldIWear(17));
// console.log(whatShouldIWear(25));

// --- Student manager ---
const class20Students = [];
function addStudentToClass(studentName) {
  // check if the studentName is an empty string
  if (!studentName) {
    console.log('Cannot add a student without a name')
    return;
  };

  // check if the student is already in the class
  const isAlreadyInClass = class20Students.find((student) => student === studentName);
  if (isAlreadyInClass) {
    console.log(`${studentName} is already in the class`);
    return;
  }

  // check if it is the Queen
  const isQueen = studentName === 'Queen of Denmark';

  // check if the class is already full
  const classIsFull = getNumberOfStudents() >= 6;
  if (classIsFull && !isQueen) {
    console.log('Class is full, unfortunately we cannot add anymore');
    return;
  }

  // push to the class20Students array
  class20Students.push(studentName);
}

function getNumberOfStudents() {
  return class20Students.length;
}

addStudentToClass('Student1');
addStudentToClass('');
addStudentToClass('Student1'); // should already be in the class
addStudentToClass('Student2');
addStudentToClass('Student3');
addStudentToClass('Student4');
addStudentToClass('Student5');
addStudentToClass('Student6');
addStudentToClass('Student7'); // should not be allowed
addStudentToClass('Queen of Denmark'); // should be added
addStudentToClass('Queen of Denmark'); // should not be added again
console.log(class20Students);
console.log(getNumberOfStudents())

// --- Candy helper (Optional) ---
const candyPrices = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  'chewing-gum': 0.03,
}

const boughtCandy = [];

function addCandy(candyType, weight) {
  const validCandyTypes = ['sweet', 'chocolate', 'toffee', 'chewing-gum'];
  if (!validCandyTypes.includes(candyType)) {
    console.log('Candy type does not exist in this candystore');
    return;
  }

  if (typeof weight !== 'number') {
    console.log('Weight is not specified as number, cannot calculate the price')
    return;
  }

  // If we get here, we can calculate and push the price to the boughtCandyPrices array
  if (canBuyMoreCandy()) {
    const calculatedPrice = candyPrices[candyType] * weight;
    boughtCandy.push(calculatedPrice);
  }
}

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let currentPrice = 0;
  for (candy of boughtCandy) {
    currentPrice += candy;
  }

  const canBuyMore = currentPrice < amountToSpend;
  if (canBuyMore) console.log('You can buy more, so please do!')  
  if (!canBuyMore) console.log('Enough candy for you!')

  return canBuyMore;
}

console.log('Amount to spend', amountToSpend);
addCandy('sweet', 20)
addCandy('chocolate', 20)
addCandy('toffee', 20)
addCandy('chewing-gum', 100)
console.log(boughtCandy);