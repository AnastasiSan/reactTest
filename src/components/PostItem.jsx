import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import InputTable from "./UI/inputUpdate/InputTable";

const PostItem = (props) => {
  const [update, setUpdate] = useState("Rex");
  const [disabled, setDisabled] = useState("disabled");

  // const onChangeHandler = e => {
  //   setFormData({ name: e.target.value, age:e.target.value, email:e.target.value });
  // };

  return (
    <tr className="post">
      <td className="post__content">
        <strong>{props.number}. </strong>
      </td>
      <td>
        <InputTable disabled={disabled}  name="name" type="text" placeholder={props.post.data.name} />
      </td>
      <td>
        <InputTable disabled={disabled}  name="age" type="text" placeholder={props.post.data.age} />
      </td>
      <td>
        <InputTable disabled={disabled}  name="" type="text" placeholder={props.post.data.email} />
      </td>
      <td className="post__btns">
        <MyButton onClick={_ => setDisabled(disabled !== null ? null : "disabled")}>
          {disabled !== null ? "Редактировать" : "Сохранить"}
        </MyButton>
      </td>
      <td className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </td>
    </tr >
  )
}

export default PostItem;