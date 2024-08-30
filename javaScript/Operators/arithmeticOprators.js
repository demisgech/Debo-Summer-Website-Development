let x = 10;
let y = 3;

// Arithmetic operators (+ , -, *, /, %, ++, --, **)

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(++x);
console.log(x++);
console.log(x);
console.log(--x);
console.log(x--);
console.log(x);

let sales = prompt("Sales");
console.log("Sales = $" + sales);

const taxRate = 0.13;
let tax = sales * taxRate;
console.log("Tax = $" + tax);

const discountRate = 0.12;
let discount = sales * discountRate;
console.log("Discount = $" + discount);

let totalSales = sales - tax + discount;
console.log("Total Sales = $" + totalSales);
let z = (10 + 2) * 10;
console.log(z);
console.log(((9 * 9) / 9) * 9);

z = x * y ** y;
console.log(z);
// parenthesis
// Exeponentiation (**)
// multiplication(*) and division (/)
// addition(+) and subtraction(-)
