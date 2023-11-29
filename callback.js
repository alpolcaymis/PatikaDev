import fetch from "node-fetch";
// setTimeout(() => {
//   console.log("merhaba");
// }, 1000);

// setInterval(() => {
//   console.log("ben her saniye çalışacağım.");
// }, 1000);

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("merhaba");
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((canimDatam) => canimDatam.json())
//   .then((usersSeverim) => console.log(usersSeverim));

// fetch("https://jsonplaceholder.typicode.com/users/3")
//   .then((data1) => data1.json())
//   .then((users) => {
//     console.log("Users Yüklendi", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data2) => data2.json())
//       .then((posts) => console.log("Posts Yüklendi", posts));
//   });

(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();

  console.log("users", users);
  console.log("post1", post1);
  console.log("post2", post2);
})();
