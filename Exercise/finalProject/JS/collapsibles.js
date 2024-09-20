const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("collapsible--expanded");
  });
});
