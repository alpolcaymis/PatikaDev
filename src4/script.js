const postCardContainer = document.querySelector(
  "[data-posts-cards-container]"
);
const postCardTemplate = document.querySelector("[data-post-template]");
const searchInput = document.querySelector("[data-search]");

let posts = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  posts.forEach((post) => {
    const isVisible =
      post.title.toLowerCase().includes(value) ||
      post.body.toLowerCase().includes(value);
    post.element.classList.toggle("hide", !isVisible);
  });
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    posts = data.map((post) => {
      const card = postCardTemplate.content.cloneNode(true).children[0];
      const title = card.querySelector("[data-title]");
      const body = card.querySelector("[data-body]");
      const deleteBtn = card.querySelector("[data-deleteBtn]");
      title.textContent = post.title;
      body.textContent = post.body;
      postCardContainer.append(card);
      return { title: post.title, body: post.body, element: card };
    });
  });

/* const template = document.getElementById("persons");
document.body.appendChild(template.content);

const deleteButton = document.getElementById("delete");
console.log(deleteButton);
deleteButton.addEventListener("click", () => console.log("click")); */
