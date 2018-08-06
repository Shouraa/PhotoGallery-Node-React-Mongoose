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
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/AddNew">
            Add New Student
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Student">
            Student Detail Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
