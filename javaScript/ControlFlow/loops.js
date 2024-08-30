// Loops:
// for
// while
// do...while
// for...in
// for...of

for (let index = 0; index < 5; index++) {
  //   console.log(index);
}

let index = 0;
while (index < 5) {
  //   console.log(index);
  index++;
}

let i = 0;
do {
  //   console.log(i);
  i++;
} while (i < 5);

// Debugging - The act of finding a bug in a code line by line

let numberLimit = 100;
let sum = 0;
for (let i = 1; i <= numberLimit; i++) {
  sum += i;
}

// console.log("Sum = ", sum);

sum = 0;
let x = 0;
while (x <= numberLimit) {
  sum += x;
  x++;
}
// console.log("Sum = ", sum);

sum = 0;
let y = 0;
while (y <= numberLimit) {
  sum += y;
  y++;
}
// console.log("Sum = ", sum);

const person = {
  name: "Demis",
  age: 21,
};
//Bracket notation and
person["name"] = "Abebe";
// dot(.) notation
person.name = "John";
for (let key in person) {
  console.log(key, person[key]);
}

let students = ["Rediet", "Woldie", "Ermias", "Abriham", "Altaseb"];

for (let student of students) {
  console.log(student);
}
