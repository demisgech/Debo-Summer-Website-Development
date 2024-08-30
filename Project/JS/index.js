const users = [
  {
    id: 1,
    username: "@demisgech",
    url: "../../images/forestSky.jpg",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    username: "@demisgech",
    url: "../../images/forestSky.jpg",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    username: "@demisgech",
    url: "../../images/forestSky.jpg",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    username: "@demisgech",
    url: "../../images/forestSky.jpg",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const div = document.createElement("div");
div.className = "container";

div.innerHTML = users.map((user) => {
  return `<div class="card">
    <img src="${user.url}"/>
    <p class="username"> ${user.username}</p>
    <p>${user.body}</p>
    </div>`;
});
document.body.appendChild(div);
