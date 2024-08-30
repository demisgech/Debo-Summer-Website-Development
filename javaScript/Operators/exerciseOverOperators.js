console.log("Operators");

let grade = 12;
let hasTakenBasicComputer = true;
// let eligibleForWebDev = grade >= 12 && hasTakenBasicComputer;

let eligibleForWebDev = grade >= 12 || hasTakenBasicComputer;
console.log("EligibleForWebDev ", eligibleForWebDev);

let applicationRefused = !eligibleForWebDev;
console.log("Application Refused ", applicationRefused);

let isEthiopianCitizen = false;
let workExperience = 2;
let hasBachelorDegree = false;

let isHireable =
  isEthiopianCitizen && (workExperience >= 3 || hasBachelorDegree);

console.log("IsHireable ", isHireable);

let isNotApproved = !isHireable;
console.log("IsNotApproved", isNotApproved);

// Falsy and Truthy

// Falsy

/*
 - false
 - 0
 null
 ''
 NaN
 undefined
*/

let defaultColor = "Black";
let selectedColor = "blue" || defaultColor;
console.log(selectedColor);
