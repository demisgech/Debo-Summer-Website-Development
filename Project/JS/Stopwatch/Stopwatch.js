export class Stopwatch {
  static #isRunning;
  static #seconds;
  static #minutes;
  static #hours;
  static #startStopBtn;
  static #resetBtn;
  static #timer;
  static #interval;
  constructor(startStopBtn, resetBtn, timer) {
    Stopwatch.#startStopBtn = startStopBtn;
    Stopwatch.#resetBtn = resetBtn;
    Stopwatch.#timer = timer;
    Stopwatch.#isRunning = false;
    Stopwatch.#seconds = 0;
    Stopwatch.#minutes = 0;
    Stopwatch.#hours = 0;
    Stopwatch.#interval = null;
  }

  click() {
    Stopwatch.#startStopBtn.addEventListener("click", () => {
      if (!Stopwatch.#isRunning) {
        Stopwatch.#interval = setInterval(Stopwatch.#start, 1000);
        Stopwatch.#isRunning = true;
      } else {
        Stopwatch.#stop();
      }
    });

    Stopwatch.#resetBtn.addEventListener("click", () => {
      Stopwatch.#reset();
    });
  }

  static #start() {
    let leadingSeconds = 0;
    let leadingMinutes = 0;
    let leadingHours = 0;
    Stopwatch.#seconds++;
    if (Stopwatch.#seconds / 60 === 1) {
      Stopwatch.#seconds = 0;
      Stopwatch.#minutes++;
      if (Stopwatch.#minutes / 60 === 1) {
        Stopwatch.#minutes = 0;
        Stopwatch.#hours++;
      }
    }

    if (Stopwatch.#seconds < 10)
      leadingSeconds = "0" + Stopwatch.#seconds.toString();
    else leadingSeconds = Stopwatch.#seconds;

    if (Stopwatch.#minutes < 10)
      leadingMinutes = "0" + Stopwatch.#minutes.toString();
    else leadingMinutes = Stopwatch.#minutes;

    if (Stopwatch.#hours < 10) leadingHours = "0" + Stopwatch.#hours.toString();
    else leadingHours = Stopwatch.#hours;

    Stopwatch.#timer.textContent = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;

    if (Stopwatch.#startStopBtn.classList.contains("btn--start"))
      Stopwatch.#startStopBtn.classList.remove("btn--start");
    Stopwatch.#startStopBtn.classList.add("btn--stop");
    Stopwatch.#startStopBtn.textContent = "Pause";
  }
  static #stop() {
    if (Stopwatch.#startStopBtn.classList.contains("btn--stop"))
      Stopwatch.#startStopBtn.classList.remove("btn--stop");
    Stopwatch.#startStopBtn.classList.add("btn--start");
    Stopwatch.#startStopBtn.textContent = "Start";
    clearInterval(Stopwatch.#interval);
    Stopwatch.#isRunning = false;
  }

  static #reset() {
    clearInterval(Stopwatch.#interval);
    Stopwatch.#seconds = 0;
    Stopwatch.#minutes = 0;
    Stopwatch.#hours = 0;
    Stopwatch.#timer.textContent = "00:00:00";
  }
}
