import React, { useContext } from 'react';
import styled from 'styled-components';


import { PostsContext } from '../../App';

const PostWrapper = styled.div`
  padding: 10px;

  @media only screen and (max-width: 600px) {
    background: red;
  }
`;

const PostItem = styled.div`
  border-bottom: 1px dashed #CCC;
  margin: 10px 0;
`

const PostTitle = styled.h2`
  margin: 0;
  font-size: 16px;
`

const PostsListComponent = () => {
  const posts = useContext(PostsContext);

  return (
    <PostWrapper>
      {posts.map(post => (
        <PostItem key={post.id}>
          <PostTitle>{post.title}</PostTitle>
        </PostItem>
      ))}
    </PostWrapper>
  )
}

export default PostsListComponent;