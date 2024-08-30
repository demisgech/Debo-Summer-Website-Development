const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
    const btn = item.querySelector(".btn");
    if (btn.textContent === "-") btn.textContent = "+";
    else btn.textContent = "-";
    // console.log(btn);
  });
});
