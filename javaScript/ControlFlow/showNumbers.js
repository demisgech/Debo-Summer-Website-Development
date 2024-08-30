// Function hoisting
showNumbers(15);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "Even");
//     else console.log(i, "Odd");
//     // const message = i % 2 === 0 ? "Even" : "Odd";
//     // console.log(i, message);
//   }
// }

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 === 0) console.log(i, "Even");
    // else console.log(i, "Odd");

    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}

function getMin(x, y) {
  return x < y ? x : y;
}

const min = getMin(12, 13);
console.log(min);
