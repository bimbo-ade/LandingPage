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
        <h2>Please Feel Free to call me</h2>
        <div className="contact">
          <div className="ico">
            <FaTwitterSquare />
            <span>@zionnestar</span>
          </div>
          <div className="ico">
            <FaFacebookSquare /> <span>@zionnestar</span>
          </div>
          <div className="ico">
            <FaInstagramSquare /> <span>@zionnestar</span>
          </div>
        </div>
      </div>
      <div className="cont">
        <h3>Get in Touch</h3>
        <Input type="text" placeholder="name" />

        <Input placeholder="Email" type="email" />

        <Button className="btn primary--solid medium"> Submit</Button>
      </div>
    </Div>
  );
};

export default Login;
