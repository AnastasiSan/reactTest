// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Data from './data.json';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState(Data);
  const [isLoading, setIsLoading] = useState(false);

  const URL = 'http://178.128.196.163:3000/api/records';

  const createPost = (newPost) => {
    const newData = { data: newPost, _id: Date.now() };
    setPosts([...posts, newData]);
    axios.post(URL, newData)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p._id !== post._id))
    fetch(URL + '/' + post._id, {
      method: 'DELETE'
    })
  };

  async function getData() {
    const response = await axios.get(URL);
    const dataFromServer = response.data.filter((e) => {
      return (
        e.data.name,
        e.data.age,
        e.data.email
      )
    })
      setPosts(dataFromServer);
      setIsLoading(false);
    // console.log(dataFromServer)
  }

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [])

  if (isLoading) return <h1>Получаем данные</h1>

  // console.log(posts)

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
