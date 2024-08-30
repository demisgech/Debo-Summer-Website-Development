function generateNumber() {
  const maxValue = 999999;
  const minValue = 100000;
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

const value = document.querySelector(".value");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  value.textContent = generateNumber();
});
