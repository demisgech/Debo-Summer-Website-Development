let users = [
  {
    id: 1,
    username: "@demisgech",
    url: "../../images/forestSky.jpg",
    body: `
Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 1,
    username: "@abriham",
    url: "../../images/img_nature_wide.jpg",
    body: `
Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 2,
    username: "@dereje",
    url: "../../images/greenRea.jpeg",
    body: `
Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    username: "@rediet",
    url: "../../images/mountain.avif",
    body: `
Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 4,
    username: "@ermias",
    url: "../../images/mountainLake.jpg",
    body: `
Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
];

const div = document.createElement("div");
div.className = "user-container";
const container = document.querySelector(".container");

div.innerHTML = users.map((user) => {
  return `
  <div class="user">
    <img src="${user.url}" />
    <p class="username"> ${user.username} </p>
    <p> ${user.body} </p>
  </div>`;
  //   console.log(div.innerHTML);
});
container.appendChild(div);
// console.log(div);
