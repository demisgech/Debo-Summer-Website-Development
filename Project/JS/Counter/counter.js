// const value = document.querySelector(".value");

// const decreaseBtn = document.querySelector(".decrease");
// const resetBtn = document.querySelector(".reset");
// const increaseBtn = document.querySelector(".increase");

// let counter = 0;

// decreaseBtn.addEventListener("click", () => {
//   //   console.log("Clicked");
//   counter--;
//   value.textContent = counter;
//   if (counter < 0) value.className = "red";
// });

// increaseBtn.addEventListener("click", () => {
//   counter++;
//   value.textContent = counter;
//   if (counter > 0) value.className = "green";
// });

// resetBtn.addEventListener("click", () => {
//   counter = 0;
//   value.textContent = counter;
//   value.className = "black";
// });

let count = 0;
const value = document.querySelector(".value");

const btns = document.querySelectorAll(".btn");
// console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(event.currentTarget);
    if (btn.classList.contains("decrease")) {
      value.textContent = --count;
    }

    if (btn.classList.contains("reset")) {
      value.textContent = count = 0;
    }

    if (btn.classList.contains("increase")) {
      value.textContent = ++count;
    }

    if (count > 0) {
      if (value.classList.contains("red")) value.classList.remove("red");
      else if (value.classList.contains("black"))
        value.classList.remove("black");
      else value.classList.add("green");
    } else if (count < 0) {
      if (value.classList.contains("black")) value.classList.remove("black");
      else if (value.classList.contains("green"))
        value.classList.remove("green");
      else value.classList.add("red");
    } else if (count === 0) {
      if (value.classList.contains("red")) value.classList.remove("red");
      else if (value.classList.contains("green"))
        value.classList.remove("green");
      else value.classList.add("black");
    }
  });
});
