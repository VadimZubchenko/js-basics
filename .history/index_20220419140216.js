const count = 3;

let age = 50;
let name = "Vadim";
let boolean = false;
let sign = undefined;

console.log(count);

let person = {
  age: 50,
  name: "Vadim",
};
let selection = "name";
person[selection] = "Artur";

console.log(person[selection]);

let products = ["apple", "pinapple", "banana"];
console.log(products);
// Addin a new product, JS dynamicly changes it's type
products[3] = 1;
console.log(products);
console.log(products.length);

// Perfoming task without 'return'
function greet(name, lastName) {
  console.log("Hellow " + name + " " + lastName + "!");
}

greet("Sasha", "Volkov");

// Calcuting a value with 'return'
function mathTask(number) {
  return number * number;
}
// The result is displayed in the browser console
console.log(mathTask(12));
