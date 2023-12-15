const searchInput = document.getElementById("searchInput");
const postsContainer = document.getElementById("postsContainer");
const commentModal = document.getElementById("commentModal");
const commentModalContent = document.getElementById("commentModalContent");

let allPosts = [];
let timeoutId;

// Sayfa açıldığında api'sine istek atıp verileri sayfada gösteriyorsunuz.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    allPosts = posts; //postları depoluyorum
    displayPosts(allPosts); //depolayığımı yolladım
  });

// search kısmına debounce
searchInput.addEventListener("input", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(filterPosts, 500); // 500ms saniye gecikme
});

// postlar card oluşturup container'a ekleniyor
function displayPosts(posts) {
  // depoladığımı yollayıp çağırdığım için posts dolu
  console.log("displayPosts", posts);
  //silme işlemi için boşaltıp doldurucam
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");
    postCard.innerHTML = `
                  <div class="clickable-part">
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
                  </div>
                  
                  <button onclick="deletePost(${post.id})">Delete</button>             
              `;
    postsContainer.appendChild(postCard);

    postCard.children[0].addEventListener("click", () => {
      showComments(post.id);
    });
  });
}

// yorumları commentModalContent içine doldurup gösteriyorum
function showComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((commentsArray) => {
      const commentList = commentsArray
        .map(
          //yeni bişey yarattığım için map kullandım
          (commentObj) =>
            `<span>postId: ${commentObj.postId} |</span>
            <span>id: ${commentObj.id} |</span>
            <span>name: ${commentObj.name} |</span>
            <span>email: ${commentObj.email} |</span>
            <p>body: ${commentObj.body} |</p>
            <hr/>`
        )
        .join(""); //virgüllerden kurtuluyorum
      commentModalContent.innerHTML = commentList;
      commentModal.style.display = "flex"; //şu hareket modal'i görünür kılıyor
    });
}

// console.log("deletePosts1", allPosts);
function deletePost(postId) {
  // console.log("deletePosts2", allPosts);

  // post.id'leri 1,2,3,4 diye gezerken seçtiğim olmayanlar kalsın
  allPosts = allPosts.filter((post) => post.id !== postId);

  // Silinen postu filtrelemeden kaldır
  filterPosts();
}

console.log("Dışardan bakıyorum boş", allPosts);

// Postları arama filtresine göre güncelle
function filterPosts() {
  console.log("filterPost içinden bakıyorum boş", allPosts);

  const searchTerm = searchInput.value.toLowerCase();

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.body.toLowerCase().includes(searchTerm)
  );
  displayPosts(filteredPosts);
}
// Modal dışına tıklayınca modalı görünmez yap backdrop etkisi
commentModal.addEventListener("click", function (event) {
  if (event.target === commentModal) {
    commentModal.style.display = "none";
  }
});
