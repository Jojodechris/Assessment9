import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>
        <NavLink exact to="/addsnack" className="navbar-brand">
          Add snack 
        </NavLink>
        <NavLink exact to="/addDrinks" className="navbar-brand">
          Add drink 
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
