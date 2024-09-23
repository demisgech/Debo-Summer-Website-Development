import { Stopwatch } from "./Stopwatch.js";

const startStopBtn = document.querySelector("#start-stop-btn");
const resetBtn = document.querySelector("#reset-btn");
const timer = document.querySelector("#timer");
const stopwatch = new Stopwatch(startStopBtn, resetBtn, timer);
stopwatch.click();

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// let leadingSeconds = 0;
// let leadingMinutes = 0;
// let leadingHours = 0;
// function stopwatch() {
//   seconds++;
//   if (seconds / 60 === 1) {
//     minutes++;
//     seconds = 0;
//     if (minutes / 60 === 1) {
//       hours++;
//       minutes = 0;
//     }
//   }

//   if (seconds < 10) leadingSeconds = "0" + seconds.toString();
//   else leadingSeconds = seconds;

//   if (minutes < 10) leadingMinutes = "0" + minutes.toString();
//   else leadingMinutes = minutes;

//   if (hours < 10) leadingHours = "0" + hours.toString();
//   else leadingHours = hours;

//   timer.textContent = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
// }

// let isRunning = false;
// let interval = null;
// startStopBtn.addEventListener("click", () => {
//   if (!isRunning) {
//     interval = setInterval(stopwatch, 10);
//     isRunning = true;
//   } else {
//     clearInterval(interval);
//     isRunning = false;
//   }
// });

// resetBtn.addEventListener("click", () => {
//   clearInterval(interval);
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   timer.textContent = "00:00:00";
// });
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// let leadingSeconds = 0;
// let leadingMinutes = 0;
// let leadingHours = 0;
// function stopwatch() {
//   seconds++;
//   if (seconds / 60 === 1) {
//     seconds = 0;
//     minutes++;
//     if (minutes / 60 === 1) {
//       minutes = 0;
//       hours++;
//     }
//   }

//   if (seconds < 10) leadingSeconds = "0" + seconds.toString();
//   else leadingSeconds = seconds;

//   if (minutes < 10) leadingMinutes = "0" + minutes.toString();
//   else leadingMinutes = minutes;

//   if (hours < 10) leadingHours = "0" + hours.toString();
//   else leadingHours = hours;

//   timer.textContent = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
// }

// let isRunning = false;
// let interval = null;
// startStopBtn.addEventListener("click", () => {
//   if (!isRunning) {
//     if (startStopBtn.classList.contains("btn--start"))
//       startStopBtn.classList.remove("btn--start");
//     startStopBtn.classList.add("btn--stop");
//     startStopBtn.textContent = "Pause";
//     interval = setInterval(stopwatch, 1000);
//     isRunning = true;
//   } else {
//     if (startStopBtn.classList.contains("btn--stop"))
//       startStopBtn.classList.remove("btn--stop");
//     startStopBtn.classList.add("btn--start");
//     startStopBtn.textContent = "Start";
//     clearInterval(interval);
//     isRunning = false;
//   }
// });

// resetBtn.addEventListener("click", () => {
//   clearInterval(interval);
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   timer.textContent = "00:00:00";
// });
