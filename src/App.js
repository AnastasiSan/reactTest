import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
// import Counter from './components/Counter';
import Data from './data.json';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState(Data);

  const createPost = (newPost) => {
    setPosts([...posts, newPost ])
    console.log(posts)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p._id !== post._id))
  };

  async function fetchData() {
    const responce = await axios.get('http://178.128.196.163:3000/api/records')
    setPosts(responce.data);
    // const test = JSON.parse(responce.data)
    // console.log(test)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0

        ?
        <PostList remove={removePost} posts={posts} title="Список соискателей" />

        :
        <h1 style={{ textAlign: 'center' }}>
          Соискатели не найдены!
        </h1>

      }
    </div>
  );
};

export default App;
