import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="menu">
      <NavLink to="/"> users</NavLink>
      <NavLink to="/sing"> buttons </NavLink>
      <NavLink to="/main"> main </NavLink>
    </ul>
  );
}

export default Menu;
