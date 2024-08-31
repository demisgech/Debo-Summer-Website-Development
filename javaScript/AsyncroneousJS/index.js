console.log("before...");
setTimeout(() => {
  console.log("Set timeout");
}, 1000);

console.log("after...");

// setInterval(() => {
//   console.log("Yo");
// }, 200);

function timer() {
  let count = 0;
  let interval = setInterval(couter, 500);
  function couter() {
    if (count >= 10) {
      clearInterval(interval);
      console.log("Stopped");
    } else {
      count++;
      console.log(count);
    }
  }
}
timer();

// clearTimeout(id)
