import React from "react";
import Button from "../Button/Button";
import { Div } from "./Banner.style";

const Banner = () => {
  return (
    <Div>
      <div className="banner"> </div>
      <div className="overlay"></div>
      <div className="overlay1"></div>
      <div className="text">
        <h2> Hi, I'm Zionne</h2>
        <p>
          {" "}
          Freelance Software Developer & UI/UX Designer from Lagos, Nigeria
        </p>
        <Button className="btn primary--solid medium"> Know Me</Button>
      </div>
    </Div>
  );
};

export default Banner;
