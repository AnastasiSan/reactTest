import React, { useState } from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({name: '', age: '', email: '' })


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post
    }
    create(newPost)
    setPost({name: '', age: '', email: '' })
  }

  return (
    <form>
      <MyInput
        value={post.name}
        onChange={e => setPost({ ...post, name: e.target.value })}
        type="text"
        placeholder="Имя"
      />
      <MyInput
        value={post.age}
        onChange={e => setPost({ ...post, age: e.target.value })}
        type="text"
        placeholder="Уровень"
      />
      <MyInput
        value={post.email}
        onChange={e => setPost({ ...post, email: e.target.value })}
        type="text"
        placeholder="Опыт работы"
      />
      <MyButton onClick={addNewPost}>Добавить соискателя</MyButton>
    </form>
  );
};

export default PostForm;