const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  //grab the data and turn it into JSON
  return await fetch(POSTS_API).then(resp => resp.json());
}