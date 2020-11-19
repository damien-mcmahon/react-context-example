import { createContext, useEffect, useRef, useState } from "react";

import PostsCountComponent from './components/PostsCountComponent';
import PostsListComponent from './components/PostsListComponent';

import { fetchPosts } from './api';

export const PostsContext = createContext([]);

function App() {
  const [posts, setPosts] = useState([]);

  // fetch the movie data...
  useEffect(() => {
    async function getPosts() {
      const posts = await fetchPosts();
      setPosts(posts);
    }
    //async functions have to be called this way...
    getPosts();
  }, []);

  return (
    <div className="App">
      <PostsContext.Provider value={posts}>
        <PostsCountComponent />
        <PostsListComponent />
      </PostsContext.Provider>
    </div>
  );
}

export default App;
