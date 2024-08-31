function move() {
  let isReseted = false;
  if (!isReseted) {
    isReseted = true;
    let progressBar = document.querySelector(".progress__bar");
    let progressValue = document.querySelector(".progress--value");
    let width = 10;
    let interval = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
        isReseted = false;
      } else {
        width++;
        progressBar.style.width = width + "%";
        progressBar.textContent = width + "%";
        progressValue.textContent = width + "%";
      }
    }
  }
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", move);
