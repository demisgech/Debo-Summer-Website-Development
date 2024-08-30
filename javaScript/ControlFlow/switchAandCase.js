// console.log("Switch and case");

// const firstName = "demis";
// console.log(firstName.toUpperCase());

let user = "guEst".toUpperCase();
if (user === "ADMIN") console.log("Admin user");
else if (user === "GUEST") console.log("Guest User!");
else console.log("Unknown User!");

switch (user) {
  case "ADMIN":
    console.log("Admin User!");
    break;
  case "GUEST":
    console.log("Guest User!");
    break;
  default:
    console.log("Unknown User!");
}
