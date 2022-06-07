import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice"


const AddPostForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanaged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch (
        postAdded(title, content)
      )
      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanaged}
        />
        <button
          onClick={onSavePostClicked}
          type="button">Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm