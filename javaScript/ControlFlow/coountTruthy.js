const array = [0, 1, 2, 3, null, 7, undefined];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(countTruthy(array));

const firstName = "Demis";
console.log(firstName);
