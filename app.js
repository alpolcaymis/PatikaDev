import axios from "axios";
async function getData(user_id) {
  // fetch data from api url || axios ile datamızı aldık
  // assign fetched data as the "user" || gelen datayı "user" olarak atıyoruz, saklıyoruz.
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  // fetch data from api url || axios ile datamızı aldık
  // assign fetched data as "postsOfUser" || gelen datayı "postsOfUser" olarak atıyoruz, saklıyoruz.
  const { data: postsOfUser } = await axios(
    // `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`

    // aşağıdaki if statement, tüm user_id inputları için yanlızca tek bir ve ilk postu output etmemizi sağlayan bir çözüm.
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}&&id=${user_id}${
      user_id > 1 ? 0 : ""
    }`
  );

  console.log({ ...user, posts: postsOfUser });

  //Spread operator objemizi kopyalamayı sağlıyor ve ödevdeki görünümün aynısını elde etmeyi başarıyoruz.
  return { ...user, posts: postsOfUser };
}
export default getData;
