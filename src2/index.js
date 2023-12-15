// Önce Element'leri elime alıyorum
// Container
const container = document.getElementById("container");
// Form
const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const completedInput = document.getElementById("completed");
// List
const listContainer = document.getElementById("list-container");
const loadingDiv = document.getElementById("loading");
const list = document.getElementById("list");

// Bunu derste görmüştük, DOM yüklendikten sonra tüm JS çalışacak. defer async falan
document.addEventListener("DOMContentLoaded", () => {
  // API'den verileri çekiyoruz
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => {
      if (response.ok) {
        loadingDiv.style.display = "none";
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => {
      data.forEach((fetchedTaskObject) => {
        console.log(fetchedTaskObject);
        // Objemi listeye ekliyorum
        appendToList(fetchedTaskObject);
      });
    })
    // Sonra Loading Div'ini görünmez yapıyorum, aslında hala DOM'da duruyor.
    .catch((error) => {
      console.log(error);
      document.getElementById("loading").innerHTML = error;
    });

  function appendToList(taskObject) {
    const taskListItem = document.createElement("li"); // li koydum
    taskListItem.classList.add("list-item"); // li style ismi ekledim
    taskListItem.innerHTML = `                        
                    <strong>${taskObject.title}</strong>
                    <span>${taskObject.completed ? "✅" : "❌"}</span>
                `;
    // <ul> içine yolluyorum
    list.appendChild(taskListItem);
  }

  // Form submit edilince
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //refresh'i önlüyor

    // Task Object'imi oluşturuyorum...
    // Form'dan gelenleri alıyorum objeye koyuyorum. task = {key : value, key : value};
    const newTaskObject = {
      title: titleInput.value,
      completed: completedInput.checked,
    };

    // Objemi listeye ekliyorum
    appendToList(newTaskObject);

    // Formu temizliyorum
    form.reset();
  });
});

// Button'a basınca değişik şeyler olsun
var button = document.querySelector("button");
var header = document.querySelector("header");

button.addEventListener("click", function () {
  document.body.classList.toggle("v2body");
  // Container
  container.classList.toggle("v2container");
  // Form Container
  form.classList.toggle("v2form");
  titleInput.classList.toggle("v2titleInput");
  completedInput.classList.toggle("v2ompletedInput");
  // List Container
  loadingDiv.classList.toggle("v2loadingDiv");
  listContainer.classList.toggle("v2list");
  header.classList.toggle("v2header");
  document.querySelector("img").classList.toggle("v2img");
});
