console.log("selam");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Verileri HTML sayfasında göster
    const listItems = data.map((post) => {
      const item = document.createElement("li");
      item.textContent = `
        Post User_ID: ${post.userID}
        Post ID: ${post.id}
        Post Başlığı: ${post.title}
        Post İçeriği: ${post.body}
      `;
      return item;
    });

    const list = document.createElement("ul");
    list.append(...listItems);
    document.body.appendChild(list);
  });
