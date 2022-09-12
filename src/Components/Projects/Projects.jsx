import React from "react";
import { Div } from "./Projects.style";
import Button from "../Button/Button";
import Projectdata from "../../Data/Projectdata";
const Projects = () => {
  return (
    <Div>
      <h1> My Projects</h1>
      <div className="container">
        {Projectdata.map((items) => {
          return (
            <>
              <div className="cont">
                <div className="cont1"> </div>
                <div className="image">
                  <img src={items.img} alt="" />
                </div>
                <div className="text">
                  <h3> {items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Button className="btn primary--solid large"> View More</Button>
    </Div>
  );
};

export default Projects;
