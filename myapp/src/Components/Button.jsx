import React from "react";
import "./Button.css";

const Button = ({ text, variant }) => {
  return <button className={`button $ {variant}`}>{text}</button>; 
};

export default Button;