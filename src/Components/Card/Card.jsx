import React from "react";
import { Div } from "./Card.style";
const Card = () => {
  return (
    <Div>
      <div className="cont">
        <div className="card"></div>

        <div className="card2"></div>

        <div className="card3"></div>
      </div>

      <div className="text">
        <div className="line"></div>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          consectetur? Sit, obcaecati harum enim quod distinctio error autem
          maiores reiciendis quae minima possimus aut architecto laudantium
          similique velit provident. Error nulla, ipsam molestiae corrupti atque
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          consectetur? Sit, obcaecati harum enim quod distinctio error autem
          maiores reiciendis quae minima possimus aut architecto laudantium
          similique velit provident. Error nulla, ipsam molestiae corrupti atque
          iusto earum cupiditate velit sed asperiores natus dolor quasi
        </p>
      </div>
    </Div>
  );
};

export default Card;
