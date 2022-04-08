import React, { useState } from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ name: '', age: '', email: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post
    }
    create(newPost)
    setPost({ name: '', age: '', email: '' })
  }

  return (
    <form>
      <MyInput
        id="name"
        value={post.name}
        onChange={e => setPost({ ...post, name: e.target.value})}
        type="text"
        placeholder="Имя"
      />
      <MyInput
        id="age"
        value={post.age}
        onChange={e => setPost({ ...post, age: e.target.value })}
        type="text"
        placeholder="Возраст"
      />
      <MyInput
        id="mail"
        value={post.email}
        onChange={e => setPost({ ...post, email: e.target.value })}
        type="text"
        placeholder="Почта"
      />
      <MyButton onClick={addNewPost}>Добавить соискателя</MyButton>
    </form>
  );
};

export default PostForm;