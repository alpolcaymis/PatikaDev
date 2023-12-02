// Bunu derste görmüştük, DOM yüklendikten sonra tüm JS çalışacak. defer async falan
document.addEventListener("DOMContentLoaded", () => {
  // Önce Element'leri elime alıyorum
  // Form Container
  const form = document.getElementById("form");
  const titleInput = document.getElementById("title");
  const completedInput = document.getElementById("completed");
  // List Container
  const loadingDiv = document.getElementById("loading");
  const list = document.getElementById("list");

  // API'den verileri çekiyoruz
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((fetchedTaskObject) => {
        console.log(fetchedTaskObject);
        // Objemi listeye ekliyorum
        appendToList(fetchedTaskObject);
      });
    })
    // Sonra Loading Div'ini görünmez yapıyorum, aslında hala DOM'da duruyor.
    .then((loadingDiv.style.display = "none"));

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
