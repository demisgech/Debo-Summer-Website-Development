function generateNumber() {
  const maxValue = 9999;
  const minValue = 1000;
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

const btn = document.querySelector(".btn");
const value = document.querySelector(".value");

btn.addEventListener("click", () => {
  value.textContent = generateNumber();
});
