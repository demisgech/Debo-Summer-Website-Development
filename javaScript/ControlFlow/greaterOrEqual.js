let temperature = 5;

if (temperature > 30) console.log("Hot!");
else if (temperature >= 20) console.log("Nice!");
else console.log("Cold!");

let x = 20;
let y = 20;
let result;

if (x > y) result = "Greater";
else if (x < y) result = "Less";
else result = "Equal";
console.log(result);

result = x > y ? "Greater" : x < y ? "Less" : "Equal";
console.log(result);

// PM and AM
let hour = 24;

if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternon!");
else console.log("Good evening!");
