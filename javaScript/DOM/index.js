// // Multiple element selector
// console.log(document.getElementsByClassName("heading"));
// console.log(document.getElementsByTagName("h1"));

// console.log(document.querySelectorAll(".heading"));

// // Single element selector
// console.log(document.querySelector(".heading"));
// console.log(document.getElementById("heading"));

console.log(document.getElementById("heading").getAttribute("class"));

const heading = document.getElementById("heading");
heading.setAttribute("id", "header");

console.log(document.getElementById("header"));

heading.innerHTML = '<span id="span" onClick = "changeContent()"> Span </span>';
console.log(document.getElementById("header").textContent);
console.log(document.getElementById("header").innerText);
console.log(document.getElementById("header").innerHTML);

function changeContent() {
  const span = document.getElementById("span");
  span.style.display = "none";
  heading.style.color = "#fff";
  heading.style.backgroundColor = "dodgerblue";
  heading.style.borderRadius = "5px";
  heading.style.padding = ".5rem 1rem";
  heading.textContent = "Changed";
}
