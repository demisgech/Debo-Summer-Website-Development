// const btn = document.getElementById("btn");

// btn.addEventListener("click", subscribe);
// function subscribe() {
//   if (btn.textContent.toUpperCase() === "SUBSCRIBED") {
//     btn.textContent = "Subscribe";
//     btn.style.backgroundColor = "red";
//   } else {
//     btn.style.backgroundColor = "grey";
//     btn.textContent = "Subscribed";
//   }
// }

// function subscribe() {
//   if (btn.textContent.toUpperCase() === "SUBSCRIBED")
//     btn.textContent = "Subscribe";
//   else btn.textContent = "Subscribed";
// }

const btn = document.getElementById("btn");

btn.addEventListener("click", subscribe);

function subscribe() {
  const body = document.body;
  if (btn.textContent === "Subscribe") {
    body.style.backgroundColor = "green";
    btn.textContent = "Subscribed";
    btn.style.backgroundColor = "grey";
  } else {
    body.style.backgroundColor = "dodgerblue";
    btn.textContent = "Subscribe";
    btn.style.backgroundColor = "red";
  }
}
