import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <tr className="post">
      <td className="post__content">
        <strong>{props.number}. </strong>
      </td>
      <td>
        {props.post.data.name}
      </td>
      <td>
        {props.post.data.age}
      </td>
      <td>
        {props.post.data.email}
      </td>
      <td className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </td>
    </tr>
  )
}

export default PostItem;