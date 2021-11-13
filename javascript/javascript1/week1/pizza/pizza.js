console.log('pizza');
const myFavPizza = 'margarita';
const pizzaPrice = 75;
// console.log(`new pizza order: ${myFavPizza}. Price of the pizza is ${pizzaPrice}`)

const pizzaAmount = 18;
const isFamilySize = true;
const totalPrice = pizzaPrice * pizzaAmount;

if (isFamilySize === true) {
  totalPrice = 100
  console.log(`new pizza order: ${myFavPizza}. Price of the pizza is ${totalPrice * 2}`)
} else {
  console.log(`new pizza order: ${myFavPizza}. Price of the pizza is ${totalPrice}`)
}
