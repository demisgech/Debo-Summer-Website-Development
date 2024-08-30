const users = ["Abebe", "kebede", "Alemu"];
users[0] = "Dereje";
users.push("Rediet");
users.pop();

users.unshift("Ermias");
users.shift();

// console.log(users);

// console.log(users.length);

// for (let user in users) {
//   console.log(user, users[user]);
// }

// for (let user of users) {
//   console.log(user);
// }

// users.forEach(function (user) {
//   console.log(user);
// });
// users.forEach((user) => console.log(user));

let numbers = [12, 13, 15, 37, 77, 34, 56, 78, 98];

// numbers.forEach((number) => console.log(number, number * number));

let evenNumbers = [];
let oddNumbers = [];

// for (let number of numbers) {
//   if (number % 2 === 0) evenNumbers.push(number);
//   else oddNumbers.push(number);
// }

numbers.forEach((number) => {
  if (number % 2 === 0) evenNumbers.push(number);
  else oddNumbers.push(number);
});

// console.log("Even");
// evenNumbers.forEach((evenNum) => console.log(evenNum));

// console.log("Odd");
// oddNumbers.forEach((oddNum) => console.log(oddNum));

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// evenNumbers = [];
// oddNumbers = [];

// evenNumbers = numbers.filter((number) => number % 2 === 0);
// oddNumbers = numbers.filter((number) => number % 2 === 1);

// console.log(evenNumbers);
// console.log(oddNumbers);

let listOne = [1, 2, 3, 4];
let listTwo = [5, 6, 7, 8];
let listThree = [];

listOne.forEach((item) => listThree.push(item));
listTwo.forEach((item) => listThree.push(item));

// console.log(listThree);

let listFour = listOne.concat(listTwo);
// console.log(listFour);

// Spread operators
let listFive = [...listOne, "a", "b", ...listTwo];
// console.log(listFive);

// Array destructuring
let [x, y, ...lists] = listFive;

// console.log(x);
// console.log(y);
// console.log(lists);

const students = [
  {
    id: 1,
    name: "Demis",
    age: 21,
    sex: "Male",
  },
  {
    id: 2,
    name: "Dereje",
    age: 20,
    sex: "Male",
  },
  {
    id: 3,
    name: "Rediet",
    age: 21,
    sex: "Female",
  },
  {
    id: 4,
    name: "Ermias",
    age: 19,
    sex: "Male",
  },
];

console.log(students);

const maleStudents = students.filter((student) => student.sex === "Male");
console.log(maleStudents);

const femaleStudents = students.filter((student) => student.sex === "Female");
console.log(femaleStudents);

const ul = document.querySelector(".lists");

students.forEach((student) => {
  ul.innerHTML = `<li> ${student.name} </li>`;
});
const studentList = students.map((student) => `<li> ${student.name} </li>`);
// console.log(studentList);

ul.innerHTML = studentList;

const person = {
  username: "@demisgech",
  age: 21,
  address: {
    country: "Ethiopia",
    city: "Mehal Meda",
  },
};

// const username = person.username;
// const age = person.age;
// const city = person.address.city;
// const country = person.address.country;

// Object destructuring
const {
  username: us,
  age,
  address: { city, country },
} = person;
console.log(us);
