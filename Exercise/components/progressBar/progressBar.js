function progressMover() {
  let width = 10;
  const interval = setInterval(moverControl, 50);
  function moverControl() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      let progressBar = document.querySelector(".progress__bar");
      progressBar.style.width = width + "%";
      progressBar.textContent = width + "%";
      let progressValue = document.querySelector(".progress__value");
      progressValue.textContent = width + "%";
    }
  }
}

document.querySelector(".btn").addEventListener("click", progressMover);
