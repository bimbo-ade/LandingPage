import React from "react";
import { Div } from "./Footer.style";
import { FaFacebookSquare } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {/* <Line></Line> */}
      <Div>
        <div className="img-cont">
          <img src="" alt="logo" width={200} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, est velit at eveniet omnis modi sit veniam illo
            veritatis facere necessitatibus.
          </p>
        </div>

        <div className="contact">
          <FaTwitterSquare />
          <FaFacebookSquare />
          <FaInstagramSquare />
          <p>12 Taiwo Osho Street,Ikorodu,Lagos State,Nigeria.</p>
        </div>
      </Div>
    </>
  );
};
export default Footer;
