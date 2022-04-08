import React from "react";
import classes from './InputTable.module.css'

const InputTable = (props) => {
  return (
    <input className={classes.InputTable} {...props}/>
  )
};

export default InputTable;