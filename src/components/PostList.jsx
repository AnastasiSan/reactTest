import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Уровень</th>
            <th>Опыт работы</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        {posts.map((post, index) =>
          <PostItem remove={remove} number={index + 1} post={post} key={post._id} />
        )}
        </tbody>
      </table>
    </div>
  )
}

export default PostList;