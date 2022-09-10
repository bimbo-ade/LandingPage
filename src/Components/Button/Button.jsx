import React from "react";
import "./Button.css";
const Button = ({ children, className, onClick, icon }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {icon}
        {children}
      </button>
    </>
  );
};
export default Button;
