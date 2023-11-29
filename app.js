import axios from "axios";
async function getData(user_id) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  const { data: postsOfUser } = await axios(
    // `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}&&id=${user_id}`
  );

  // console.log(`===========> infos_of_user_${user_id}`, user);
  // console.log(`===========> posts_of_user_${user_id}`, postsOfUser);
  // console.log({ user, posts: postsOfUser });
  // console.log({ user, posts: postsOfUser });

  // let mergedObject = { ...user, ...postsOfUser };
  // return mergedObject;

  console.log({ ...user, posts: postsOfUser });

  return { ...user, posts: postsOfUser };
}
export default getData;
