import React from "react";
import MyButton from "./UI/button/MyButton";

class ButtonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    
  }

  render() {
    return (
      <MyButton onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Редактировать' : 'Сохранить'}
      </MyButton>
    );
  }
}

export default ButtonTable;