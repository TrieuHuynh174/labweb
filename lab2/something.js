let age = 25;
const name = "John Doe";
let isStudent = true;

console.log("Age:", age);
console.log("Name:", name);
console.log("Is Student:", isStudent);

let a =5 , b=10;
console.log("Sum:", a + b);
console.log(a === b);
console.log(a == b);
console.log(a > b || a < b);

if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

function greet(name) {
  return `Hello, ${name}!`;
}

const sum = (a, b) => a + b;

console.log(greet("John")); // "Hello, John!"
console.log(sum(3, 7)); // 10

let fruits = ["apple", "banana", "cherry"];
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(fruits[1]); // "banana"
console.log(person.name); // "John"

