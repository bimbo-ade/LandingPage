import React from "react";
import { Container } from "./Input.style";
const Input = ({ icon, type, placeholder, className, label }) => {
  return (
    <>
      <Container>
        {" "}
        <input
          type={type}
          className={className}
          label={label}
          icon={icon}
          placeholder={placeholder}
        />
      </Container>
    </>
  );
};

export default Input;
