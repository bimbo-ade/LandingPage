import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Div } from "./Contact.style";
import { FaFacebookSquare } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";

const Login = () => {
  return (
    <Div>
      <div className="text">
        <h4>Please Feel Free to reach me</h4>
        <div className="contact">
          <div className="icons">
            <FaTwitterSquare />
            <span>@zionnestar</span>
          </div>
          <div className="icons">
            <FaFacebookSquare /> <span>@zionnestar</span>
          </div>
          <div className="icons">
            <FaInstagramSquare /> <span>@zionnestar</span>
          </div>
        </div>
      </div>
      <div className="cont">
        <h3>Get in Touch</h3>
        <Input type="text" placeholder="name" />

        <Input placeholder="email" type="email" />

        <Button className="btn primary--solid medium"> Submit</Button>
      </div>
    </Div>
  );
};

export default Login;
