import React, { useContext } from 'react';
import styled from 'styled-components'

import { PostsContext } from '../../App';

const PostsCountWrapper = styled.div`
  padding: 10px;
`
const PostsCountTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  text-transform: uppercase;
`

const PostsCountComponent = () => {
  const posts = useContext(PostsContext);

  return (
    <PostsCountWrapper>
      <PostsCountTitle>There are {posts?.length} posts</PostsCountTitle>
    </PostsCountWrapper>
  )
}

export default PostsCountComponent