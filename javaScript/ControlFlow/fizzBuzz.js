// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(null);
console.log(output);
// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a number";
//   // return NaN;
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   return input;
// }

// function getMax(x, y) {
//   // if (x > y) return x;
//   // return y;
//   return x > y ? x : y;
// }

// console.log(getMax(10, 20));

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
