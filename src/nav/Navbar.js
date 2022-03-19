import React from "react";

// style
import "./navbar.css";

const Navbar = ({ changeWith }) => {
  const changeMobile = () => {
    changeWith("600px");
  };
  const changePlanshet = () => {
    changeWith("800px");
  };
  const changeDesctop = () => {
    changeWith("100%");
  };
  return (
    <nav className="navbar">
      <ul>
        <li>
          <div className="desctop" onClick={changeDesctop}>
            <i className="bi bi-laptop"></i>
          </div>
        </li>
        <li>
          <div className="laptop" onClick={changePlanshet}>
            <i className="bi bi-phone-landscape"></i>
          </div>
        </li>
        <li>
          <div className="laptop" onClick={changeMobile}>
            <i className="bi bi-phone"></i>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
