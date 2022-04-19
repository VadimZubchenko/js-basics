const count = 3;


let age = 50;
let name = 'Vadim';
let boolean = false;
let sign = undefined;

console.log(count);

let person = {
  age: 50,
  name: 'Vadim'
};
let selection = 'name';
person[selection] = 'Artur';

console.log(person[selection]);

let products = ['apple', 'pinapple', 'banana' ];
console.log(products);

products[3] = 1;
console.log(products);
console.log(products.length);

function greet(name, lastName){
  console.log("Hellow " + name + ' ' + lastName + '!');
} 

greet('Sasha', 'Volkov');
    
function mathTask(number){
    return number * number;  
}

console.log(mathTask(5));
