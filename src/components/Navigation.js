import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
