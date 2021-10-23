console.log('I love pizza');

const myFavPizza = 'Napolitana';
const priceOfPizza = 75;

// console.log('New pizza order: ' + myFavPizza + '. The price of the pizza is: ' + priceOfPizza);

// -------- Part 2 ---------
const pizzaAmount = 3;
const isFamilySize = true;

let totalPrice = priceOfPizza * pizzaAmount;
let pizzaType;

if (isFamilySize) {
  totalPrice = totalPrice * 2;
  pizzaType = " family ";
} else {
  pizzaType = " normal ";
}

console.log('New pizza order: ' + pizzaAmount + pizzaType + myFavPizza + '. Total price: ' + totalPrice + ' kr');