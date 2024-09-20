const expandable = document.querySelector(".expandable");
const maxChars = 50;

let text = expandable.textContent;
let isEXpanded = false;
const btn = document.querySelector(".btn");

expandable.textContent =
  text.length <= maxChars ? `${text}...` : `${text.substring(0, maxChars)}...`;

btn.addEventListener("click", () => {
  isEXpanded = !isEXpanded;
  //   console.log(isEXpanded);
  expandable.textContent = isEXpanded
    ? `${text}...`
    : `${text.substring(0, maxChars)}...`;
  btn.textContent = isEXpanded ? "Less" : "More";
});
