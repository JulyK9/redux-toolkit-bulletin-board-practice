import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from './postsSlice';

const PostList = () => {

  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
    <article key={posts.id}>
      <h3>{posts.title}</h3>
      <p>{posts.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section>
      <h2>posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostList