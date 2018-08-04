import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/api/items">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/api/items">
              AddNew
            </NavLink>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default NavBar;
