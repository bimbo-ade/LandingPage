import React from "react";
import { Div } from "./Navbar.style";
const Navbar = () => {
  return (
    <Div>
      <h2>ZIONNE</h2>
      <div className="links">
        <ul>
          <li>Home</li>

          <li>About</li>

          <li>Project</li>

          <li>Blog</li>

          <li>Contact</li>
        </ul>
      </div>
    </Div>
  );
};

export default Navbar;
