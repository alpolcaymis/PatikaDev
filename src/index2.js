// Fetch işlemi hemen çalışmaya başlasın asenkron olarak
// API'den verileri çekiyoruz ve listeliyoruz
fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((response) => response.json())
  .then((data) => {
    loadingDiv.style.display = "none";
    data.forEach((fetchedTaskObject) => {
      console.log(fetchedTaskObject);
      appendToList(fetchedTaskObject);
    });
  });

// Element'leri önce elime alıyorum
// Form Container
const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const completedInput = document.getElementById("completed");
// List Container
const loadingDiv = document.getElementById("loading");
const list = document.getElementById("list");

// Form submit edilince
form.addEventListener("submit", (e) => {
  e.preventDefault(); //reflesh önlüyor

  // Task Object'imi oluşturuyorum...
  // Form'dan gelenleri alıyorum objeye koyuyorum task = {key : value, key : value};
  const newTaskObject = {
    title: titleInput.value,
    completed: completedInput.checked,
  };

  // Listeye ekliyorum, yeni objemi yollayarak.
  appendToList(newTaskObject);

  // Formu temizliyorum
  form.reset();
});

// <ul> Liste içine yeni Task List Item ekle
function appendToList(taskObject) {
  const taskListItem = document.createElement("li"); // li koydum
  taskListItem.classList.add("list-item"); // li style ismi ekledim
  taskListItem.innerHTML = `                        
                    <strong>${taskObject.title}</strong>
                    <span>${taskObject.completed ? "✔" : "❌"}</span>
                `;
  list.appendChild(taskListItem);
}
// Bunu derste görmüştük, DOM yüklendikten sonra tüm JS çalışmasını sağlıyor. defer diye bişeyi öğrenirken görmüştük
// Tüm js dosyasını bunun içine almıştım sonra vazgeçtim.
document.addEventListener("DOMContentLoaded", () => {});
