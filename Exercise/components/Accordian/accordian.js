// const collapsible = document.querySelectorAll(".collapsible");
// collapsible.forEach((item) => {
//   item.addEventListener("click", function () {
//     item.classList.toggle("collapsible--expanded");
//     const btn = item.querySelector(".btn");
//     if (btn.textContent === "-") btn.textContent = "+";
//     else btn.textContent = "-";
//     // console.log(btn);
//   });
// });

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((collapsible) => {
  // console.log(collapsible);
  collapsible.addEventListener("click", () => {
    // if (collapsible.classList.contains("collapsible--expanded"))
    //   collapsible.classList.remove("collapsible--expanded");
    // else collapsible.classList.add("collapsible--expanded");
    collapsible.classList.toggle("collapsible--expanded");
    const btn = collapsible.querySelector(".btn");
    // console.log(btn);
    if (
      collapsible.classList.contains("collapsible--expanded") &&
      btn.textContent === "+"
    )
      btn.textContent = "-";
    else btn.textContent = "+";
  });
});
